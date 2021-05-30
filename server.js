const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
});

// Routes 
app.use(require("./routes/apiroute.js"));

app.use(require("./routes/userworkoutroute.js"));

app.get('/', function(req, res){
    console.log("Root Route")
    res.json({ message: "hello world" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});





