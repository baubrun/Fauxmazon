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


module.exports = getToken