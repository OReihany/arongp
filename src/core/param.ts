export function parseCookies(cookies: string) {
	if (!cookies)
		return {};
	return cookies.split(';').reduce<any>((obj, cookieString) => {
		const splitCookie = cookieString.split('=').map(cookiePart => cookiePart.trim());
		try {
			obj[splitCookie[0]] = JSON.parse(splitCookie[1])
		} catch (error) {
			obj[splitCookie[0]] = splitCookie[1]
		}
		return obj
	}, {});
}

export function clientSetCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function clientGetCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

export function clientEraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function serializeQuery(payload: any): string {
	return `?${convertData(payload)}`;
}

export function deserializeQuery(search: string): any {
	let query = search;
	if (query) {
		if (query.charAt(0) === '?') {
			query = search.substr(1);
		}
		if (query.length > 0) {
			return parseBlock(query);
		}
	}
	return {};
}

function check(value: any) {
	if (typeof value === 'undefined') {
		return;
	}
	if (typeof value === 'string') {
		if (value.length < 1) {
			return;
		}
		return encodeURIComponent(value);
	}
	if (typeof value === 'number') {
		return value;
	}
	if (typeof value === 'boolean') {
		return value ? 'true' : 'false';
	}
	if (value === null) {
		return 'null';
	}
}

function convertData(data: any) {
	return Object.keys(data).reduce((acc, key) => {
		const value = data[key];
		if (typeof value === 'string') {
			if (value.length < 1) {
				return acc;
			}
			acc.push(`${key}=${encodeURIComponent(value)}`);
			return acc;
		}
		if (typeof value === 'number') {
			acc.push(`${key}=${value}`);
			return acc;
		}
		if (typeof value === 'boolean') {
			acc.push(`${key}=${value ? 'true' : 'false'}`);
			return acc;
		}
		if (typeof value === 'object') {
			if (value === null) {
				acc.push(`${key}=null`);
				return acc;
			}
			if (Array.isArray(value)) {
				for (let i = 0; i < value.length; i += 1) {
					const v = check(value[i]);
					if (v) {
						acc.push(`${key}[${i}]=${v}`);
					}
				}
			}
		}
		return acc;
	}, []).join('&');
}

function parseBlock(block: string) {
	const obj = {} as any;
	let ks = 0;
	let ke = 0;
	let ve = 0;
	let j = 0;
	for (let i = 0; i < block.length; i += 1) {
		const c = block.charAt(i);
		if (c === '=') {
			ke = i;
			const key = block.substring(ks, ke);
			for (j = i + 1; j <= block.length; j += 1, i += 1) {
				const char = block.charAt(j);
				if (char === '&' || j === block.length) {
					ve = j;
					ks = j + 1;
					let v = block.substring(ke + 1, ve);
					if (v === 'null') {
						obj[key] = null;
					} else if (v === 'true') {
						obj[key] = true;
					} else if (v === 'false') {
						obj[key] = false;
					} else {
						v = decodeURIComponent(v);
						const num = /^[+\-]?([0-9]*[.])?[0-9]+$/.test(v);
						if (!num) {
							obj[key] = v;
						} else {
							const num = parseFloat(v);
							if (!isNaN(num)) {
								if (v.startsWith('0') && v.indexOf('.') < 0 && v !== '0') {
									obj[key] = v;
								} else {
									obj[key] = num;
								}
							} else {
								obj[key] = v;
							}
						}
					}
					break;
				}
			}
		}
	}
	return Object.keys(obj).reduce((acc, key) => {
		const idx = key.indexOf('[');
		if (idx > -1) {
			const nextIdx = key.indexOf(']', idx);
			if (nextIdx > -1) {
				const k = key.substring(0, idx);
				const i = +key.substring(idx + 1, nextIdx);
				acc[k] = acc[k] || [];
				acc[k][i] = obj[key];
			}
			return acc;
		}
		acc[key] = obj[key];
		return acc;
	}, {} as any);
}

export function decomposeUrl(url: string) {
	const spl = url.split('?');
	return {
		pathname: spl[0],
		search: spl[1] ? `?${spl[1]}` : '',
	}
}