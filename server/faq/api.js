const koaRouter = require('koa-router');
const router = new koaRouter();
const {Faq} = require('./models')
const mongoose = require('mongoose');


router.post('/create', async function (ctx) {
	try {
		const {title, subCategory} = ctx.request.body;
		let faq = new Faq();
		faq.title = title;
		faq.subCategory = subCategory;
		faq.save();
		ctx.body = {
			message: `دسته بندی  ${title.fa} با موفقیت بارگزاری گردید`,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/categories', async function (ctx) {
	try {
		const faqs = await Faq.find({}).sort({createdAt: -1});
		ctx.body = faqs || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});




router.put('/edit', async function (ctx) {
	try {
		const {title, subCategory, _id} = ctx.request.body;
		await Faq.updateOne({_id: mongoose.Types.ObjectId(_id)},
			{$set:{title, subCategory}});
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


router.delete('/delete', async function (ctx) {
	try {
		const data = ctx.request.query;
		await Faq.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
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