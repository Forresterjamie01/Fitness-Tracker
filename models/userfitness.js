const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number


});

const User = mongoose.model("userfitness", FitnessSchema);

module.exports = Fitness;
