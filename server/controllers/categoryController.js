const CategoryModal = require("../models/categoryModal");
const catchAsync = require("../utils/catchAsync");

exports.getAllCategories = catchAsync(async (req, res) => {
  const category = await CategoryModal.find();

  res.status(200).json({
    status: "success",
    category
  });
});

exports.getCategory = catchAsync(async (req, res) => {
  const category = await CategoryModal.findById(req.params.id);
  res.status(200).json({
    status: "success",
    category
  });
});

exports.createCategory = catchAsync(async (req, res) => {
  const newCategory = await CategoryModal.create(req.body);

  res.status(200).json({
    status: "success",
    category: newCategory
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const category = await CategoryModal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!category) {
    return next(new Error("No user found"));
  }

  res.status(200).json({
    status: "success",
    category
  });
});

exports.delteCategory = catchAsync(async (req, res) => {
  const category = await CategoryModal.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    category
  });
});
