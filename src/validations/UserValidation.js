const { check } = require("express-validator");
const User = require("../Models/User");

const store = () => [
  check("firstName", "First name is required")
    .not()
    .isEmpty(),
    check("lastName", "last name is required")
    .not()
    .isEmpty(),
  check("email", "Please enter a valid email").isEmail()
  .not()
    .isEmpty(),
  check("password", "Please enter a password with 6 or more characters").isLength({
    min: 6,
    
  }).custom((value, { req }) => {
    if (value !== req.body.confirm) {
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),
check('confirm', 'please enter a confirmpassword')
.not()
.isEmpty(),
  check("role", "role is required")
  .not()
  .isEmpty()
];

module.exports = {
  store,
};
