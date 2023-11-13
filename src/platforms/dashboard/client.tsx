import './index.scss';
import React from 'react';
import {hydrate, render} from 'react-dom';
import {createStore, SoaProvider} from "react-soa";
import {registerResizeFixer} from "core/resize-fix";
import {addToConsole} from 'react-soa/dist/console';
import {App} from './app';
import {ConnectedRouter} from "services/routing-service";
import {ConfigProvider} from "antd";
import {I18nService} from "services/i18n-service";
import {ToastContainer} from "react-toastify";

async function initialize(root, hyd) {
	if (root) {
		const store = createStore({env: 'client'});
		addToConsole(store);
		const i18 = store.pick(I18nService);
		const dir: any = i18.direction;
		await store.invokeLinear('applicationStarted');
		await store.invokeLinear('applicationLoaded');
		const app = <SoaProvider store={store}>
			<ConnectedRouter>
				<ConfigProvider direction={dir}>
					<App/>
					<ToastContainer/>
				</ConfigProvider>
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
	await initialize(root, false);
})();
