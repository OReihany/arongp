const axios = require("axios");

const koaRouter = require('koa-router');
const router = new koaRouter();

router.get('/economic-calendar', async function (ctx) {
	try {
		// const response = await axios({
		// 	method: 'GET',
		// 	url: `http://51.38.71.233:8080/api/economic`,
		// });
		ctx.body = {
			data: [],
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.get('/currency-pair', async function (ctx) {
	try {
		const response = await axios({
			method: 'GET',
			url: `http://51.38.71.233:8080/api/currencyPair`,
		});
		ctx.body = {
			data: response.data,
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.get('/grade-trader', async function (ctx) {
	try {
		const response = await axios({
			method: 'GET',
			url: `http://51.38.71.233:8080/api/grade-trader`,
		});
		ctx.body = {
			data: response.data,
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;