const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
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
   token: {
    type: String
   }
});

module.exports = UserSchema;
