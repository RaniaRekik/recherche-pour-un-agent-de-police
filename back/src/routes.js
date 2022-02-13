const express = require('express')
const multer = require('multer')
const PersonneController = require('./controllers/PersonneController')
const FinancesController = require('./controllers/FinancesController')
const InterieurController = require('./controllers/InterieurController')
const uploadConfig = require('./config/upload')

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/Personne', upload.single("thumbnail"), PersonneController.createPersonne)
routes.get('/Personnes', PersonneController.getAllPersonnes)
routes.get('/Personne/:cin', PersonneController.getPersonneByCin)
routes.get('/Per/:id', PersonneController.getPersonneById)
routes.delete('/Personne/:personneId', PersonneController.delete)
routes.patch('/Personne/:id', PersonneController.updatePersonneId);
routes.get('/user/:userId',PersonneController.getUserById);



routes.post('/Finances/:userId', FinancesController.createFinances)
routes.get('/Finances', FinancesController.getAllFinances)

routes.post('/Interieur/:userId', InterieurController.createInterieur)
routes.get('/Interieur', InterieurController.getAllInterieur)

module.exports = routes;

//localhost:8000/Finances?cin=44444444
//{"duree":"420", "description":"aaaaaaaaaaaaa"}