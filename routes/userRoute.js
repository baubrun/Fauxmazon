const express = require("express")
const router = express.Router()
const User = require("../models/userModels")



router.get("/createadmin", (req, res) => {

    const user = new User({
        name: 'bb',
        email: 'bb@gmail.com',
        password: '1234',
        isAdmin: true
    })

    user.save().then(user => {
        res.send(user)
    }).catch(err => {
        res.send({
            msg: err.message
        })
    })
})


router.post("/signin", (req, res) => {
    const {email, password} = req.body
    const signInUser = new User.findOne({
        email,
        password,
    })
    if (signInUser){
        res.send({
            email: signInUser.email,
            _id: signInUser.id,
            isAdmin: signInUser.isAdmin,
            name: signInUser.name,
            token: getToken(user)
        })
    } else {
        res.status(401).send({msg: "Invalid email or password."})
    }

})


module.exports = router