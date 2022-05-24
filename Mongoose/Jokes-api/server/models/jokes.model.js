const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema(
    {
    setup: {
        type: String,
        required: [true, "Joke is required"],
        minlength: [5, "Content must be 5 characters."]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [2, "Punchline must be greater than 2 characters"]
    },
    rating: {
        type: Number,
        min: [1, "Rating cant be less than 1"],
        max: [10, "Rating cant be greater than 10"]
    },
}, { timestamps: true });


const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;