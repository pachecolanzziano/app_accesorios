//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()
const path= require('path')

// CONFIGURACIÓN MULTER
const uploadProduct = require('../middleware/products/multerProduct')

//controlador del objeto literal product(productController.js)
const productController=require('../controllers/productController')

//MIDDLEWARES
//Validación de register
const ValidationRegister=require('../middleware/products/ValidationRegister')

//Rutas para vistas(ejs)
router.get('/register',productController.registerView)              //view register
router.get('/update/:id',productController.updateView)              //view update
router.get('/categories',productController.categoriesView)      //view Categories
router.get('/detail/:id',productController.detailView)              //view DetailProduct
router.get('/shopingCart', productController.shopingCartView)   //view ShoppingCart

//Rutas por métodos != get
router.post('/register',uploadProduct.single('imgCel'),ValidationRegister,productController.registerProduct)    // add product
router.put('/:id',uploadProduct.single('imgCel'),productController.updateProduct)//update product
router.delete('/:id',productController.deleteProduct)      //delete product
router.post('/categories',productController.categorySearch)      //view Categories

// EndPoints API
router.get('/api/list',productController.apiProductList)
router.get('/api/lastProduct',productController.lastProduct)
router.get('/api/mostViewed',productController.apiProductMostViewed)
router.get('/api/:id',productController.apiProductDetail)



//IMPORTANTE: exportar el módulo para poder ser usado en app.js
module.exports=router