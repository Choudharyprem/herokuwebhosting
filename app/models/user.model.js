const mongoose = require('mongoose');
 
const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    mobileno: Number
});
 
module.exports = mongoose.model('User', UserSchema);