const User = require("../models/userModal");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async function(req, res) {
  const data = await User.find();
  res.status(200).json({
    status: "success",
    data: {
      users: data
    }
  });
});

exports.createUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const newUser = await User.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      user: newUser
    }
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new Error("No user found"));
  }

  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!user) {
    return next(new Error("No user found"));
  }
  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new Error("No user found"));
  }

  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
});
