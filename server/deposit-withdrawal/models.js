const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Object, Array} = Schema.Types;


const schema = new Schema({
	deposit_method_en: {
		type: String,
		default: ''
	},
	deposit_method_fa: {
		type: String,
		default: ''
	},
	currency_unit_en: {
		type: String,
		default: ''
	},
	currency_unit_fa: {
		type: String,
		default: ''
	},
	deposit_waiting_time_en: {
		type: String,
		default: ''
	},
	deposit_waiting_time_fa: {
		type: String,
		default: ''
	},
	withdrawal_waiting_time_fa: {
		type: String,
		default: ''
	},
	withdrawal_waiting_time_en: {
		type: String,
		default: ''
	},
	min_max_en: {
		type: String,
		default: ''
	},
	min_max_fa: {
		type: String,
		default: ''
	},
	commission_en: {
		type: String,
		default: ''
	},
	commission_fa: {
		type: String,
		default: ''
	},
	src_en: {
		type: String,
		default: '',
	},
	src_fa: {
		type: String,
		default: '',
	},
	value: {
		type: Number,
		default: 0,
	},
	logo: {
		type: Object,
		default: {},
	},
	showStatus: {
		type: Number,
		default: 0,
	},
	type: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});


const DepositWithdrawal = mongoose.model('DepositWithdrawal', schema);

module.exports = {
	DepositWithdrawal,
};