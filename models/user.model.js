const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  //user model for username it must be unique and be at least 3 characters
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3 
  },}, {
      timestamps: true,
  });

  const User = mongoose.model('User', userSchema)



  module.exports = User;