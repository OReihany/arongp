const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number} = Schema.Types;


const schema = new Schema({
	user_id: {
		type: String,
		default: ''
	},
	total_volume: {
		type: String,
		default: '',
	},
	benefit: {
		type: String,
		default: '',
	},
	level: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});


const Yalda = mongoose.model('Yalda', schema);

module.exports = {
	Yalda,
};