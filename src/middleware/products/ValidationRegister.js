const {body}=require('express-validator')

module.exports=[
    body('name').isLength({min:6}).withMessage("El nombre del producto debe tener al menos 5 caracteres."),
    body('price').isNumeric().withMessage("Ingrese un precio válido(solo números)."),
    body('category').notEmpty().withMessage("Debe seleccionar una categoría"),
]