const express = require("express");
const bodyParser = require("body-parser");
const AuthController = require("../Controllers/AuthController");
const AuthValidator = require("../Validations/AuthValidation");

const router = new express.Router();

router.use(bodyParser.json());

router.post("/joinUs", AuthValidator.login(), AuthController.login);
router.post("/validate", AuthController.validate);

module.exports = router;
