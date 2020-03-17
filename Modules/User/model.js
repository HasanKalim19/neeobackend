const Sequelize = require('sequelize');
const BaseModel = require('../../Base/model');
const sequelize = require('../../dbService');

class UserModel extends Sequelize.Model {}
UserModel.init(
	{
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		user_name: Sequelize.TEXT,
		password: Sequelize.TEXT,
		user_type_id: Sequelize.INTEGER
	},
	{ sequelize: sequelize(), tableName: 'users', createdAt: false, id: false, updatedAt: false }
);

module.exports = UserModel;
