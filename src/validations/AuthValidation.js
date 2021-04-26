const { check } = require('express-validator');

const login = () => [
    //check function takes input that i want to validate it and the message when the error happened
    check('email', 'Email is required').exists(),
    check('password', 'Password is required').exists()
];

module.exports = { login };
