on addFullBleedImage(slideRef, imagePath)
	set imageAlias to POSIX file imagePath as alias
	tell application "Keynote"
		tell slideRef
			make new image with properties {file:imageAlias, width:1080, height:1350, position:{0, 0}}
		end tell
	end tell
end addFullBleedImage

on run argv
	set repoRoot to item 1 of argv
	set contentDir to repoRoot & "/content"
	set assetsDir to contentDir & "/slide-assets"
	set keynotePath to POSIX file (contentDir & "/linkedin-slides.key")
	set powerpointPath to POSIX file (contentDir & "/linkedin-slides.pptx")
	
	set slidePaths to {assetsDir & "/slide-01.svg.png", assetsDir & "/slide-02.svg.png", assetsDir & "/slide-03.svg.png", assetsDir & "/slide-04.svg.png", assetsDir & "/slide-05.svg.png", assetsDir & "/slide-06.svg.png", assetsDir & "/slide-07.svg.png"}
	
	tell application "Keynote"
		activate
		set deckTheme to theme "Basic White"
		set deck to make new document with properties {document theme:deckTheme, width:1080, height:1350}
		
		set base slide of slide 1 of deck to master slide "Blank" of deck
		my addFullBleedImage(slide 1 of deck, item 1 of slidePaths)
		
		repeat with imageIndex from 2 to count of slidePaths
			set newSlide to make new slide at the end of slides of deck with properties {base slide:master slide "Blank" of deck}
			my addFullBleedImage(newSlide, item imageIndex of slidePaths)
		end repeat
		
		save deck in keynotePath
		export deck to powerpointPath as Microsoft PowerPoint
		close deck saving no
	end tell
end run
