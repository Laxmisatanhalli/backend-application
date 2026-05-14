const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  Image: String,
  caption: String,
});

const PostModel = mongoose.model("post", postSchema);


module.exports = PostModel;