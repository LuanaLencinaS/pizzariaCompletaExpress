const express = require('express');

const routes = express.Router();
const loginController = require('../controllers/loginController')

routes.get('/login', loginController.viewLogin)
routes.post('/login', loginController.logar)
routes.get('/registro', loginController.viewRegistro)
routes.post('/registro', loginController.registrar)

module.exports = routes;