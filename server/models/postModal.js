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
    type: Date,
    default: new Date()
  },
  post_img: {
    type: String
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category"
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
});

postSchema.index({ "$**": "text" });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
