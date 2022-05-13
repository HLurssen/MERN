const mongoose = require ('mogoose');


const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Conent is required"],
        minlength: [5, "Content must be at least 5 characters"]
    },
    author: {
        type: String, 
        required: [true, "Required"], 
        minlength: [2, "Author must be ....."]
    },
    rating: {
        type: Number,
        min: [1, "Please Rate more than 0."],
        max: [10, "Rating cap is 10"]
    },
},{timestamps: true})


const Quote = mongoose.model("Quote", QuoteSchema)


module.exports = Quote;