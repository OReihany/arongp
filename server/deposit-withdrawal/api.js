const koaRouter = require('koa-router');
const router = new koaRouter();
const {DepositWithdrawal} = require('./models')
const multer = require('@koa/multer');
const mongoose = require('mongoose');
const fs = require('fs');
const {authenticate} = require("../user/service");
const media_address = '/home/argpsadmin/public_html/media';


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

router.post('/create', upload.single('file'), authenticate({}), async function (ctx) {
	try {
		const {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type} = ctx.request.body;
		let depositWithdrawal = new DepositWithdrawal();
		depositWithdrawal.deposit_method_en = deposit_method_en;
		depositWithdrawal.deposit_method_fa = deposit_method_fa;
		depositWithdrawal.currency_unit_en = currency_unit_en;
		depositWithdrawal.currency_unit_fa = currency_unit_fa;
		depositWithdrawal.deposit_waiting_time_en = deposit_waiting_time_en;
		depositWithdrawal.deposit_waiting_time_fa = deposit_waiting_time_fa;
		depositWithdrawal.withdrawal_waiting_time_en = withdrawal_waiting_time_en;
		depositWithdrawal.withdrawal_waiting_time_fa = withdrawal_waiting_time_fa;
		depositWithdrawal.min_max_en = min_max_en;
		depositWithdrawal.min_max_fa = min_max_fa;
		depositWithdrawal.value = parseInt(value);
		depositWithdrawal.commission_en = commission_en;
		depositWithdrawal.commission_fa = commission_fa;
		depositWithdrawal.src_en = src_en;
		depositWithdrawal.src_fa = src_fa;
		depositWithdrawal.showStatus = parseInt(showStatus);
		depositWithdrawal.type = parseInt(type);
		depositWithdrawal.logo = ctx.request.file;
		depositWithdrawal.save();
		ctx.body = {
			message: 'فرم با موفقیت بارگزاری گردید',
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});


router.get('/depositWithdrawals', async function (ctx) {
	try {
		const depositWithdrawals = await DepositWithdrawal.find({}).sort({value: 1});
		ctx.body = depositWithdrawals || [];
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

router.put('/edit', upload.single('file'), authenticate({}), async function (ctx) {
	try {
		const {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type, _id} = ctx.request.body;
		const file = ctx.request.file || {};
		if (Object.keys(file).length > 0) {
			await DepositWithdrawal.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type, logo: file}})
		} else {
			await DepositWithdrawal.updateOne({_id: mongoose.Types.ObjectId(_id)}, {$set: {value, deposit_method_en, deposit_method_fa, currency_unit_en, currency_unit_fa, deposit_waiting_time_en, deposit_waiting_time_fa, withdrawal_waiting_time_fa, withdrawal_waiting_time_en, min_max_en, min_max_fa, commission_en, commission_fa, src_en, src_fa, showStatus, type}})
		}
		ctx.body = {
			message: 'واریز/برداشت با موفقیت ویرایش گردید.',
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
		const depositWithdrawalInfo = await DepositWithdrawal.findOne({_id: mongoose.Types.ObjectId(data._id)});
		await depositWithdrawalInfo.deleteOne({_id: mongoose.Types.ObjectId(data._id)});
		ctx.body = {
			message: `واریز/برداشت با موفقیت حذف گردید. `,
			status: 201
		}
	} catch (err) {
		ctx.status = err.status || 500;
		ctx.body = err.message;
		ctx.app.emit('error', err, ctx);
	}
});

module.exports = router;