const mongoose = require("mongoose");
require("dotenv").config();
const { username, password, database } = process.env;

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${username}:${password}@cluster0.nnbxv.mongodb.net/${database}?retryWrites=true&w=majority`,
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
