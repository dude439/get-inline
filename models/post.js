var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    name: String,
    text: String,
    time: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

 
