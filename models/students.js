var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,

})



var Student = mongoose.model('Student', studentSchema)



module.exports = Student


 