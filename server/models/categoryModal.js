const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  posts: {
    type: Number,
    default: 0
  }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
