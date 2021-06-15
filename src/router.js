const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');
const authController = require('./controllers/auth.controller');
const homeController = require('./controllers/home.controller');

const router = express.Router();

const version = 'v1';

router.use(`/${version}/api-docs`, swaggerUi.serve);
router.get(`/${version}/api-docs`, swaggerUi.setup(swaggerDocument));

/* Login */
router.post(`/${version}/login`, authController.authenticate);

router.get('/home', homeController.get);

module.exports = {router};
