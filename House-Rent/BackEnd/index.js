const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
// bring database connection screen
const mongoose = require("mongoose");
//get our authentication route
const Authentication = require("./routes/authentication");
const postRoutes = require("./routes/postRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongoose connection with local database
mongoose
  .connect("mongodb://localhost/baribhara_db")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

//define a default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", Authentication);
app.use("/api/post", postRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
