const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");

const express = require("express");
const router = express.Router();
//model
const { Register, validate, validateLogin } = require("../models/register");

/* get information about login user */
router.get("/isMe", auth, async (req, res) => {
  //get current user
  //'req.user._id'-come from json web token
  const user = await Register.findById(req.user._id).select("-password -__v"); //show without (password, __v) property
  //send to the client
   res.status(200).send(user);
});

/* Register a user */
router.post("/register", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.send(error.details[0].message).status(400);

  /* check email is already exist or not */
  let user = await Register.findOne({ email: req.body.email });
  if (user) return res.send("This email is already exist").status(400); //400-bad request

  try {
    const { name, email, password } = req.body;
    /// pick help to readable our code
    user = new Register({ name, email, password });

    /* Making a password hash */
    /// its give a salt value include 10
    const salt = await bcrypt.genSalt(10);
    // store salt with hash
    // now password will store with hashing process
    user.password = await bcrypt.hash(user.password, salt);
    /* Making a password hash */

    // making a jsonwebtoken
    //'userAuthToken'- from register model
    //generate a token
    const token = user.userAuthToken();

    await user.save();
    /// if we customized any header, should prefix with(x-argument:x-auth-token)
    const message = "Account created successfully";
    await res
      .status(200)
      .header("Bearer", token)
      .send({ name, email, token, message }); // send user with property name, email only, using lodash
  } catch (err) {
    res

      .send("To register a user, something went wrong " + err.message)
      .status(404);
  }
});

/* Log in a valid user */
router.post("/login", async (req, res) => {
  //check Joi validation
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check user is valid or not
  let user = await Register.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password");

  // compare hashing password to login user given password
  // re hash it and compared, when register user used
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password");

  try {
    // making a jsonwebtoken
    //'MY_SECRET_KEY'- through env variable
    const token = user.userAuthToken();

    //if everything is ok, send client to true
    res.send(token);
  } catch (err) {
    res
      .status(404)
      .send("To login a user, something went wrong " + err.message);
  }
});

module.exports = router;
