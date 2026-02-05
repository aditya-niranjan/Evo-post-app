const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    Image: String,
    Caption: String,

});

const postModel = mongoose.model('Post', postSchema);

module.exports = postModel;