const bcrypt = require('bcryptjs/dist/bcrypt')
const path = require('path')

const userModel = require('../models/userModel')
const userModelApi = require('../models/userModelApi')
const user = {
    login: (req, res) => {
        res.render('./userViews/login')
    },
    registerView: (req, res) => {
        res.render('./userViews/registerUser')
    },
    register: async (req, res) => {
        //Requerimos la función para capturar los errores almacenados en req
        const { validationResult } = require('express-validator')
        let errors = validationResult(req)
        let errorsList = errors.errors

        //Validar que no exista un email igual
        let emailExist = await userModel.existEmail(req.body.email)
        if (emailExist) {
            errorsList.push({
                value: '',
                msg: 'El email ya se encuentra registrado',
                param: 'email',
                location: 'body'
            })
        }


        // //error de multer con la imagen
        if (req.fileValidationError) {
            errorsList.push({
                value: '',
                msg: req.fileValidationError,
                param: 'img',
                location: 'body'
            })
        }

        //Verificamos incialmente la validación de los inputs del form
        if (errors.isEmpty()) {

            //Verificamos que el proceso de comparar y encriptar las contras haya salido bien(true)
            if (req.body.passConfirm) {

                // Verificamos que haya una imagen de perfil y asignamos en una variable para su posterior uso
                let nameImg = 'default.png'
                if (req.file) {
                    nameImg = req.file.filename
                }

                //creamos el usuario para ser guardado
                let user = {
                    "nick": req.body.nick,
                    "email": req.body.email,
                    "password": req.body.pass,
                    "type_id": 2,
                    "image": nameImg,
                }

                //Guardamos el usuario
                userModel.create(user)

                res.redirect("/")
            } else {
                //agregamos un error para cuando las contraseñas no coinciden
                errorsList.push({
                    value: '',
                    msg: 'Las contraseñas deben coincidir',
                    param: 'passConfirm',
                    location: 'body'
                })

                //enviamos el error a la vista
                res.render('userViews/registerUser', { errorsList })
            }
        }
        else {
            // console.log(errorsList);
            res.render('userViews/registerUser', { errorsList })
        }
    },
    loginProcess: async (req, res) => {
        //Obtenemos el usuario correspondiente al email
        let userToLogin = await userModel.getUserByEmail(req.body.email);
        //Verificamos que haya encontrado un usuario
        if (userToLogin) {
            //comparamos las contrasenas
            let checkThePassword = bcrypt.compareSync(req.body.pass, userToLogin.password)
            //Verificamos si todo ok
            if (checkThePassword) {
                // para mantener la información en sesión
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                //Verificamos si seleccionó la opción recuerdame
                if (req.body.recuerdame) {
                    res.cookie('email', req.body.email, { maxAge: (1000 * 60) * 60 })
                    res.redirect('/user/profile');
                } else {
                    res.redirect('/user/profile');
                }
            } else {
                return res.render('./userViews/login', {
                    errors: {
                        tipo: 'pass',
                        msg: 'La contraseña está incorrecta'
                    }

                });
            }
        } else {
            return res.render('./userViews/login', {
                errors: {
                    tipo: 'email',
                    msg: 'Este correo no se encuentra registrado'

                }
            });
        }


    },
    profile: async (req, res) => {
        //Obtenemos el usuario por id
        let userNow = await userModel.getUserById(req.session.userLogged.id)
        //verificamos que esté logueado
        if (req.session.userLogged) {
            res.render('userViews/profile', {
                user: userNow
            });
        } else {
            res.redirect('/user/login')
        }
    },
    updateProfile: async (req, res) => {
        //Usuario a actualizar
        let user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
        }
        //verificamos si se ha subido imagen para actualizarla
        if (req.file) {
            user.image = req.file.filename
        }
        //actulizamos el usuario
        let userUpdated = await userModel.updateUser(req.session.userLogged.id, user)
        //almacenamos en userlogged el usuario actualizado
        res.locals.userLogged = await userModel.getUserById(req.session.userLogged.id)
        res.redirect('/user/profile')
    },
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        return res.redirect('/');
    },
    existEmail: async (req, res) => {
        // res.send('entró acá')
        let user = await userModel.existEmail(req.body.email)
        if (user) {
            // return res.send(true)
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: '/user/api/existEmail',
                    method: 'POST'
                },
                data: true
            })
        } else {
            return res.status(200).json({
                meta: {
                    status: 200,
                    total: 1,
                    url: '/user/api/existEmail',
                    method: 'POST'
                },
                data: false
            })
        }
    },
    apiUserList: async (req, res) => {
        let listado= await userModelApi.getAllUsers()
        // console.log(listado);
        let ListadoDetails =[]
        
        listado.forEach(element => {
            let user = {
                id: element.id,
                nick: element.nick,
                email: element.email,
                detail: 'http://localhost:3001/user/api/'+element.id
            }
            ListadoDetails.push(user)
        });
        // console.log(ListadoDetails);
        return res.status(200).json({
            meta: {
                status: 200,
                total: listado.length,
                url: 'http://localhost:3001/user/api/list',
                method: 'GET'
            },
            data: ListadoDetails
        })
    },
    apiUserDetail: async (req, res) => {
        console.log(req.params.id);
        let user = await userModelApi.getUserById(req.params.id)
        res.status(200).json({
            meta: {
                status: 200,
                total: 1,
                url: 'http://localhost:3001/user/api/:'+req.params.id,
                method: 'GET'
            },
            data: user
        })
    }
}



module.exports = user;