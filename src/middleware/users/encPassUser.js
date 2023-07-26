const bcrypt = require('bcryptjs')

module.exports = {
    encPass: (req,res,next)=> {//middleware encargado de encriptar la contraseña
        //obtener la contra y la confirmación
        let pass =req.body.pass
        let pass2=req.body.passConfirm
        //comparar que sean iguales
        if(pass==pass2){
            //reutilizar las dos variables, pass para la contraseña encriptada, 
            req.body.pass = bcrypt.hashSync(pass, 10)
            //passConfirm para el estado(True correcto)
            req.body.passConfirm=true
            next()
        }else{
            //passConfirm para el estado(false No son iguales las contraseñas)
            req.body.passConfirm=false
            next()
        }
    },
    comparePass: ()=> {
        return bcrypt.compareSync(pass,passEnc)
    }
}