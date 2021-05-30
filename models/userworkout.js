const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserworkoutSchema = new Schema({
  Date: Date,

  totalDuration: {
    type: Number,
  },

  numexercises: {

    type: Schema.Types.ObjectId,
  }




});

const Userworkout = mongoose.model("Userworkout", UserworkoutSchema);

module.exports = Userworkout;
