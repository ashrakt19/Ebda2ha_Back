const schedule = require("node-schedule");
const User = require("../Models/User");

//remove expired users
schedule.scheduleJob({ hour: 17, minute: 15 }, async function () {
  const expiredUsers = await User.find({ isValidated: false });
  expiredUsers.forEach((user) => {
    user.remove();
  });
});
