var express = require('express');
var router = express.Router();
let { body } = require("express-validator");
let db = require("../database/models")


let indexController = require("../controllers/indexController");

let loginValidation = [
    body("email")
        .notEmpty().withMessage("Por favor complete el campo email")
        .isEmail().withMessage("Por favor ingrese un email valido")
        .custom(function(value){
            //Validar que el email exista en la base de datos
            return db.User.findOne({
                where: {email:value}
            })
            .then(function(user){
                if(!user){
                    throw new Error("El email no se encuentra registrado")
                }else{
                    //Verificar la contraseña
                }
            })
        }),
    body("password")
        .notEmpty().withMessage("Por favor complete la contraseña")

]



/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);
router.get('/register',indexController.register); //Mostrar el form de registro.
router.get('/login', indexController.login) //Mostrar form de login

router.post('/register', indexController.store); //Guarda al usuario en la base de datos.
router.post('/login', loginValidation, indexController.processLogin) //Procesar form de login
router.post('/logout', indexController.logout)


module.exports = router;
