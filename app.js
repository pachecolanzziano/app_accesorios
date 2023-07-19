
//Requerimos express para ser usado como servidor
const express=require('express');
const session=require('express-session');
const cookies = require('cookie-parser') ;
const cors = require('cors')
const path=require('path');
//Inicializamos 
const app= express()
//Variable para acceder a las rutas
//cors, para ocupar el api del backend
app.use(cors())


//Configuramos la carpeta public
app.use(express.static(path.resolve('public')))
//Para las sesiones
app.use(session({
    secret: "secreto",
    resave: false,
    saveUninitialized: false,
}));
//Para ocupar req.body
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// para las cookies
app.use(cookies());

//Middleware para control del logueo
const userLogged=require('./src/middleware/users/userLogged')
app.use(userLogged)




//OVERRIDE
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));

//Listen para que el server se mantenga escuchando al puerto
app.listen(process.env.PORT || 3001,() => console.log('Server running in 3001 port'));

//Configuramos la app para que trabje con EJS como motor template engine
app.set('view engine','ejs')
//configuramos la ruta de la carpeta contenedora de templates(views)
app.set('views',path.resolve(__dirname+'/src/views'))


//Enrutadores
let mainRoute= require('./src/routes/mainRoute')
let userRoute= require('./src/routes/userRoute')
let productRoute= require('./src/routes/productRoute')


//Ruta home
app.use('/',mainRoute)

//Ruta Users
app.use('/user',userRoute)

//Rutas products
app.use('/product',productRoute)
