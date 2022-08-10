const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  posts: {
    type: Number,
    required: [true, "post field is required"]
  }
});

categorySchema.pre("save", function() {
  console.log("pre hook", this.posts);
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
