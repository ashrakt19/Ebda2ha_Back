const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  useremail: {
    type: String,
    required: true,
    trim: true
  },
  pass: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isValidated: {
    type: Boolean,
    default: false,
  },
  validationCode: {
    type: Number,
    default: Math.floor(1000 + Math.random() * 9000),
  },
  role: {
    type: String,
    default: 'Basic',
    enum: ["Basic", "Owner", "Admin"]
   },
   accessToken: {
    type: String
   }
});

module.exports = UserSchema;
