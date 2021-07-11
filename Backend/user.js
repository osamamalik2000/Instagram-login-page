const mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new schema({
    user : {
        type: String,
        unique:true
    },
    pass : String
})

module.exports = mongoose.model("user", userSchema);