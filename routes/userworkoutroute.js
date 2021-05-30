const router = require("express").Router();
const userworkout = require("../models/userworkout.js");

//get routes connecting the user to the various pages 
router.get("/api/userworkout", (req, res) => {
    userworkout.find({})
    .sort({ date: -1 })
    .then(dbuserworkout => {
      res.json(dbuserworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/userworkout", (req, res) => {
    userworkout.find({})
    .sort({ date: -1 })
    .then(dbuserworkout => {
      res.json(dbuserworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/userworkout", (req, res) => {
    userworkout.find({})
    .sort({ date: -1 })
    .then(dbuserworkout => {
      res.json(dbuserworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
module.exports = router;
