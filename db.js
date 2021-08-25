const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { USERNAME, PASSWORD, DATABASE } = process.env;

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nnbxv.mongodb.net/${DATABASE}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Mongoose is connected!");
    })
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
