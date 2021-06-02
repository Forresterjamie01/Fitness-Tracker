const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    //user model to store user data
    day: {
        type: Date,
        default: () => new Date()
    },
    excercises: [
        {
            type: {
                type: String,
                required: true
            },

            name: {
                type: String,
                required: true
            },

            distance: {
                type: Number,
                required: true
            },

            duration: {
                type: Number,
                required: true
            },

            weight: {
                type: Number,
                required: true
            },

            sets: {
                type: Number,
                required: true
            },

            reps: {
                type: Number,
                required: true
            }

        }
    ]


}, {
    timestamps: true,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
