import asyncHandler from "express-async-handler";
import Submission from "../models/submission.model.js";
import Form from "../models/form.model.js";

/**
 * @description Get All Submissions
 * @route GET /api/submissions
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const getAllSubmissions = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Submission']
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

  // get all submissions based on user's role
  const submissions = await Submission.find(
    user.role === "admin" ? { owner: user._id } : { reviewer: user._id }
  )
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  if (!submissions) {
    return res.status(500).json({
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
 * @description Get Single Submission
 * @route GET /api/submissions/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const getSingleSubmission = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Submission']
  /* #swagger.security = [{
        "apiKeyAuth": [
            {
              "type": "apiKey",
              "name": "Authorization",
              "in": "header"
            }]
        }]
    */
  // get user and request id
  const id = req.params.id;
  const user = req.user;

  // retrieve submission and check if it exists
  const submission = await Submission.findOne(
    user.role === "admin"
      ? { $and: [{ _id: id }, { owner: user._id }] }
      : { $and: [{ _id: id }, { reviewer: user._id }] }
  )
    .lean()
    .exec();

  // return error if submission does not exist
  if (!submission) {
    return res.status(404).json({
      success: false,
      message: "Submission Not Found",
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: "Submission Found",
    data: submission,
  });
});

/**
 * @description Create Submission
 * @route POST /api/submissions
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const createSubmission = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Submission']
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

  // check if user is admin
  if (user.role === "admin") {
    return res.status(401).json({
      success: false,
      message: "Admins cannot submit feedbacks",
      data: null,
    });
  }

  // get submission data from req body
  const { formId, owner, data } = req.body;

  // check if submission data is valid
  if (!formId || !owner || !data) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
      data: null,
    });
  }

  // check if form exists and verify owner
  const form = await Form.findOne({ _id: formId }).lean().exec();
  if (!form) {
    return res.status(404).json({
      success: false,
      message: "Form Not Found",
      data: null,
    });
  }

  // check if user is owner of form
  if (form.user.toString() !== owner) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized Access - Not Owner",
      data: null,
    });
  }

  // create new submission
  const newSubmission = await Submission.create({
    formId,
    reviewer: user._id,
    owner,
    data,
  });

  // return error if submission not created
  if (!newSubmission) {
    return res.status(400).json({
      success: false,
      message: "Submission Not Created",
      data: null,
    });
  }

  // add submission id to form
  await Form.findOneAndUpdate(
    { _id: formId },
    { $push: { submissions: newSubmission._id } }
  );

  // return success response
  res.status(201).json({
    success: true,
    message: "Submission Created",
    data: newSubmission,
  });
});

/**
 * @description DELETE Submission
 * @route DELETE /api/submissions/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const deleteSubmission = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Submission']
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
  const { id } = req.params;

  // delete submission
  const deletedSubmission = await Submission.findOneAndDelete({
    $and: [{ _id: id }, { owner: user._id }],
  });

  // return error if submission not deleted
  if (!deletedSubmission) {
    return res.status(500).json({
      success: false,
      message: "Submission deletion failed",
      data: null,
    });
  }

  // return success response
  res.status(200).json({
    success: true,
    message: "Submission Deleted",
    data: null,
  });
});
