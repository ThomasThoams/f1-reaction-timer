const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: Boolean, required: true } // 0 = admin, 1 = user
});

module.exports = mongoose.model('User', userSchema);
