require('dotenv').config();
require('./core/resolve')(__dirname);
require('./preload');

import React from "react";
import desktopServer from './platforms/desktop/server';
import dashboardServer from './platforms/dashboard/server';

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

(async () => {
	try {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
		if (process.env.NODE_ENV !== 'production') {
			const options = require('../webpack.config')(undefined, {mode: 'development'});
			const compiler = require('webpack')(options);
			app.use(require('webpack-dev-middleware')(compiler));
			app.use(require('webpack-hot-middleware')(compiler));
			app.get(/\/(desktop|dashboard)\.css/, (req, res) => {
				res.statusCode = 200;
				res.set('Content-Type', 'text/css');
				res.end('');
			});
		}

		if (!!process.env.REACT_PROXY_URL) {
			const httpProxy = require('http-proxy');
			const proxyServer = httpProxy.createProxyServer();
			app.all('/api*', (req, res) => {
				req.url = req.url.substr(4);
				return proxyServer.proxyRequest(req, res, {
					changeOrigin: true,
					target: process.env.REACT_PROXY_URL,
					secure: false,
					followRedirects: false,
				});
			});
		}
		app.use('/', express.static(path.resolve(__dirname, '..', process.env.NODE_ENV !== 'production' ? 'public' : 'build')));

		app.use(express.json());
		app.use(express.urlencoded({extended: false}));
		app.use(require('cookie-parser')());

		app.get(/^(\/(\w{2})?)?(\/dashboard)(.*)$/, async (req, res) => {
			return await dashboardServer(req, res);
		});
		app.get(/^(\/(\w{2})?)?(\/.*)$/, async (req, res) => {
			return await desktopServer(req, res);
		});


		const conn = app.listen(process.env.PORT || 3000, () => {
			console.log('Listening on ' + conn.address().port)
		});
	}catch (e) {
		console.log(e);
	}
})();
process.on('uncaughtException', (err) => {
	console.error(err);
});
