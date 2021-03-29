const bcrypt = require("bcryptjs");
const User = require("../Models/User");

class UserService {
  // signup function
  async SignUp(username, useremail, pass,role) {
    let user = await User.findOne({ useremail });

    if (user) {
      throw new Error("The user is already existed, Please try another Email");
    }

    // create instance of a User
    user = new User({
      username,
      useremail,
      pass,
      role
    });
    console.log(username);

    // Encrypting password
    const salt = await bcrypt.genSalt(10);
    user.pass = await bcrypt.hash(pass, salt);

    // Saving user to the database
    await user.save();
    return true;
  }
   
}

module.exports = UserService;
