const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Object} = Schema.Types;


const schema = new Schema({
	title: {
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
	files: {
		type: Object,
		default: {},
	},
	showStatus: {
		type: Number,
		default: 1,
	}
}, {
	timestamps: true,
});


const Banner = mongoose.model('Banner', schema);

module.exports = {
	Banner,
};