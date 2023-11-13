import {getSnapshot} from "react-soa/dist/snapshot";
import {StaticRouter} from "react-router-dom";
import {createStore, SoaProvider} from "react-soa";
import React, {useEffect} from "react";
import ReactDOM from "react-dom/server";
import {App} from "./app";
import {I18nService} from "services/i18n-service";
import ReactGA from 'react-ga';


export const GApageView = (page) => {
	useEffect(() => { GApageView("landing"); }, []);
	ReactGA.pageview(page);
}



export default async function (req: any, res: any) {
	const store = createStore({
		env: 'server',
		request: req,
		response: res,
	});
	await store.invokeLinear('applicationLoaded');
	await store.invokeLinear('serverLoaded');
	const snapshot = getSnapshot(store, {
		type: 'piped',
	});
	const context = {} as any;
	const i18 = store.pick(I18nService);
	const {__} = i18;
	const html = ReactDOM.renderToString(
		<html lang={i18.language} dir={i18.direction}>
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport"
				  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
			/>
			<link rel="icon" href="#"/>
			<title>Aron Groups</title>

			<link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192"  href="/fav/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
			<link rel="stylesheet" href="/antd.min.css"/>
			<link rel="stylesheet" href="/fonts/fonts.css"/>
			<link rel="stylesheet" href="/desktop.css"/>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css"/>
			<link rel="stylesheet" type="text/css" href="/css/ReactToastify.css" />
		</head>
		<body>
		<input type="hidden" id="app-data" value={JSON.stringify(snapshot)}/>
		<input type="hidden" id="app-key" value="desktop"/>
		<noscript>You need to enable JavaScript to run this app.</noscript>
		<div id="google_translate_element"> </div>
		<div id="root" data-ssr={process.env.NODE_ENV === 'production'}>
			{process.env.NODE_ENV === 'production' && <SoaProvider store={store}>
				<StaticRouter location={req.url} context={context} basename={process.env.REACT_BASE_URL}>
					<App/>
				</StaticRouter>
			</SoaProvider>}
		</div>
		<script src={`https://www.google.com/recaptcha/api.js?render=${process.env.REACT_GOOGLE_RECAPTCHA_SITE_KEY}`}/>
		<script src="/react.production.min.js"/>
		<script src="/react-dom.production.min.js"/>
		<script src="/react-router-dom.min.js"/>
		<script src="/axios.min.js"/>
		<script src="/desktop.js"/>
		<script type="text/javascript" src="/crisp.js"/>
		{/*<script type="text/javascript" src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async />*/}
		<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
		<script src="https://rating.arongroups.co/widgets/assets/js/iframeResizer.js"></script>
		<script type="text/javascript" src="/google-translate.js" />
		<script type="text/javascript" src="/main.js" />
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