const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocal = require('passport-local-mongoose');

const user = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            minlength: 5,
            required: true,
        }
    }
);

user.plugin(passportLocal);

module.exports = mongoose.model('user', user);