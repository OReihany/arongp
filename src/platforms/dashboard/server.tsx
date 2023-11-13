import {createStore} from "react-soa";
import React from "react";
import ReactDOM from "react-dom/server";
import {I18nService} from "services/i18n-service";

export default async function (req: any, res: any) {
	const store = createStore({
		env: 'server',
		request: req,
		response: res,
	});
	await store.invokeLinear('applicationLoaded');
	const context = {} as any;
	const i18 = store.pick(I18nService);
	const html = ReactDOM.renderToString(
		<html lang={i18.language} dir={i18.direction}>
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport"
				  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<link rel="icon" href="#"/>
			<title>Aron Groups Dashboard</title>
			<link rel="stylesheet" href="/antd.min.css"/>
			<link rel="stylesheet" href="/fonts/fonts.css"/>
			<link rel="stylesheet" href="/dashboard.css"/>
			<link rel="stylesheet" type="text/css" href="/css/ReactToastify.css" />
			<link rel="stylesheet" type="text/css" href="/css/day-picker.css"/>
		</head>
		<body>
		<input type="hidden" id="app-key" value="dashboard"/>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div id="root"/>
		<script src={`https://www.google.com/recaptcha/api.js?render=${process.env.REACT_GOOGLE_RECAPTCHA_SITE_KEY}`}/>
		<script src="/react.production.min.js"/>
		<script src="/react-dom.production.min.js"/>
		<script src="/antd.min.js"/>
		<script src="/react-router-dom.min.js"/>
		<script src="/axios.min.js"/>
		<script src="/dashboard.js"/>
		</body>
		</html>
	);
	if (context.url) {
		return res.redirect(301, context.url);
	}
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	res.end(`<!doctype html>${html}`)
}