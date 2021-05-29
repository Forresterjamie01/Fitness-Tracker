const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors")

const mongoose = require("mongoose"); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.use(cors());

const PORT = process.env.PORT || 3000;

const User = require("./models/userworkout");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.use(require("./routes/routes.js"));



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
