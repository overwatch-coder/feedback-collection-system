import express from "express";
import {
  deleteAccount,
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/user.controller.js";
import { authorizeUser } from "../middleware/auth.middleware.js";

const router = express.Router();

// public routes
// #swagger.tags = ['User']
router.post("/register", registerUser);
router.post("/login", loginUser);

// protected routes
router.use(authorizeUser);
router.get("/profile", getProfile);
router.patch("/profile", updateProfile);
router.delete("/profile", deleteAccount);

export default router;
