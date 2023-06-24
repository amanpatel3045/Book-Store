const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter your name"],
  },
  email: {
    type: String,
    required: [true, "please enter your email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
    minLength: [3, "password should be greater than 3 character"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});




// Creating User model
const UserModel = mongoose.model("user", userSchema);

//export userModel
module.exports = UserModel;
