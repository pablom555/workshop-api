const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./../swagger.json");
const homeController = require("./controllers/home.controller");
const userController = require("./controllers/user.controller");
const version = "v1";

const router = express.Router();

router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.get("/home", homeController.get);

/* User */
router.post(`/${version}/users`, userController.signUp);

module.exports = { router };
