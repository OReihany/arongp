const jwt = require('jsonwebtoken');
const {User} = require('./models');


module.exports = {
	authenticate: ({role = undefined}) => async (ctx, next) => {
		let token = ctx.request.headers['authorization'];
		if (!token) throw Error.create({
			message: 'token not found',
			errorCode: 0x00,
			status: 400,
		});
		token = token.trim();
		const idx = token.indexOf('Bearer ');
		if (idx !== 0) {
			throw Error.create({
				message: 'incomplete token',
				errorCode: 0x01,
				status: 400,
			});
		}
		token = token.substr(7);
		let data = null;
		try {
			data = await jwt.verify(token, process.env.SECRET_KEY);
		} catch (e) {
			throw Error.create({
				message: 'token expired or invalid',
				errorCode: 0x02,
				status: 401,
			});
		}
		let time_now = new Date().getTime();
		if (data.exp < time_now){
			throw Error.create({
				message: 'token expired',
				errorCode: 0x02,
				status: 401,
			});
		}
		if (!data.userId) {
			throw Error.create({
				message: 'invalid token',
				errorCode: 0x03,
				status: 401,
			});
		}
		const user = await User.findById(data.userId);
		if (!user) {
			throw Error.create({
				message: 'invalid user',
				errorCode: 0x04,
				status: 401,
			});
		}
		if (!user.active) {
			throw Error.create({
				message: 'inactive user',
				errorCode: 0x05,
				status: 403,
			});
		}
		if (role && (user.role & role) === role) {
			throw Error.create({
				message: 'insufficient permissions',
				errorCode: 0x06,
				status: 403,
			});
		}
		ctx.credentials = {
			token,
			user,
		};
		await next();
	},
	issueToken: async ({userId, seconds = 3600, role = 'isNone', roles = [8]}) => {
		const iat = Math.floor(Date.now());
		const exp = iat + (seconds*1000);
		const token = await jwt.sign({
			userId, exp, iat,
		}, process.env.SECRET_KEY, {algorithm: 'HS256',});
		return {
			token,
			iat: new Date(iat),
			exp: new Date(exp),
			role,
			roles
		};
	}
};