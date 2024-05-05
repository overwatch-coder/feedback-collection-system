import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/generateToken.js";

/**
 * @description Get Profile
 * @route GET /api/auth/profile
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */

export const getProfile = asyncHandler(async (req, res) => {
  // #swagger.tags = ['User']
  // #swagger.tags = ['User']
  /* #swagger.security = [{
        "apiKeyAuth": [
            {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header"
            }]
        }]
    */
  const user = req.user;
  res.status(200).json({
    success: true,
    data: user,
    message: "User Profile Retrieved Successfully",
  });
});

/**
 * @description Register User
 * @route POST /api/auth/register
 * @access Public
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const registerUser = asyncHandler(async (req, res) => {
  // #swagger.tags = ['User']
  const { username, email, password } = req.body;

  // Check if username,email and password are provided
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
      data: null,
    });
  }

  // Check if email is valid
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email",
      data: null,
    });
  }

  // Check if password is strong enough
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a strong password",
      data: null,
    });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
      data: null,
    });
  }

  // Create new user
  const user = await User.create({
    username,
    email,
    password,
    role: req.body.role || "user",
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Registration Failed",
      data: null,
    });
  }

  // Generate access token
  const accessToken = generateToken(user.email);

  // remove password from data to submit
  const { password: pwd, __v, ...rest } = user._doc;

  // Return success response
  res.status(201).json({
    success: true,
    data: rest,
    access_token: accessToken,
    message: "User Registered Successfully",
  });
});

/**
 * @description Login User
 * @route POST /api/auth/login
 * @access Public
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const loginUser = asyncHandler(async (req, res) => {
  // #swagger.tags = ['User']
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
      data: null,
    });
  }

  // Check if user exists
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials or User Does Not Exist",
      data: null,
    });
  }

  // Check if password is correct
  const isMatchPassword = await bcrypt.compare(password, user.password);
  if (!isMatchPassword) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials",
      data: null,
    });
  }

  // generate access token
  const accessToken = generateToken(user.email);

  // remove password from data to submit
  const { password: pwd, __v, ...rest } = user._doc;

  // Return success response
  res.status(200).json({
    success: true,
    access_token: accessToken,
    data: rest,
    message: "User Logged In Successfully",
  });
});

/**
 * @description Update Profile
 * @route PATCH /api/auth/profile
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const updateProfile = asyncHandler(async (req, res) => {
  // #swagger.tags = ['User']
  /* #swagger.security = [{
        "apiKeyAuth": [
            {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header"
            }]
        }]
    */
  const user = req.user;

  // check if new email is provided
  if (req.body.email) {
    // Check if email is valid
    if (!validator.isEmail(req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser || req.body.email === user.email) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
        data: null,
      });
    }
  }

  // Check if new password is provided
  if (req.body.password) {
    // Check if password is strong enough
    if (!validator.isStrongPassword(req.body.password)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a strong password",
        data: null,
      });
    }

    // Hash password and set the body to the new hashed password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  // Check if user exists
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    {
      username: req.body.username || user.username,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
      avatar: req.body.avatar || user.avatar,
    },
    {
      new: true,
    }
  ).select("-password -__v");

  if (!updatedUser) {
    return res.status(400).json({
      success: false,
      message: "User Profile Update Failed",
      data: null,
    });
  }

  // Return success response
  res.status(200).json({
    success: true,
    data: updatedUser,
    message: "User Profile Updated Successfully",
  });
});

/**
 * @description Delete Profile
 * @route DELETE /api/auth/profile
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const deleteAccount = asyncHandler(async (req, res) => {
  // #swagger.tags = ['User']
  /* #swagger.security = [{
        "apiKeyAuth": [
            {
                "type": "apiKey",
                "name": "Authorization",
                "in": "header"
            }]
        }]
    */
  const user = req.user;

  // delete user
  const deletedUser = await User.findByIdAndDelete(user._id);
  if (!deletedUser) {
    return res.status(400).json({
      success: false,
      message: "User Profile Deletion Failed",
      data: null,
    });
  }

  // Return success response
  res.status(200).json({
    success: true,
    data: null,
    message: "User Profile Deleted Successfully",
  });
});
