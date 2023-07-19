const {body}=require('express-validator')

module.exports=[
    body('nick').isLength({min:5}).withMessage("Ingrese un usuario válido."),
    body('email').isEmail().withMessage("Ingrese un email válido."),
    // body('pass').isLength({min:5}).withMessage("La contraseña debe tener más de 4 carácteres"),
    body("pass","Error en la contraseña, debe contener mínimo una minúscula, una mayúscula, un digito, un caracter especial y su tamaño debe estar entre 8-15.").matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/  ),
    // body("passConfirm","Error en la confirmación de la contraseña, debe contener mínimo una minúscula, una mayúscula, un digito, un caracter especial y su tamaño debe estar entre 8-15.").matches(  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/  ),
]