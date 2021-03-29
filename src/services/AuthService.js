const bcrypt = require("bcryptjs");
const User = require("../Models/User");

class AuthService {
  async login(useremail, pass) {
    const user = await User.findOne({ useremail });

    //validate user activation
    if (!user || !user.isValidated) {
      return false;
    }

    // confirm that the password is matched or not
    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) return false;
    const payload = {
      user: {
        id: user.id,
        username: user.username,
        useremail: user.useremail,
        role: user.role,
        pass: user.pass
      },
    };
    return payload;
  }





  // verify user
  async verify(useremail, code) {
    const validatedUser = await User.findOne({ useremail });

    if (validatedUser.validationCode == code) {
      await validatedUser.update({ isValidated: true });

      // Creating token & send it
      const payload = {
        user: {
          id: validatedUser.id,
          username: validatedUser.username
        },
      };
      return payload;
    }
    return false;
  }
}
module.exports = AuthService;
