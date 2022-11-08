const express = require("express");
const categoryController = require("../controllers/categoryController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory);

router
  .route("/:id")
  .get(authController.protect, categoryController.getCategory)
  .patch(authController.protect, categoryController.updateCategory)
  .delete(authController.protect, categoryController.delteCategory);

module.exports = router;
