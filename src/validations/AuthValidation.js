const { check } = require('express-validator');

const login = () => [
    //check function takes input that i want to validate it and the message when the error happened
    check('useremail', 'Useremail is required').exists(),
    check('pass', 'Password is required').exists()
];

module.exports = { login };
