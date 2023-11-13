const koaRouter = require('koa-router');
const router = new koaRouter();
const {TradingSymbol} = require('./models')
const {authenticate} = require("../user/service");
const {mongo} = require("mongoose");



router.get('/trading-symbols', async function (ctx) {
	try {
		const tradingSymbols = await TradingSymbol.findOne({}).sort({createdAt: -1});
		ctx.body = tradingSymbols || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.put('/edit', authenticate({}),async function (ctx) {
	try {
		const {_id, data} = ctx.request.body;
		await TradingSymbol.updateOne({_id: mongo.ObjectId(_id)},
			{$set:{data}}, {upsert: true});
		ctx.body = {
			message: 'ویرایش با موفقیت انجام شد.',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;