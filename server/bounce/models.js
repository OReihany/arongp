const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Object, Array, Date} = Schema.Types;


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
		default: '',
	},
	description_fa: {
		type: String,
		default: '',
	},
	files: {
		type: Object,
		default: {},
	},
	modal: {
		type: Array,
		default: [],
	},
	date_start: {
		type: Date,
	},
	date_stop: {
		type: Date,
	},
	showStatus: {
		type: Number,
		default: 1,
	},
	type: {
		type: Number,
		default: 0,
	},
	value: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});


const Bounce = mongoose.model('Bounce', schema);

module.exports = {
	Bounce,
};