const express = require("express")
const cors = require("cors")
const data = require("./data")
require("dotenv/config")
const mongoose = require("mongoose")
const app = express()
const userRoute = require("./routes/userRoute")


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useCreateIndex: true,
    dbName: "Fauxmazon"
}


app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)

mongoose.connect(process.env.MONGODB_URL, options).catch(err => {
    console.log(err.reason)
})


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