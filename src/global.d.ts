interface Object {
	toCss: string;
}

declare module "*.module.scss" {
	const content: { [className: string]: string };
	export default content;
}

declare namespace NodeJS {
	interface ProcessEnv {
		readonly NODE_ENV: 'development' | 'production' | 'test';
		readonly REACT_PUBLIC_URL: string;
		readonly REACT_PROXY_URL: string;
		readonly REACT_GOOGLE_RECAPTCHA_SITE_KEY: string;
		readonly MEDIA_SERVER: string;
	}
}
declare const module: any;

declare module "*.jpg";
declare module "*.png" ;
declare module "*.svg" ;