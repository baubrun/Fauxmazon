const express = require("express")
const router = express.Router()
const User = require("../models/userModels")
const getToken = require("../utils/index")


router.get("/createadmin", (req, res) => {

    const user = new User({
        name: 'bb',
        email: 'bb@bb.com',
        password: 'bb',
        isAdmin: true
    })

    user.save().then(user => {
        res.send(user)
    }).catch(err => {
        res.send({
            message: err.message
        })
    })
})


router.post("/signin", async (req, res) => {
    const signInUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if (signInUser) {
        res.send({
            email: signInUser.email,
            _id: signInUser.id,
            isAdmin: signInUser.isAdmin,
            name: signInUser.name,
            token: getToken(signInUser)
        })
    } else {
        res.status(401).send({
            message: "Invalid email or password."
        })
    }

})

router.post("/register", async (req, res) => {
    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
    })
    const newUser = await user.save()
    if (newUser) {
        res.send({
            email: newUser.email,
            _id: newUser.id,
            isAdmin: newUser.isAdmin,
            name: newUser.name,
            token: getToken(newUser)
        })
    } else {
        res.status(401).send({
            message: "Invalid credentials."
        })
    }

})


module.exports = router