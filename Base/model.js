const { Model } = require('sequelize');

class BaseModel extends Model {
	static iniBase(sequelize, DataTypes, fileds, rest) {
		return super.init(
			{
				...fields
			},
			{
				sequelize,
				timestamps: false,
				...rest
			}
		);
	}
}

module.exports = BaseModel;
