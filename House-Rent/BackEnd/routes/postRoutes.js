const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const Multer = require("multer");
const path = require("path");
const fs = require("fs");
//model
const { postModal, validatePost } = require("../models/postSchema");
//create a folder of image
const Storage = Multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    // cb(null, file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImage = Multer({
  storage: Storage,
}).single("testImage");

router.post("/house-post", auth, async (req, res) => {
  // const { error } = validatePost(req.body);
  // if (error) return res.send(error.details[0].message).status(400);
  // console.log(req, "file");

  uploadImage(req, res, (err) => {
    if (err) return res.status(500).send(err);
    const { address } = req.body;
    console.log(req, "file");
    // const { address, phone, rent_price, description, title } = req.body;
    const newImage = new postModal({
      address,
      // phone,
      // rent_price,
      // description,
      // title,
      image: {
        data: fs.readFileSync(req.file?.path),
        contentType: "image/png",
      },
    });
    newImage
      .save()
      .then(() => res.send("image upload successfully"))
      .catch(() => res.send("image upload problem"));
  });
});

router.get("/get-post", async (req, res) => {
  const result = await postModal.find({});

  res.send(result);
});

module.exports = router;
