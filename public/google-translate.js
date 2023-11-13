// let timer = setInterval(googleTranslateElementInit, 500);
let timer1 = setInterval(googleTranslate, 1000);
let google_tag = null;
function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en,fa', includedLanguages: 'tr,ar,kk,uz,tg,ky,af,ps,hi,az,ka,el,ru,be,'}, 'google_translate_element');
	// return clearInterval(timer);
}

function googleTranslate() {
	// clearInterval(timer1);
	google_tag = (!google_tag) ? document.getElementById('google_translate_element'): google_tag;
	if (google_tag !== null) {
		const lang = document.getElementById('languages');
		lang.appendChild(google_tag);
	} else {
		let iframe = document.getElementsByClassName('goog-te-menu-frame')[0];
		const iWindow = iframe.contentWindow;
		const iDocument = iWindow.document;
		// const element = iDocument.getElementsByClassNa	me("goog-te-menu2-item");
		const languages_td_tag = iDocument.getElementsByTagName('td') || [];
		let languages = [];
		Object.keys(languages_td_tag).forEach(item => {
			const languages_div_tag = languages_td_tag[item].getElementsByClassName('goog-te-menu2-item') || [];
			languages = (languages_div_tag.length > 0) ? [...languages, ...languages_div_tag] : [...languages]
		})
		const lang = document.getElementById('languages');
		for (const value of languages) {
			value.getElementsByTagName('div')[0].style.backgroundColor = '#111418FF'
			value.getElementsByTagName('div')[0].getElementsByTagName('span')[1].style.color = '#ffffff'
			value.style.textAlign = 'center';
			value.style.color = '#fff';
			lang.appendChild(value);
		}
	}
	return clearInterval(timer1);
}

document.getElementById('languages').getElementsByTagName('div')[0].addEventListener('click', () => {
	timer1 = setInterval(googleTranslate, 500);
})
document.getElementById('languages').getElementsByTagName('div')[1].addEventListener('click', () => {
	timer1 = setInterval(googleTranslate, 500);
})