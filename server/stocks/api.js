const axios = require("axios");
const {TopTrader} = require('./models')
const koaRouter = require('koa-router');
const multer = require("@koa/multer");
const {authenticate} = require("../user/service");
const router = new koaRouter();
const media_address = '/home/argpsadmin/public_html/media';


let storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		callBack(null, 'public/')
		// callBack(null, './src/platforms/desktop/pages/homepage/main-yalda');
		// callBack(null, media_address);
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname);
	}
})

let upload = multer({
	storage: storage
});

router.get('/symbols', async function (ctx) {
	try {
		const response = await axios({
			method: 'GET',
			url: `http://51.38.71.233:8080/api/getSymbols`,
		});
		ctx.body = {
			data: response.data.data,
			categories: response.data.categories,
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/contract-specification', async function (ctx) {
	try {
		// const response = await axios({
		// 	method: 'GET',
		// 	url: `http://51.38.71.233:8080/api/contract-specification`,
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


router.get('/top-trader', async function (ctx) {
	try {
		const response = await axios({
			method: 'GET',
			url: `http://51.38.71.233:8080/api/topTraderNew`,
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


router.post('/create', upload.single('file'), async function (ctx) {
	try {
		let topTrader = new TopTrader();
		// banner.title = title;
		// banner.src_en = src_en;
		// banner.src_fa = src_fa;
		// banner.showStatus = parseInt(showStatus);
		// banner.files = ctx.request.files;
		// banner.save();
		// ctx.body = {
		// 	message: 'فایل با موفقیت بارگزاری گردید',
		// 	status: 201
		// }
		ctx.body = ctx.request.file;
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


// router.get('/chart-draw', async function (ctx) {
// 	try {
// 		const response = await axios({
// 			method: 'GET',
// 			url: `http://51.38.71.233:8080/api/chartDraw`,
// 		});
// 		final_data = {};
// 		for (let i = 0; i < response.data.length; i++) {
// 			final_data[response.data[i]['title']] = []
// 			for (let j = 0; j < response.data[i]['time'].length; j++) {
// 				if (response.data[i]['time'][j] > 1616458350) {
// 					final_data[response.data[i]['title']].push({
// 						name: response.data[i]['title'],
// 						value: response.data[i]['value'][j],
// 						time: response.data[i]['time'][j]
// 					});
// 				}
// 			}
// 		}
// 		ctx.body = {
// 			data: final_data,
// 		}
// 	} catch (err) {
// 		ctx.status = err.status || 500;
// 		ctx.body = err.message;
// 		ctx.app.emit('error', err, ctx);
// 	}
// });

module.exports = router;