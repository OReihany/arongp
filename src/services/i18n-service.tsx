import {IService, observable, pick, Service, wired} from "react-soa";
import React from 'react';
import {RoutingService} from "services/routing-service";
import format from 'date-fns/format'
import dateLocaleFa from 'date-fns/locale/fa-IR'
import dateLocaleEn from 'date-fns/locale/en-US'

declare const window: any;

@Service
export class I18nService extends IService {
	@wired routingService = pick(RoutingService);
	@observable language = 'en';
	defaultLanguage = 'en';
	languages = ['en', 'fa'];
	direction = 'ltr';
	data = {};
	dictionary = {};
	applicationLoaded = async () => {
		this.language = this.getLanguage();
		this.direction = this.language == 'fa' ? 'rtl' : 'ltr';
		this.data = {
			fa: {
				dictionary: await import('../locale/fa.json'),
				locale: dateLocaleFa,
			},
			en: {
				dictionary: await import('../locale/en.json'),
				locale: dateLocaleEn,
			},
		};
		this.dictionary = this.data[this.language].dictionary;
	};
	getRoute = (path) => {
		return `/${this.language}${path}`
	};

	formatDate = (date, fmt) => {
		if (!date)
			return null;
		return format(new Date(date), fmt, {
			locale: this.data[this.language].locale,
		})
	};

	getLanguage = () => {
		const path = this.routingService.pathname;
		const match = /^\/(fa|en)/.exec(path);
		return match ? match[1] : this.defaultLanguage;
	};

	replaceLanguage = (dest) => {
		const path = this.routingService.pathname;
		return path.replace(/^\/(fa|en)/, `/${dest}`);
	};

	setLanguage = (lang: string) => {
		this.language = lang != '' ? lang : 'en' ;
		this.direction = lang == 'fa' ? 'rtl' : 'ltr';
		this.dictionary = this.data[this.language].dictionary;
		window.document.documentElement.setAttribute('lang', this.language);
		window.document.documentElement.setAttribute('dir', this.direction);
		this.routingService.replace(this.replaceLanguage(this.language));
	};

	__ = (text: string) => {
		const key = text.replace(/\n/g, '\\n');
		const val = (this.dictionary[key] || key);
		return val.replace(/\\n/g, '\n');
	}
	commafy = ( num ) => {
		var str = num.toString().split('.');
		if (str[0].length >= 5) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 5) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		return str.join('.');
	}
}