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

vidEl.onkeydown =
	function(g) {
		if (g.keyCode == 27) {
			vidEl.src = '';
			vidEl.style.display = 'none';
			window.location.href = window.location.href.split('?')[0];
			getUrl(urlParam);
			siteCont.style.display = 'flex';
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