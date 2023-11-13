const koaRouter = require('koa-router');
const router = new koaRouter();
const mongoose = require('mongoose');
const {Yalda} = require('./models')
const {authenticate} = require("../user/service");


router.get('/getAll', async function (ctx) {
	try {
		const yaldas = await Yalda.find({}).sort({level: 1});
		ctx.body = {
			data: yaldas || []
		};
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.put('/edit', authenticate({}), async function (ctx) {
	try {
		const {data} = ctx.request.body;
		let new_data = data;
		console.log(data)
		for (let i = 0; i < new_data.length; i++) {
			await Yalda.updateOne({level: parseInt(new_data[i]["level"])}, {
				$set: {
					level: new_data[i]["level"], user_id: new_data[i]["user_id"], total_volume: new_data[i]["total_volume"], benefit: new_data[i]["benefit"]
				}
			}, {upsert: true})
		}
		ctx.body = {
			message: `ویرایش با موفقیت انجام شد.`,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;