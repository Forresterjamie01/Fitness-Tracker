const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

require('dotenv').config();



// Routes

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

app.use(express.static("public"));

app.use(logger("dev"));

app.use(cors());

app.use(require("./routes/apiroute.js"));

app.use(require("./routes/userworkoutroute.js"));

app.get('/', function(req, res){
    console.log("Root Route")
    res.json({ message: "hello world" });
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





