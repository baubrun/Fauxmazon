const express = require("express")
const cors = require("cors")
const data = require("./data")

const app = express()


app.use(express.json())
app.use(cors())



app.get("/api/products", (req, res) => {
    res.send(data.products)
})

app.get("/api/products/:id", (req, res) => {
    const {id} = req.params
    const found = data.products.find(i => i._id === id)
    if(found){
        res.send(found)
    }
    else {
        res.status(404).send({msg: "Product not found."})
    }
})








const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("\nServer running on port:", port)
})