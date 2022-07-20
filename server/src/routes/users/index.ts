import express from "express";
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../../controllers/usersController");
const { protect } = require("../../middlewares/authMiddleware");

router.post("/register",registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

exports.UsersRoute = router;
