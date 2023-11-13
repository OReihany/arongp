const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number} = Schema.Types;


const schema = new Schema({
	first_name: {
		type: String,
		default: ''
	},
	last_name: {
		type: String,
		default: ''
	},
	email: {
		type: String,
		default: '',
	},
	phone_number: {
		type: String,
		default: '',
	},
	message: {
		type: String,
		default: '',
	},
	status: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});


const Comment = mongoose.model('Comment', schema);

module.exports = {
	Comment,
};