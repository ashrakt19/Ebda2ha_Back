const bcrypt = require("bcryptjs");
const User = require("../Models/User");

class UserService {
  // signup function
  async SignUp(firstName, lastName, password, email, role,confirm) {
    let user = await User.findOne({ email });

    if (user) {
      throw new Error("The user is already existed, Please try another Email");
    }

    // create instance of a User
    user = new User({
      firstName,
      lastName,
      password,
      role,
      confirm,
      email
    });
    console.log(firstName);

    // Encrypting password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Saving user to the database
    await user.save();
    return true;
  }
   
}

module.exports = UserService;
