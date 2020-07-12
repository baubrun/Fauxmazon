const jwt = require("jsonwebtoken")
require("dotenv/config")


const getToken = user => {
    return jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: "24h"
    })
}


module.exports = getToken