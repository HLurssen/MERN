const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: [true, "Product is required"],
        minlength: [2, "Title must be 2 characters."]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [2, "Price must be greater than 2 characters"]
    },
    description: {
        type: String,
        minlength: [1, "Description cant be less than 1 Character"],
    },
    isDesigner: {
        type: Boolean
    }, 
}, { timestamps: true });


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;