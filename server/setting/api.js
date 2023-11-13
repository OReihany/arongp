const koaRouter = require('koa-router');
const router = new koaRouter();
const {Setting} = require('./models')
const multer = require('@koa/multer');
const {authenticate} = require("../user/service");
const media_address = '/home/argpsadmin/public_html/media';


let storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		// callBack(null, './src/platforms/desktop/pages/homepage/main-yalda');
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

router.get('/setting', async function (ctx) {
	try {
		const setting = await Setting.findOne({});
		ctx.body = {
			data: setting
		};
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.put('/edit', upload.fields([{name: 'file1', maxCount: 1}, {name: 'file2', maxCount: 1},
	{name: 'file3', maxCount: 1}, {name: 'file4', maxCount: 1}, {name: 'file5', maxCount: 1}]), authenticate({}), async function (ctx) {
	try {
		const {telegram, telegramAdmin, telegramAcademy, phone, facebook, aparat, youtube, whatsApp, whatsAppAdmin, instagram, linkedIn, twitter, email, address} = ctx.request.body;
		const files = ctx.request.files || {};
		const settingInfo = await Setting.findOne({}) || {files: null};
		const settingFiles = (!!settingInfo.files) ? settingInfo.files : {};
		if (Object.keys(files).length > 0) {
			let filesExist = files;
			const fileArrayKey = Object.keys(settingFiles);
			if (fileArrayKey.length > 0) {
				for (let i = 0; i < fileArrayKey.length; i++) {
					if (fileArrayKey[i] in filesExist) {

					} else {
						let newArray = {};
						newArray[fileArrayKey[i]] = settingFiles[fileArrayKey[i]]
						filesExist = {...filesExist, ...newArray};
					}
				}

			}
			await Setting.updateOne({}, {$set: {telegram, telegramAcademy, phone, facebook, aparat, youtube, telegramAdmin, whatsApp, whatsAppAdmin, instagram, linkedIn, twitter, email, address, files: filesExist}}, {upsert: true})
		} else {
			await Setting.updateOne({}, {$set: {telegram, telegramAcademy, phone, facebook, aparat, youtube, telegramAdmin, whatsApp, whatsAppAdmin, instagram, linkedIn, twitter, email, address}}, {upsert: true})
		}
		ctx.body = {
			message: `ویرایش جدید با موفقیت اعمال گردید.`,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;