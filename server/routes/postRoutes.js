const express = require("express");
const multer = require("multer");

const postController = require("../controllers/postController");
const authController = require("../controllers/authController");

const router = express.Router();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  }
});

const upload = multer({ storage: fileStorageEngine });

router
  .route("/")
  .get(authController.protect, postController.getAllPosts)
  .post(upload.single("post_img"), postController.createPost);

router.route("/public").get(postController.getPublicPosts);
router.route("/recent").get(postController.getRecentPosts);

router
  .route("/:id")
  .get(postController.getPost)
  .patch(upload.single("post_img"), postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
