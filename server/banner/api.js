const koaRouter = require('koa-router');
const router = new koaRouter();
const mongoose = require('mongoose');
const {Banner} = require('./models')
const multer = require('@koa/multer');
const {authenticate} = require("../user/service");
const media_address = '/home/argpsadmin/public_html/media';


let storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		// callBack(null, 'public/images/main-yalda')
		// callBack(null, './src/platforms/desktop/pages/homepage/main-yalda');
		callBack(null, media_address);
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname);
	}
})

let upload = multer({
	storage: storage
});

router.post('/create', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1},
	{name: 'file3', maxCount: 1}, {name: 'file4', maxCount: 1}]), authenticate({}), async function (ctx) {
	try {
		const {title, src_en, src_fa, showStatus} = ctx.request.body;
		let banner = new Banner();
		banner.title = title;
		banner.src_en = src_en;
		banner.src_fa = src_fa;
		banner.showStatus = parseInt(showStatus);
		banner.files = ctx.request.files;
		banner.save();
		ctx.body = {
			message: 'بنر با موفقیت بارگزاری گردید',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/banners', async function (ctx) {
	try {
		const banners = await Banner.find({}).sort({createdAt: -1});
		ctx.body = {
			data: banners
		};
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.put('/edit', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1},
	{name: 'file3', maxCount: 1}, {name: 'file4', maxCount: 1}]), authenticate({}), async function (ctx) {
	try {
		const {title, src_en, src_fa, showStatus, _id} = ctx.request.body;
		const files = ctx.request.files || {};
		const bannerInfo = await Banner.findOne({_id: mongoose.Types.ObjectId(_id)});
		const bannerFiles = (!!bannerInfo.files) ? bannerInfo.files : {};
		if (Object.keys(files).length > 0) {
			let filesExist = files;
			const fileArrayKey = Object.keys(bannerFiles);
			if (fileArrayKey.length > 0) {
				for (let i = 0; i < fileArrayKey.length; i++) {
					if (fileArrayKey[i] in filesExist) {

					} else {
						let newArray = {};
						newArray[fileArrayKey[i]] = bannerFiles[fileArrayKey[i]]
						filesExist = {...filesExist, ...newArray};
					}
				}

			}
			await Banner.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: {title: title, src_fa: src_fa, src_en: src_en, showStatus: parseInt(showStatus), files: filesExist}})
			ctx.body = {
				message: `بنر ${title} با موفقیت ویرایش گردید. `,
				status: 201
			}
		} else {
			await Banner.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: {title: title, src_fa: src_fa, src_en: src_en, showStatus: parseInt(showStatus)}})
			ctx.body = {
				message: `بنر ${title} با موفقیت ویرایش گردید. `,
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
		await Banner.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
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

module.exports = router;