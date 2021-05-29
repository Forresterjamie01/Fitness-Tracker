const router = require("express").Router();
const userworkout = require("../models/userworkout.js");


router.post("/api/userworkout", ({ body }, res) => {
    userworkout.create(body)
    .then(dbuserworkout => {
      res.json(dbuserworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
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
