var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: string, required: true},
    password: {type: string, required: true}
});

module.exports = mongoose.model('user', userSchema);