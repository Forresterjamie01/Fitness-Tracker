const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

const exercisesRouter = require('./routes/htmlRoutes');
const usersRouter = require('./routes/users');

require('dotenv').config({ path:'ENV_FILENAME'});



// Routes

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const uri = process.env.ATLAS_URI || "mongodb://localhost/FitnessTracker";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

app.use(express.static("public"));

app.use(logger("dev"));

app.use(cors());


app.use('/routes', exercisesRouter);
app.use('/routes', usersRouter);




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





