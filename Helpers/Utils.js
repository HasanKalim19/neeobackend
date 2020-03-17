const jwt = require('jsonwebtoken');

const createJWT = (payload) => {
	//const secrete = process.env.SECRETE_KEY;
	const secrete = 'shah12345678';
	return jwt.sign(
		{
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 1000,
			data: payload
		},
		secrete
	);
};

const decodeJWT = (token) => {
	//const secrete = process.env.SECRETE_KEY;
	const secrete = 'shah12345678';
	return jwt.verify(token, secrete);
};

const decodeJWTMiddleWare = (req, res, next) => {
	if ('token' in req.headers) {
		console.log('there are token headers');
		const token = req.headers['token'];
		const user = decodeJWT(token).data;
		if (!user) {
			return res.status(200).json({
				statusCode: 400,
				message: 'Token is expired'
			});
		} else {
			req.body.userData = user;
			next();
		}
	} else
		res.status(200).json({
			statusCode: 400,
			message: 'Token header not found'
		});
};

module.exports = {
	createJWT,
	decodeJWT,
	decodeJWTMiddleWare
};
