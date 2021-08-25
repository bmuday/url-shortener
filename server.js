const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = 5000;

// MIddlewares
app.use(express.json());

// Connection to the database
const connectDB = require("./db");
connectDB();

// Define Routes
const rootApi = require("./routes/index");
app.use("/", rootApi);
const url = require("./routes/url");
app.use("/api/url", url);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
