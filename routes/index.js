const router = require("express").Router();
const Url = require("../models/Url");

router.get("/:code", async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).json("No url found.");
    }
  } catch (err) {
    console.error(err.message);
    res.status(501).json("Server error");
  }
});

module.exports = router;
