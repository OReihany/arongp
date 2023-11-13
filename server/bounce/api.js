const koaRouter = require('koa-router');
const router = new koaRouter();
const {Bounce, DepositWithdrawal} = require('./models')
const multer = require('@koa/multer');
const mongoose = require('mongoose');
const {authenticate} = require("../user/service");
const media_address = '/home/argpsadmin/public_html/media';
const media_server = 'https://media.arongroups.co';

let storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		// callBack(null, 'public/images')
		callBack(null, media_address);
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname);
	}
})

let upload = multer({
	storage: storage
});

router.post('/create', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1}]), authenticate({}), async function (ctx) {
	try {
		const {title_en, title_fa, description_en, description_fa, modal, date_start, date_stop, showStatus, type, value} = ctx.request.body;
		let bounce = new Bounce();
		bounce.title_en = title_en;
		bounce.title_fa = title_fa;
		bounce.description_en = description_en;
		bounce.description_fa = description_fa;
		bounce.date_start = date_start;
		bounce.date_stop = date_stop;
		bounce.modal = JSON.parse(modal);
		bounce.showStatus = parseInt(showStatus);
		bounce.type = parseInt(type);
		bounce.value = parseInt(value);
		bounce.files = ctx.request.files || {};
		bounce.save();
		ctx.body = {
			message: 'بونوس با موفقیت بارگزاری گردید',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/bounces', async function (ctx) {
	try {
		const bounces = await Bounce.find({}).sort({value: -1});
		ctx.body = bounces || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.put('/edit', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1}]), authenticate({}), async function (ctx) {
	try {
		const {title_en, title_fa, description_en, description_fa, modal, date_start, date_stop, showStatus, type, _id, value} = ctx.request.body;
		const files = ctx.request.files;
		const bounceInfo = await Bounce.findOne({_id: mongoose.Types.ObjectId(_id)});
		const bounceFiles = (!!bounceInfo.files) ? bounceInfo.files : {};
		const modalArray = JSON.parse(modal)
		if (Object.keys(files).length > 0) {
			let filesExist = files;
			const fileArrayKey = Object.keys(bounceFiles);
			if (fileArrayKey.length > 0) {
				for (let i = 0; i < fileArrayKey.length; i++) {
					if (fileArrayKey[i] in filesExist) {

					} else {
						let newArray = {};
						newArray[fileArrayKey[i]] = bounceFiles[fileArrayKey[i]]
						filesExist = {...filesExist, ...newArray};
					}
				}

			}
			await Bounce.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, {$set: {title_en, value, title_fa, description_en, description_fa, modal: modalArray, date_start, date_stop, showStatus, type, files: filesExist}})
			ctx.body = {
				message: `بونس ${title_fa} با موفقیت ویرایش گردید. `,
				status: 201
			}
		} else {
			await Bounce.findOneAndUpdate({_id: mongoose.Types.ObjectId(_id)}, {$set: {title_en, value, title_fa, description_en, description_fa, modal: modalArray, date_start, date_stop, showStatus: parseInt(showStatus), type}})
			ctx.body = {
				message: `بونس ${title_fa} با موفقیت ویرایش گردید. `,
				status: 201
			}
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
		const bounceInfo = await Bounce.findOne({_id: mongoose.Types.ObjectId(data._id)});
		await Bounce.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
		ctx.body = {
			message: `بنر با موفقیت حذف گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.post('/upload', upload.single('file'), authenticate({}), async function (ctx) {
	try {
		const {type} = ctx.request.body;
		const file = ctx.request.file;
		ctx.body = {
			message: 'فایل با موفقیت بارگزاری شد.',
			status: 200,
			file: `${media_server}/${file.originalname}`
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


module.exports = router;