const { check } = require("express-validator");
const User = require("../Models/User");

const store = () => [
  check("username", "Username is required")
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
  check("useremail", "Please enter a valid email").isEmail(),
  check("pass", "Please enter a password with 6 or more characters").isLength({
    min: 6,
  }),
  check("role", "role is required")
  .not()
  .isEmpty()
];

module.exports = {
  store,
};
