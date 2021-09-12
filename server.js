const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// MIddlewares
app.use(express.json());

// Connection to the database
const connectDB = require("./db");
connectDB();

// Define Routes
const redirect = require("./routes/redirect");
app.use("/", redirect);
const newUrl = require("./routes/url");
app.use("/api/url", newUrl);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
