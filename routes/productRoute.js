const express = require("express")
const router = express.Router()
const Product = require("../models/productModel")
const getToken = require("../utils/index")


router.get("/", async (req, res) => {
    const products = await Product.find({})
    res.send(products)
})

router.post("/", async (req, res) => {
    const {
        brand,
        description,
        category,
        inStock,
        image,
        name,
        reviews,
        price,
        rating
    } = req.body

    const product = new Product({
        brand: brand,
        description: description,
        category: category,
        inStock: inStock,
        image: image,
        name: name,
        reviews: reviews,
        price: price,
        rating: rating,
    })

    const newProduct = product.save()
    if (newProduct) {
        res.status(201).send({
            message: "Created new product.",
            data: newProduct
        })
    }
    return res.status(500).send({ message: "Error in Creating Product." })
})

module.exports = router