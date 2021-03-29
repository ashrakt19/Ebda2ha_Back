const express = require("express");
const bodyParser = require("body-parser");

const UserController = require("../Controllers/UserController");
const UserValidator = require("../validations/UserValidation");
const ApplyValidatition = require("../Middleware/apply-validation");

const router = new express.Router();

router.use(bodyParser.json());

router.post(
  "/register",
  UserValidator.store(),
  ApplyValidatition,
  UserController.store
);

module.exports = router;
