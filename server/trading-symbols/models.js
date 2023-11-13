const mongoose = require('mongoose');
const {Schema} = mongoose;
const {Array} = Schema.Types;

const schema = new Schema({
	data: {
		type: Array,
		default: []
	}
}, {
	timestamps: true,
});


const TradingSymbol = mongoose.model('TradingSymbol', schema);

module.exports = {
	TradingSymbol
};