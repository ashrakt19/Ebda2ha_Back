const bcrypt = require("bcryptjs");
const User = require("../Models/User");

class AuthService {
  async login(email, password) {
    const user = await User.findOne({ email });

    //validate user activation
    if (!user || !user.isValidated) {
      return false;
    }

    // confirm that the password is matched or not
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return false;
    const payload = {
      user: {
        id: user.id,
        firstName: user.firstName,
        email: user.email,
        role: user.role,
        password: user.password
      },
    };
    return payload;
  }





  // verify user
  async verify(email, code) {
    const validatedUser = await User.findOne({ email });

    if (validatedUser.validationCode == code) {
      await validatedUser.update({ isValidated: true });

      // Creating token & send it
      const payload = {
        user: {
          id: validatedUser.id,
          firstName: validatedUser.firstName
        },
      };
      return payload;
    }
    return false;
  }
}
module.exports = AuthService;
