const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    username: String,
    password: String,
})

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;