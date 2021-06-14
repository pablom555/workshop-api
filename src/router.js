const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');
const homeController = require('./controllers/home.controller');

const router = express.Router();

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/home', homeController.get);

module.exports = {router};
