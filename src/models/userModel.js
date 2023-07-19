const db = require('../data/models');

userModel = {
	//obtener usuario por id
	getUserById:async function (id) {
		let user=await db.User.findByPk(id,{
			include:['type']
		})
		return user
	},
	//Obtener usuario por email
	getUserByEmail: async function (text) {
		let user = await db.User.findOne({
			// attributes: ['email'],
			include: ['type'],
			where: {
				email: text
			}
		})
		return user
	},
	//crear usuario
	create: function (userData) {
		db.User.create(userData)
	},
	//actualizar usuario
	updateUser:async function (idUser,datos) {
		let user= await db.User.update(datos,{
			where:{
				id:idUser
			}
		})
		return user
	},
	existEmail:async function(email){
		let aux= await this.getUserByEmail(email)
		return aux
	}
}
// userModel.getUserByField('email', 'ernestino@correo.com')
module.exports = userModel;


