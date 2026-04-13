#!/usr/bin/env python3
"""Capture short particle previews via Safari WebDriver and export MP4 loops."""

from __future__ import annotations

import argparse
import base64
import json
import shutil
import subprocess
import time
import urllib.error
import urllib.request
from pathlib import Path


PARTICLE_PAGES = {
    "plasma-instability": "https://particles.alexandrudan.com/plasma-instability.html",
    "diffusion": "https://particles.alexandrudan.com/diffusion.html",
    "lichtenberg": "https://particles.alexandrudan.com/lichtenberg.html",
    "quaternion-julia": "https://particles.alexandrudan.com/quaternion-julia.html",
}


class WebDriverClient:
    def __init__(self, port: int) -> None:
        self.base = f"http://127.0.0.1:{port}"

    def request(self, method: str, path: str, payload: dict | None = None) -> dict:
        data = None
        headers = {}
        if payload is not None:
            data = json.dumps(payload).encode("utf-8")
            headers["Content-Type"] = "application/json"
        req = urllib.request.Request(f"{self.base}{path}", data=data, headers=headers, method=method)
        with urllib.request.urlopen(req, timeout=60) as response:
            raw = response.read().decode("utf-8")
        if not raw:
            return {}
        return json.loads(raw)

    def wait_until_ready(self, timeout_sec: int = 30) -> None:
        deadline = time.time() + timeout_sec
        last_error: Exception | None = None
        while time.time() < deadline:
            try:
                self.request("GET", "/status")
                return
            except Exception as exc:  # noqa: BLE001
                last_error = exc
                time.sleep(0.5)
        raise RuntimeError(f"Safari WebDriver did not start in time: {last_error}")

    def create_session(self) -> str:
        payload = {
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "safari",
                }
            }
        }
        data = self.request("POST", "/session", payload)
        value = data.get("value", {})
        session_id = data.get("sessionId") or value.get("sessionId")
        if not session_id:
            raise RuntimeError(f"Could not create Safari session: {data}")
        return session_id

    def delete_session(self, session_id: str) -> None:
        try:
            self.request("DELETE", f"/session/{session_id}")
        except Exception:  # noqa: BLE001
            pass


def run_ffmpeg(frame_dir: Path, fps: int, output_file: Path) -> None:
    cmd = [
        "ffmpeg",
        "-y",
        "-framerate",
        str(fps),
        "-i",
        str(frame_dir / "%04d.png"),
        "-vf",
        "fps=20,scale=640:-2:flags=lanczos,format=yuv420p",
        "-c:v",
        "libx264",
        "-preset",
        "veryfast",
        "-crf",
        "28",
        "-movflags",
        "+faststart",
        "-an",
        str(output_file),
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate short MP4 particle previews.")
    parser.add_argument("--port", type=int, default=4444, help="SafariDriver port")
    parser.add_argument("--seconds", type=int, default=10, help="Clip length in seconds")
    parser.add_argument("--fps", type=int, default=5, help="Capture FPS")
    parser.add_argument("--width", type=int, default=960, help="Browser width")
    parser.add_argument("--height", type=int, default=620, help="Browser height")
    parser.add_argument("--workdir", type=Path, default=Path("/tmp/particle-capture"), help="Temp frame folder")
    parser.add_argument("--outdir", type=Path, default=Path.cwd(), help="Output directory for mp4 files")
    args = parser.parse_args()

    args.workdir.mkdir(parents=True, exist_ok=True)
    args.outdir.mkdir(parents=True, exist_ok=True)

    safaridriver_proc = subprocess.Popen(
        ["safaridriver", "-p", str(args.port)],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    client = WebDriverClient(args.port)
    try:
        client.wait_until_ready()
        frames_per_clip = max(1, args.seconds * args.fps)
        sleep_between_frames = 1 / args.fps

        for slug, url in PARTICLE_PAGES.items():
            print(f"Capturing {slug}...")
            frame_dir = args.workdir / slug
            if frame_dir.exists():
                shutil.rmtree(frame_dir)
            frame_dir.mkdir(parents=True, exist_ok=True)

            session_id = client.create_session()
            try:
                client.request("POST", f"/session/{session_id}/url", {"url": url})
                try:
                    client.request(
                        "POST",
                        f"/session/{session_id}/window/rect",
                        {"width": args.width, "height": args.height},
                    )
                except urllib.error.HTTPError:
                    pass
                time.sleep(2)

                for frame_idx in range(frames_per_clip):
                    shot = client.request("GET", f"/session/{session_id}/screenshot")
                    frame_bytes = base64.b64decode(shot.get("value", ""))
                    (frame_dir / f"{frame_idx:04d}.png").write_bytes(frame_bytes)
                    time.sleep(sleep_between_frames)
            finally:
                client.delete_session(session_id)

            output_file = args.outdir / f"particles-{slug}.mp4"
            run_ffmpeg(frame_dir, args.fps, output_file)
            print(f"Saved {output_file}")
    finally:
        safaridriver_proc.terminate()
        try:
            safaridriver_proc.wait(timeout=3)
        except subprocess.TimeoutExpired:
            safaridriver_proc.kill()


if __name__ == "__main__":
    main()
