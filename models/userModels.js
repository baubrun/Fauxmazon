const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    DateAdded: {type: Date, default: Date.now},
    email: {type: String, required: true, unique: true, dropDups: true },
    isAdmin: {type: Boolean, required: true, default: false},
    name: {type: String, required: true},
    password: {type: String, required: true},
})


module.exports = mongoose.model("User", UserSchema)