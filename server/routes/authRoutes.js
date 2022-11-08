const express = require("express");
const { checkUser } = require("../controllers/authController");

const router = express.Router();

router.post("/", checkUser);

module.exports = router;
