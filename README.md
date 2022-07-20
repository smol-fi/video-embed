# video-embed

Discord recently (as of writing this) disabled opening media.discordapp.net links in a web browser, and playing them back as you would expect files to play back on a web browser. My solution was to hack together a website which either via JavaScript and a form element, or via URL parameter (they effectively do the same thing), take the video and embed it on a static website.

## What this will do
* Allow you to watch videos hosted on discord servers via a web browser, without having to download them
* Share links to your friends without them having to download the video
* Not care whether or not the link contains a URI scheme
* Allow users to play back video via ?v=<URL> or the text input
* Let you back out by hitting escape or going back in history


## What this won't do
* Allow people to play the video on various chat services, such as Discord, via embeds
  * This would require backend code, which I am not proficient in
* Host the video on your server
  * It embeds the file onto the website into a video element. Every link is still subject to deletion.
  
  
## Contribution
Fork or make a pull request.

### Credits
Font used is VT323 by Peter Hull. It is included under /style/ and is available under the [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=ofl)
Some JavaScript is stolen from Stack Exchange, sue me.
