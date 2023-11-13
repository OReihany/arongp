const koaRouter = require('koa-router');
const bcrypt = require('bcrypt');
const router = new koaRouter();
const {issueToken, authenticate} = require('./service');
const {User} = require('./models');
const mongoose = require("mongoose");

const roles = {
	Admin: 0,
	Meta: 1,
	Finance: 2,
	Advertisement: 3,
};

router.post('/login', async function (ctx) {
	const {email, password} = ctx.request.body;
	const user = await User.findOne({email});
	if (!user) {
		throw Error.create({
			message: 'invalid email address',
			errorCode: 0x00,
		});
	}
	if (!await bcrypt.compare(password, user.password)) {
		throw Error.create({
			message: 'invalid credentials',
			errorCode: 0x01,
		});
	}
	if (!user.active) {
		throw Error.create({
			message: 'inactive user',
			errorCode: 0x02,
		});
	}
	ctx.body = await issueToken({
		userId: user.id,
		seconds: 3600,
		roles: user.roles,
		role: user.role
	})
});
router.post('/register', authenticate({}), async function (ctx) {
	const {name, email, password, role, roles} = ctx.request.body;
	let user = await User.findOne({email});
	if (!!user) {
		throw Error.create({
			message: 'user already exists',
			errorCode: 0x00,
		});
	}
	user = new User();
	user.name = name;
	user.email = email;
	user.role = parseInt(role);
	user.roles = roles;
	user.password = await bcrypt.hash(password, 10);
	await user.save();
	ctx.body = {
		message: `کاربر ${name} با موفقیت ایجاد گردید. `,
		status: 201
	}
	// ctx.body = await issueToken({
	// 	userId: user.id,
	// 	seconds: 3600,
	// })
});
router.get('/info', authenticate({}), async function (ctx) {
	ctx.body = ctx.credentials.user.toJson();
});
router.get('/admins', authenticate({}), async function (ctx) {
	const user = ctx.credentials.user.toJson();
	if (!user.credentials.isAdmin) {
		throw Error.create({
			message: 'this role can not edit users.',
			errorCode: 0x00,
		});
	}
	const admins = await User.find({}, {"password": 0, "__v": 0, "createdAt": 0, "updatedAt": 0}).sort([["_id", -1]])
	return ctx.body = admins
});

router.put('/edit', authenticate({}), async function (ctx) {
	try {
		const {name, email, password, role, _id, roles} = ctx.request.body;
		const userExist = await User.countDocuments({_id: mongoose.Types.ObjectId(_id)});
		if (userExist === 0){
			throw Error.create({
				message: 'user does not exists',
				errorCode: 0x00,
			});
		}
		let editForm = {}
		if (password.length > 0){
			const newPassword = await bcrypt.hash(password, 10);
			editForm = {name, email, role: parseInt(role), password: newPassword, roles}
		}else {
			editForm = {name, email, role: parseInt(role), roles}
		}
		await User.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: editForm})
		ctx.body = {
			message: `کاربر ${name} با موفقیت ویرایش گردید. `,
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
		await User.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
		ctx.body = {
			message: `کاربر با موفقیت حذف گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});
module.exports = router;