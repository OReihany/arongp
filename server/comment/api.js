const koaRouter = require('koa-router');
const router = new koaRouter();
const {Comment} = require('./models')
const mongoose = require("mongoose");
const {authenticate} = require("../user/service");

router.post('/create', async function (ctx) {
	try {
		const {firstName, lastName, email, phoneNumber, message} = ctx.request.body;
		let comment = new Comment();
		comment.first_name = firstName;
		comment.last_name = lastName;
		comment.email = email;
		comment.phone_number = phoneNumber;
		comment.message = message;
		comment.save();
		ctx.body = {
			message: 'فرم شما با موفقیت بارگزاری شد.',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/comments', authenticate({}), async function (ctx) {
	const comments = await Comment.find({}).sort([["_id", -1]])
	return ctx.body = comments;
});

router.put('/edit', authenticate({}), async function (ctx) {
	try {
		const {_id} = ctx.request.body;
		const comment = await Comment.findOne({_id: mongoose.Types.ObjectId(_id)});
		await Comment.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: {status: (comment.status === 0) ? 1 : 0}})
		ctx.body = {
			message: 'تغییر وضعیت با موفقیت بارگزاری شد.',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.delete('/delete', authenticate({}), async function (ctx) {
	try {
		const data = ctx.request.query;
		await Comment.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
		ctx.body = {
			message: `پیغام با موفقیت حذف گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;