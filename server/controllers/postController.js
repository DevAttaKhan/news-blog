const Post = require("../models/postModal");
const catchAsync = require("../utils/catchAsync");
const sendStatus = require("../utils/sendStatus");
const AppError = require("../utils/appError");

exports.createPost = catchAsync(async (req, res) => {
  const newPost = await Post.create(req.body);
  sendStatus(res, newPost, "success");
});

exports.getAllPosts = catchAsync(async (req, res) => {
  const posts = await Post.find();
  sendStatus(res, posts, "success");
});

exports.getPost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);
  sendStatus(res, post, "success");
});

exports.updatePost = catchAsync(async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  console.log(req.params.id, req.body);

  sendStatus(res, post, "success");
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    return next(new AppError("cannot find user", 400));
  }

  sendStatus(res, post, "successfully deleted");
});
