const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const validator = require("validator");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please tell us your fisrt name"]
  },
  last_name: {
    type: String,
    required: [true, "Please tell us your last name"]
  },
  username: {
    type: String,
    required: [true, "Please tell us your username"]
  },
  password: {
    type: String,
    required: [true, "A password is required"]
  },
  role: {
    type: Boolean,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
