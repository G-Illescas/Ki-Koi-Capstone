const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Provide an Email"],
        unique: [true, "Email alreadt exists"],
    },
    password:{
        type: String,
        required: [true, "Provide a password"],
        unique: false,
    },
})

module.exports = mongoose.model.Admins || mongoose.model("Admins", UserSchema);