const db = require('../data/models');

productModel = {
	getAllProducts: async  ()=> {
		let list= await db.Product.findAll({
			attributes: ['id', 'name', 'price'],
		})
		return list
	},
	getProductById: async (id)=> {
		let product= await db.Product.findOne({
			attributes: ['id', 'name', 'price','image'],
			where: {
				id: id
			},
		})
		return product
	}

}
module.exports = productModel;