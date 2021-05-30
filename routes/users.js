const router = require("express").Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  //get all users from the database
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  // adds a mew user to the database 
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;
