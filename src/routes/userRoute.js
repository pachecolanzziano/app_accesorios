//Requerimos express para ocupar la clase router la cuál es instanciada en una variable
let express =require('express')
let router = express.Router()


//controlador del objeto literal user(userController.js)
const userController=require('../controllers/userController')

// MULTER MIDDLEWARE
const upload=require('../middleware/users/multerUser')

// Middleware para encriptar la contraseña
const bcrypt =require('../middleware/users/encPassUser')

// Middleware para validar los campos provenientes del form
const validationUserRegister =require('../middleware/users/validationUserRegister')
// Middlewares para validar si un usuario se encuentra en sesión 
const guest =require('../middleware/users/guest')
const authentication =require('../middleware/users/authentication')
//RUTAS
router.get('/login', guest, userController.login)
router.post('/login', userController.loginProcess)
router.get('/register', guest, userController.registerView)
router.post('/register',upload.single('img-perfil'),validationUserRegister,bcrypt.encPass,userController.register)
// Perfil de usuario
router.get('/profile',authentication, userController.profile)
router.post('/profile',upload.single('img-perfil'),authentication, userController.updateProfile) 
// logout 
router.get('/logout',userController.logout)
//IMPORTANTE: exportar el módulo para poder ser usado en app.js

// EndPoints API
router.get('/api/list',userController.apiUserList)
router.get('/api/:id',userController.apiUserDetail)
router.post('/api/existEmail',userController.existEmail)
module.exports=router