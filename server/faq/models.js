const mongoose = require('mongoose');
const {array} = require("prop-types");
const {Schema} = mongoose;
const {String, Number, Array} = Schema.Types;


const schema = new Schema({
	title: {
		type: Object,
		default: {},
	},
	subCategory: {
		type: Array,
		default: []
	}
}, {
	timestamps: true,
});


const Faq = mongoose.model('Faq', schema);
module.exports = {
	Faq
};