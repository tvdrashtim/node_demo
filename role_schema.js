const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    f_name: String,
    l_name: String,
    email: String,
    password: String,
    contact: Number,
    address: String,
    created_at: {
        type: Date,
        default: Date.now // Set the default value to the current date
    }
});

module.exports = mongoose.model("users", RoleSchema);