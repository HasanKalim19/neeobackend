const BaseController = require('../../Base/controller');
const userModel = require('./model');
const { DefaultResponse, ErrorResponse } = require('../../Helpers/Response');
const { createJWT } = require('../../Helpers/Utils');

class UserController extends BaseController {
	constructor(userModel) {
		super(userModel);
		this.model = userModel;
		this.authenticate = this.authenticate.bind(this);
	}

	async authenticate(req, res) {
		const { userName, password } = req.body;
		console.log('body', req.body);
		const user = await this.model.findOne({
			where: { user_name: userName, password }
		});

		console.log('user is', user);
		if (!user) {
			return ErrorResponse(res)({ message: 'User Not Found' });
		} else {
			const token = createJWT(user);
			return DefaultResponse(res)({ message: 'User found successfully', response: { user, token } });
		}
	}
}

module.exports = new UserController(userModel);
