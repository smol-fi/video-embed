let urlParam = window.location.search;
let vidEl = document.querySelector('#video-player');
let urlIn = document.querySelector('#url-input');
let siteCont = document.querySelector('#content-container');

urlIn.onkeydown = 
	function(j) {
		if (j.keyCode == 13) {
			embed(urlIn.value);
		}
	}

document.onkeydown =
	function(g) {
		if (g.keyCode == 27) {
			setTimeout(function(){
				// Timeout is to send this to the bottom of the stack
				window.location.href = window.location.href.split('?')[0];
			}, 0);
		}
	}

function embed(n) {
	if (urlIn.value != '') {
		m = n.replace(/(^\w+:|^)\/\//, '');
		window.location.href = window.location.href + '?v=' + m;
	}
}

function getUrl(k) {
	let vidUrl = new URLSearchParams(k).get('v');
	if (vidUrl != null && vidUrl != '' && vidUrl.includes('?v=') == false) {
		vidUrl = vidUrl.replace(/(^\w+:|^)\/\//, '');
		playUrl(vidUrl);
	} else {
		urlIn.focus();
	}
}
function playUrl(j) {
	siteCont.style.display = 'none';
	vidEl.style.display = 'inline';
	vidEl.src = 'https://' + j;
	vidEl.load();
}

window.onload = getUrl(urlParam);