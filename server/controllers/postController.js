const Post = require("../models/postModal");
const catchAsync = require("../utils/catchAsync");
const sendStatus = require("../utils/sendStatus");
const AppError = require("../utils/appError");
const Category = require("../models/categoryModal");

exports.createPost = catchAsync(async (req, res) => {
  const { title, description, category, author } = req.body;
  const { fieldname, filename } = req.file;
  const newPost = await Post.create({
    title,
    description,
    category,
    author,
    [fieldname]: `http://localhost:3002/images/${filename.replaceAll(" ", "-")}`
  });

  await Category.findOneAndUpdate({ _id: category }, { $inc: { posts: 1 } });
  sendStatus(res, newPost, "success");
});

exports.getPublicPosts = catchAsync(async (req, res) => {
  if (req.query.q) {
    const searchResult = await Post.find({
      $text: { $search: req.query.q }
    })
      .populate("category")
      .populate("author");

    const ResultLength = await Post.find({
      $text: { $search: req.query.q }
    }).countDocuments();
    const totalPages = Math.ceil(+ResultLength / 3);

    return res
      .set("x-total-length", totalPages)
      .status(200)
      .json({
        status: "success",
        data: searchResult
      });
  }

  if (req.query.type) {
    const categoryList = await Category.find().select("category_name");
    const planCategoryList = categoryList.map(el => el.category_name);
    let term;

    if (planCategoryList.includes(req.query.type)) {
      term = { "category.category_name": req.query.type };
    } else {
      term = { "author.username": req.query.type };
    }

    console.log(term, req.query.type);

    const posts = await Post.aggregate()
      .lookup({
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author"
      })
      .unwind("author")
      .lookup({
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category"
      })
      .unwind("category")
      .match(term)
      .skip((req.query.page || 0) * 3)
      .limit(3);

    const ResultLength = await Post.aggregate()
      .lookup({
        from: "users",
        localField: "author",
        foreignField: "_id",
        as: "author"
      })
      .unwind("author")
      .lookup({
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category"
      })
      .unwind("category")
      .match(term);
    const totalPages = Math.ceil(ResultLength.length / 3);

    res
      .set("x-total-length", totalPages)
      .status(200)
      .json({
        status: "success",
        data: posts
      });
  } else {
    const posts = await Post.find()
      .populate("category")
      .populate("author")
      .skip(+req.query.page * 3)
      .limit(3);

    const ResultLength = await Post.countDocuments();
    const totalPages = Math.ceil(+ResultLength / 3);

    res
      .set("x-total-length", totalPages)
      .status(200)
      .json({
        status: "success",
        data: posts
      });
  }
});

exports.getRecentPosts = catchAsync(async (req, res) => {
  const posts = await Post.find()
    .populate("category")
    .populate("author")
    .skip(+req.query.page * 3)
    .limit(4);

  res.status(200).json({
    status: "success",
    data: posts
  });
});

exports.getAllPosts = catchAsync(async (req, res) => {
  if (req.token.role) {
    const posts = await Post.find()
      .populate("category")
      .populate("author")
      .skip(+req.query.page * 3)
      .limit(3);

    const ResultLength = await Post.countDocuments();
    const totalPages = Math.ceil(+ResultLength / 3);

    res
      .set("x-total-length", totalPages)
      .status(200)
      .json({
        status: "success",
        data: posts
      });
  } else {
    const posts = await Post.find()
      .where("author")
      .equals(req.token.id)
      .populate("category")
      .populate("author")
      .skip(+req.query.page)
      .limit(3);

    const ResultLength = await Post.countDocuments({ author: req.token.id });
    const totalPages = Math.ceil(+ResultLength / 3);

    res
      .set("x-total-length", totalPages)
      .status(200)
      .json({
        status: "success",
        data: posts
      });
  }
});

exports.getPost = catchAsync(async (req, res) => {
  const post = await Post.findById(req.params.id);
  sendStatus(res, post, "success");
});

exports.updatePost = catchAsync(async (req, res) => {
  const { title, description, category, author } = req.body;
  const { fieldname, filename } = req.file;
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      category,
      author,
      [fieldname]: `http://localhost:3002/images/${filename.replaceAll(
        " ",
        "-"
      )}`
    },
    {
      new: true,
      runValidators: true
    }
  );

  sendStatus(res, post, "success");
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const postList = await Post.findById(req.params.id);
  const post = await Post.findByIdAndDelete(req.params.id);
  console.log(postList.category);

  await Category.findOneAndUpdate(
    { _id: postList.category },
    { $inc: { posts: -1 } }
  );

  if (!post) {
    return next(new AppError("cannot find user", 400));
  }

  sendStatus(res, post, "successfully deleted");
});
