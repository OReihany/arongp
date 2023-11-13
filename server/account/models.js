const mongoose = require('mongoose');
const {array} = require("prop-types");
const {Schema} = mongoose;
const {String, Number, Array} = Schema.Types;


const schema = new Schema({
	title_en: {
		type: String,
		default: ''
	},
	title_fa: {
		type: String,
		default: ''
	},
	description_en: {
		type: String,
		default: ''
	},
	description_fa: {
		type: String,
		default: ''
	},
	currency: {
		type: Number,
		default: 0,
	},
	href_en: {
		type: String,
		default: '',
	},
	href_fa: {
		type: String,
		default: '',
	},
	feature: {
		type: Array,
		default: [],
	},
	modal: {
		type: Array,
		default: [],
	},
	value: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});


const schemaCom = new Schema({
	type: {
		type: Number,
		default: 0,
	},
	data: {
		type: Array,
		default: []
	}
}, {
	timestamps: true,
});


const Account = mongoose.model('Account', schema);
const AccountCompare = mongoose.model('AccountCompare', schemaCom);

module.exports = {
	Account,
	AccountCompare
};