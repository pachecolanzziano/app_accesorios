const db = require('../data/models');

userModel = {
	getAllUsers: async  ()=> {
		let list= await db.User.findAll({
			attributes: ['id', 'nick', 'email']
		})
		return list
	},
	getUserById: async (id)=> {
		let user= await db.User.findOne({
			attributes: ['id', 'nick', 'email','firstName','lastName','address','image'],
			where: {
				id: id
			}
		})
		return user
	}

}
module.exports = userModel;


