const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)              //Login

routes.get('/ongs', OngController.index)                        //Lista Ong's
routes.post('/ongs', OngController.create)                      //Cria Ong's

routes.get('/profile', ProfileController.index)                 //Lista casos de uma ONG específica

routes.get('/incidents', IncidentController.index)              //Lista todos os casos
routes.post('/incidents', IncidentController.create)            //Cria um caso para uma ong
routes.delete('/incidents/:id', IncidentController.delete)      //deleta um caso

module.exports = routes