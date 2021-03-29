const status = require("http-status-codes");
const UserService = require("../services/UserService");

const userService = new UserService();

// store new user
const store = async (req, res) => {
  try {
    const { username, useremail, pass, role} = req.body;
    const created = await userService.SignUp(username, useremail, pass, role);

    if (created) return res.status(status.OK).send(created);
  } catch (e) {
    return res.status(status.INTERNAL_SERVER_ERROR).send(e.message);
  }
};


module.exports = {
  store,
};
