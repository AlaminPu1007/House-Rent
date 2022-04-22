const Joi = require("joi");
const mongoose = require("mongoose");

//create schema of post
const postSchema = new mongoose.Schema({
  address: {
    type: String,
    maxlength: 255,
    minlength: 3,
  },
  // phone: {
  //   type: Number,
  //   required: true,
  //   maxlength: 11,
  // },
  // rent_price: {
  //   type: String,
  //   maxlength: 20,
  //   minlength: 3,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   maxlength: 255,
  //   minlength: 10,
  //   required: true,
  // },
  // title: {
  //   type: String,
  //   maxlength: 255,
  //   minlength: 10,
  //   required: true,
  // },
  image: {
    data: Buffer,
    contentType: String,
  },
});
//create modal of post
const postModal = mongoose.model("postModel", postSchema);

/* Validate post user */
function validatePostSchema(postSchema) {
  const schema = {
    address: Joi.string().min(3).max(255).required(),
    phone: Joi.number().required(),
    rent_price: Joi.string().min(3).max(20).required(),
    description: Joi.string().min(10).max(255).required(),
    title: Joi.string().min(10).max(255).required(),
  };

  return Joi.validate(postSchema, schema);
}

exports.postModal = postModal;
exports.validatePost = validatePostSchema;
