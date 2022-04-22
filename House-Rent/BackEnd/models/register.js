const Joi = require("joi");
const JWT = require("jsonwebtoken");
// const config = require("config");
const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 255,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
    minlength: 3,
  },
  password: {
    type: String,
    maxlength: 1024,
    minlength: 3,
    required: true,
  },
  isAdmin: {
    type: String,
    default: "user",
  },
});

// generate user token
//'user'- is 'userAuthToken' property now
//thats why use 'this' method here,
//arrow function does not accept this method
registerSchema.methods.userAuthToken = function () {
  ///also set is admin property
  const token = JWT.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    "jwtPrivateKey"
  );
  return token;
};

const Register = mongoose.model("register", registerSchema);

/* Validate register user */
function validateRegisterUser(register) {
  const schema = {
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).required().email(), //for valid email
    password: Joi.string().min(3).max(255).required(),
  };

  return Joi.validate(register, schema);
}
/* Validate register user */

/* Validate register user */
function validateLoginUser(register) {
  const schema = {
    email: Joi.string().min(3).max(255).required().email(), //for valid email
    password: Joi.string().min(3).max(255).required(),
  };

  return Joi.validate(register, schema);
}
/* Validate register user */

exports.Register = Register;
exports.validate = validateRegisterUser;
exports.validateLogin = validateLoginUser;
