const status = require("http-status-codes");
const { validationResult } = require("express-validator");

const applyValidation = (req, res, next) => {
  // validate user inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(status.UNPROCESSABLE_ENTITY).json({
      code: "VALIDATION_ERROR",
      message: "Please apply a valid data",
      details: errors.array(),
    });
  }
  next();
};

module.exports = applyValidation;
