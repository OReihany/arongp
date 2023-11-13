const fs = require('fs');
const path = require('path');
const utils = require('loader-utils');

const regex = /__\(['"](.*?)['"][),]/g;

let initialize = false;
let languages = [];
let keys = [];
let localePath = null;

function readLocale(name) {
	try {
		const read = fs.readFileSync(path.join(localePath, `${name}.json`)).toString('utf8');
		return JSON.parse(read);
	} catch (e) {
		return {};
	}
}

function saveLocale(name, locale) {
	const content = JSON.stringify(locale, null, '\t');
	fs.mkdirSync(localePath, {recursive: true});
	fs.writeFileSync(path.join(localePath, `${name}.json`), content);
}

module.exports = function(source) {
	const {getOptions} = utils;
	const {resourcePath,_compiler} = this;
	if (!initialize) {
		const options = getOptions(this);
		localePath = options.localePath;
		languages = options.languages;
		_compiler.hooks.afterCompile.tap('Localization', function(a) {
			languages.forEach((lang) => {
				saveLocale(lang, keys.reduce((output, key) => {
					const k = key;
					output[k] = output[k] || k;
					return output;
				}, readLocale(lang)));
			});
			keys = [];
		});
		initialize = true;
	}
	if(resourcePath.indexOf(localePath) > -1){
		return source;
	}
	let m = null;
	do {
		m = regex.exec(source);
		if (m) {
			keys.push(m[1]);
		}
	} while (m);
	return source;
};