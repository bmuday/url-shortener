const router = require("express").Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const dotenv = require("dotenv").config();

const Url = require("../models/Url");

// GET / Root Endpoint
router.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// POST /api/url/shorten
router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const { baseUrl } = process.env;

  // Check baseUrl
  if (!validUrl.isUri(baseUrl)) res.status(401).json("Invalid baseUrl");

  // Create url code
  const urlCode = shortid.generate();
  // Check longUrl
  if (!validUrl.isUri(longUrl)) {
    res.status(401).json("Invalid longUrl");
  } else {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        newUrl = new Url({
          urlCode,
          longUrl,
          shortUrl,
          date: new Date(),
        });

        await newUrl.save();
        res.json(newUrl);
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server error");
    }
  }
});

module.exports = router;
