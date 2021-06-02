const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserfitnessSchema = new Schema({
//user model to store user data 
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date:{ type: Date, required: true },


}, {
    timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
