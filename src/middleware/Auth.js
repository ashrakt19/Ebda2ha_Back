const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token form header
  if (req.method == "OPTIONS") {
    next();
    return;
  }
  const token = req.headers.authorization;

  // If there is now token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    // decode token
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // set the user ID with decoded token
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
