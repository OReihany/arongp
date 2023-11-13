const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Object, Decimal128} = Schema.Types;


const schema = new Schema({
	rank: {
		type: Number
	},
	user_id: {
		type: String,
		default: '',
	},
	total_volume: {
		type: Decimal128,
		default: '',
	},
	benefit: {
		type: Decimal128,
		default: {},
	},
	date: {
		type: String,
		default: "",
	},
	timestamp: {
		type: Number
	}
});


const TopTrader = mongoose.model('TopTrader', schema);

module.exports = {
	TopTrader,
};