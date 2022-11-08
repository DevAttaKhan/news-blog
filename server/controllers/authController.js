const JWT = require("jsonwebtoken");

const dotenv = require("dotenv");
const AppError = require("../utils/appError");

dotenv.config({ path: "../config.env" });

const User = require("../models/userModal");
const catchAsync = require("../utils/catchAsync");
const sendStatus = require("../utils/sendStatus");

exports.checkUser = catchAsync(async (req, res) => {
  const { username: requestUserName, password: requestPassword } = req.body;

  console.log(req.body);

  const { _id, role, username, password } = await User.findOne({
    username: requestUserName
  });
  if (requestPassword == password) {
    const token = JWT.sign(
      { id: _id, role, username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );
    const user = { _id, role, username, token: token };
    sendStatus(res, user, 200);
  } else {
    throw new Error("invalid Credentials");
  }
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const user = await JWT.verify(token, process.env.JWT_SECRET);

  if (user) {
    req.token = user;
    next();
  }
});
