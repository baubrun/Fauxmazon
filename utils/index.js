const jwt = require("jsonwebtoken")
require("dotenv/config")


const getToken = user => {
    return jwt.sign({
        email: user.email,
        _id: user._id,
        isAdmin: user.isAdmin,
        name: user.name,
    }, process.env.JWT_SECRET, {
        expiresIn: "24h"
    })
}


const isAuth = (req,res, next) => {
    const token = req.headers.authorization
    if (token){
        const onlyToken = token.slice(7, token.length)
        jwt.verify(onlyToken, process.env.JWT_SECRET, (err, decode) => {
            if (err){
                return res.status(401).send({message: "Invalid token."})
            }
            req.user = token
            next()
            return
        })
    }
    return req.status(401).send({message: "Token is undefined."})
}

const isAdmin = (req,res, next) => {
    if(req.user && req.user.isAdmin){
        return next()
    }
    return res.status(401).send({message: "Unauthorized."})
}

module.exports = {getToken, isAdmin, isAuth}