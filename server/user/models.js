const mongoose = require('mongoose');
const {Schema} = mongoose;
const {String, Number, Boolean, Date, Array} = Schema.Types;

const roles = {
	Admin: 0,
	Meta: 1,
	Finance: 2,
	Advertisement: 3,
};

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: Number,
		default: roles.Advertisement,
	},
	active: {
		type: Boolean,
		default: true,
	},
	roles: {
		type: Array,
		default: []
	}
}, {
	timestamps: true,
});

schema.index({email: 1});

schema.statics.roles = roles;
schema.methods.toJson = function () {
	return {
		id: this.id,
		name: this.name,
		email: this.email,
		roles: this.roles || [],
		credentials: Object.keys(roles).reduce((acc, key) => {
			let role = roles[key];
			acc[`is${key}`] = (this.role === role) ? 1 : 0;
			return acc;
		}, {})
	}
};

const User = mongoose.model('User', schema);

module.exports = {
	User,
};