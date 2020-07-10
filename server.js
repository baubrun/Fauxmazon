const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
app.use(express.json())
app.use(cors())




app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/template.html")
})






const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("\nServer running on port:", port)
})