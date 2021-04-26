const status = require("http-status-codes");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const AuthService = require("../services/AuthService");

const authService = new AuthService();

// login request
const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });

    const { email, password } = req.body;
    const payload = await authService.login(email, password);
    if (payload) {
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          return res.status(status.OK).json({
            token: token,
            isValid: payload.user.isValid,
          });
        }
      );
    } else {
      return res
        .status(status.UNAUTHORIZED)
        .json({ msg: "Wrong Credentials Or Non Activated" });
    }
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).send();
  }
};

// validate user registeration
const validate = async (req, res) => {
  try {
    const { code, email } = req.body;
    const isValid = await authService.verify(email, code);
    if (!isValid)
      return res
        .status(status.NOT_ACCEPTABLE)
        .json({ msg: "Wrong activation code" });

    jwt.sign(
      isValid,
      config.get("jwtSecret"),
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) throw err;
        return res.status(status.OK).json({
          token: token,
          
        });
      }
    );
  } catch (e) {
    console.log(e.message);
    return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
  }
};

module.exports = {
  login,
  validate,
};
