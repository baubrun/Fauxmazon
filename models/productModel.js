const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    DateAdded: {type: Date, default: Date.now},
    description: { type: String, required: true },
    category: { type: String, required: true },
    inStock: { type: Number, default: 0, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    reviews: { type: Number, default: 0, required: true },
    price: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
})


module.exports = mongoose.model("Product", ProductSchema)