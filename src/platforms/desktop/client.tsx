import './index.scss';
import React from 'react';
import {hydrate, render} from 'react-dom';
import {createStore, SoaProvider} from "react-soa";
import {registerResizeFixer} from "core/resize-fix";
import {addToConsole} from 'react-soa/dist/console';
import {ConnectedRouter} from "services/routing-service";
import {App} from './app';
import {ToastContainer} from "react-toastify";


async function initialize(root, hyd) {
	if (root) {
		const store = createStore({env: 'client'});
		addToConsole(store);
		await store.invokeLinear('applicationStarted');
		await store.invokeLinear('applicationLoaded');
		const app = <SoaProvider store={store}>
			<ConnectedRouter>
				<App/>
				<ToastContainer/>
			</ConnectedRouter>
		</SoaProvider>;
		[hydrate, render][hyd ? 0 : 1](app, root);
	} else {
		console.error('#root not found!');
	}
}
(async () => {
	registerResizeFixer();
	const root = document.getElementById('root');
	const ssr = root.getAttribute('data-ssr') === 'true';
	await initialize(root, ssr);
})();
