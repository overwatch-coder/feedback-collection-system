import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/**
 * @description: Middleware to check if user is authorized
 * @returns: void
 */

export const authorizeUser = asyncHandler(async (req, res, next) => {
  // Get token from header
  const token = req.headers?.authorization?.split(" ")[1];

  // Check if token exists
  if (!token) {
    res.status(401).json({
      success: false,
      message: "Not Authorized. No token provided",
      data: null,
    });
  }

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Check if token is valid
  if (!decoded) {
    res.status(401).json({
      success: false,
      message: "Not Authorized. Invalid token",
      data: null,
    });
  }

  // Check if user exists
  const user = await User.findOne({ email: decoded.email }).select(
    "-password -__v"
  );
  if (!user) {
    res.status(401).json({
      success: false,
      message: "Not Authorized. User not found",
      data: null,
    });
  }

  req.user = user;

  next();
});

export const authorizeAdmin = asyncHandler(async (req, res, next) => {
  const user = req.user;

  if (user.role !== "admin") {
    res.status(401).json({
      success: false,
      message: "Not Authorized. Admin Access Required",
      data: null,
    });
  }

  next();
});
