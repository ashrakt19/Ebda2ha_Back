const mongoose = require("mongoose");
const UserSchema = require("../Schemas/UserSchema");
const MailService = require("../Services/MailerService");

const mailService = new MailService();

UserSchema.post("save", function () {
  const message = `Welcome to Ebda2ha, Please validate your account with ${this.validationCode}`;
  console.log("hi from what happed !!!");
  mailService.validate(this.useremail, message);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
