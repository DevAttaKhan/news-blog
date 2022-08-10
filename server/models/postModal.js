const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  post_date: {
    type: Date
  },
  post_img: {
    type: String
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category"
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
