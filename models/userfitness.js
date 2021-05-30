const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserfitnessSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number


});

const Userfitness = mongoose.model("Userfitness", UserfitnessSchema);

module.exports = Userfitness;
