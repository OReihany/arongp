const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Object} = Schema.Types;


const schema = new Schema({
	telegram: {
		type: Object,
		default: {},
	},
	telegramAdmin: {
		type: String,
		default: '',
	},
	facebook: {
		type: Object,
		default: {},
	},
	aparat: {
		type: Object,
		default: {},
	},
	youtube: {
		type: Object,
		default: {},
	},
	phone: {
		type: String,
		default: '',
	},
	telegramAcademy: {
		type: String,
		default: '',
	},
	whatsApp: {
		type: String,
		default: '',
	},
	whatsAppAdmin: {
		type: String,
		default: '',
	},
	instagram: {
		type: Object,
		default: {},
	},
	linkedIn: {
		type: Object,
		default: {},
	},
	twitter: {
		type: Object,
		default: {},
	},
	email: {
		type: String,
		default: '',
	},
	address: {
		type: String,
		default: '',
	},
	files: {
		type: Object,
		default: {},
	}
}, {
	timestamps: true,
});


const Setting = mongoose.model('Setting', schema);

module.exports = {
	Setting,
};