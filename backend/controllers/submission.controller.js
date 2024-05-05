import asyncHandler from "express-async-handler";
import Submission from "../models/submission.model.js";

/**
 * @description Get All Submissions
 * @route GET /api/submissions
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */

export const allSubmissions = asyncHandler(async (req, res) => {
  /* #swagger.security = [{
  "apiKeyAuth": []
  }] 
*/
  const user = req.user;

  // get all submissions
  const submissions = await Form.find({ user: user._id })
    .sort({ createdAt: -1 })
    .populate("user", "_id email username")
    .lean()
    .exec();

  if (!submissions) {
    res.status(400).json({
      success: false,
      message: "Submissions Not Found",
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: "Submissions Found",
    data: submissions,
  });
});

/**
 * @description Get Single Form
 * @route GET /api/submissions/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */

export const getForm = asyncHandler(async (req, res) => {
  /* #swagger.security = [{
  "apiKeyAuth": []
  }]
*/
  // get user and request id
  const id = req.params.id;
  const user = req.user;

  // retrieve form and check if it exists
  const form = await Submission.findOne({ _id: id, user: user._id })
    .populate("user", "_id email username")
    .lean()
    .exec();

  // return error if form does not exist
  if (!form) {
    res.status(400).json({
      success: false,
      message: "Form Not Found",
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: "Form Found",
    data: form,
  });
});

/**
 * @description Create Form
 * @route POST /api/submissions
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */

export const createForm = asyncHandler(async (req, res) => {
  /* #swagger.security = [{
  "apiKeyAuth": []
  }]
*/
  const user = req.user;

  // get form data from req body
  const { title, description, fields } = req.body;

  // check if form data is valid
  if (!title || !description || !fields) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
      data: null,
    });
  }
});
