const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/userRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const postRoutes = require("./routes/postRoutes");
const AppError = require("./utils/appError");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({ exposedHeaders: "x-total-length" }));
app.use(express.urlencoded());
app.use(express.json());
app.use("/images", express.static("./images"));

app.use("/blog/v1/login", authRoutes);
app.use("/blog/v1/users", userRouter);
app.use("/blog/v1/category", categoryRouter);
app.use("/blog/v1/post", postRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
});

module.exports = app;
