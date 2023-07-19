const path=require('path')
// CONFIGURACIÓN MULTER
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../../public/img/products'))
    },
    filename: function (req, file, cb) {
        let newName= Date.now() + path.extname(file.originalname)
        cb(null, newName)
    }
  })

//Importante: Esta varibale es la ocupada para subir la img, upload.single('nameInput')

const uploadProduct = multer(
    { 
        storage,
       
        fileFilter: function (req, file, cb) {
            console.log(file.mimetype);
            let typeArray = file.mimetype.split('/');
            let fileType = typeArray[1];
            if (fileType == 'jpg' || fileType == 'png'|| fileType == 'jpeg'|| fileType == 'gif') {
              cb(null, true);
            } else {
              req.fileValidationError='Formato no soportado, fomatos válidos: jpg, jpeg, png, gif'
              cb(null,false,new Error('mensaje de error 123123'))
            }
        }
    })

module.exports= uploadProduct
