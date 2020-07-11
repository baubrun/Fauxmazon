const express = require("express")
const cors = require("cors")
const data = require("./data")

const app = express()


app.use(express.json())
app.use(cors())



app.get("/api/products", (req, res) => {
    res.send(data.products)
})








const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("\nServer running on port:", port)
})