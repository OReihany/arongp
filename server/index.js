require('dotenv').config();
const koa = require('koa');
const koaRouter = require('koa-router');
const koaBody = require('koa-bodyparser');
const mongoose = require('mongoose');
const cors = require('@koa/cors');
const {error} = require("webpack-cli/lib/utils/logger");

(async () => {
	mongoose.set('useCreateIndex', true);
	try {
		await mongoose.connect('mongodb://localhost/aron-site', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		});
	} catch (e) {
		console.log(e);
	}
	const app = new koa();
	app.use(cors());

	Object.defineProperty(Error, 'create', {
		value: function ({message, status = 400, errorCode = 0}) {
			const error = new Error(message);
			error.status = status;
			error.errorCode = errorCode;
			return error;
		}
	});
	app.use(async (ctx, next) => {
		try {
			await next();
		} catch (e) {
			ctx.status = e.status || 500;
			ctx.body = {
				message: e.message,
				errorCode: e.errorCode,
				// stack: e.stack,
			};
			console.error(e);
		}
	});
	app.use(koaBody({
		multipart: true,
	}));
	const mainRouter = new koaRouter();
	mainRouter.use('/api/stocks', require('./stocks/api').routes());
	mainRouter.use('/api/economic', require('./economic/api').routes());
	mainRouter.use('/api/user', require('./user/api').routes());
	mainRouter.use('/api/banner', require('./banner/api').routes());
	mainRouter.use('/api/yalda', require('./yalda/api').routes());
	mainRouter.use('/api/account', require('./account/api').routes());
	mainRouter.use('/api/deposit-withdrawal', require('./deposit-withdrawal/api').routes());
	mainRouter.use('/api/bounce', require('./bounce/api').routes());
	mainRouter.use('/api/trading-symbol', require('./trading-symbols/api').routes());
	mainRouter.use('/api/setting', require('./setting/api').routes());
	mainRouter.use('/api/faq', require('./faq/api').routes());
	mainRouter.use('/api/comment', require('./comment/api').routes());

	app.use(mainRouter.routes());
	app.use(mainRouter.allowedMethods());
	let conn = null;
	await new Promise((acc) => {
		conn = app.listen(process.env.SERVER_PORT || 5000, acc);
	}).catch(error => {
		console.log('caught', error.message);
	});
	console.log(`Listening on ${conn.address().port}`);
})();