const axios = require('axios');

async function checkToken(token) {
	try {
		const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', {
			secret: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
			response: token,
		});
		if(response.data.success)
			return true;
	} catch (e) {
		console.error(e);
	}
	return false;
}

module.exports = {
	recaptcha: {
		checkToken
	}
};