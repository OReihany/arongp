const koaRouter = require('koa-router');
const router = new koaRouter();
const {Account, AccountCompare} = require('./models')
const mongoose = require('mongoose');


router.post('/create', async function (ctx) {
	try {
		const {currency, title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, value} = ctx.request.body;
		let account = new Account();
		account.currency = currency;
		account.title_en = title_en;
		account.title_fa = title_fa;
		account.description_en = description_en;
		account.description_fa = description_fa;
		account.href_en = href_en;
		account.href_fa = href_fa;
		account.feature = feature;
		account.modal = modal;
		account.value = parseInt(value);
		account.save();
		ctx.body = {
			message: `حساب معاملاتی ${title_fa} با موفقیت بارگزاری گردید`,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/accounts', async function (ctx) {
	try {
		const accounts = await Account.find({}).sort({currency: 1, value: 1});
		ctx.body = accounts || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/accountsCompare', async function (ctx) {
	try {
		const accountsCompare = await AccountCompare.find({}).sort({createdAt: -1});
		ctx.body = accountsCompare || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.put('/editCompare', async function (ctx) {
	try {
		const {type, data} = ctx.request.body;
		await AccountCompare.updateOne({type},
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

router.put('/edit', async function (ctx) {
	try {
		const {title_en, title_fa, description_en, description_fa, href_en, href_fa, feature = [], modal = [], _id, value} = ctx.request.body;
		await Account.updateOne({_id : mongoose.Types.ObjectId(_id)},
			{$set:{title_en, title_fa, description_en, description_fa, href_en, href_fa, feature, modal, value: parseInt(value)}});
		ctx.body = {
			message: `حساب معاملاتی ${title_fa} با موفقیت ویرایش گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.delete('/delete', async function (ctx) {
	try {
		const data = ctx.request.query;
		await Account.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
		ctx.body = {
			message: `حساب کاربری با موفقیت حذف گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;