import asyncHandler from "express-async-handler";
import Form from "../models/form.model.js";

/**
 * @description Get All Forms
 * @route GET /api/forms
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const getAllForms = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Form']
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

  // get all forms
  const forms = await Form.find({ user: user._id })
    .sort({ createdAt: -1 })
    .populate("submissions")
    .lean()
    .exec();

  if (!forms) {
    res.status(500).json({
      success: false,
      message: "Forms Not Found",
      data: null,
    });
  }

  res.status(200).json({
    success: true,
    message: "Forms Found",
    data: forms,
  });
});

/**
 * @description Get Single Form
 * @route GET /api/forms/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const getSingleForm = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Form']
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

  // retrieve form and check if it exists
  const form = await Form.findOne({ _id: id, user: user._id })
    .populate("submissions")
    .lean()
    .exec();

  // return error if form does not exist
  if (!form) {
    res.status(500).json({
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
 * @route POST /api/forms
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const createForm = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Form']
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

  // get form data from req body
  const { name, description, fields, ratingType } = req.body;

  // check if form data is valid
  if (!name || !description || !fields) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields",
      data: null,
    });
  }

  // get all field values
  const fieldValues = fields.map((field) => {
    return {
      name: field.name,
      type: field.type,
      inputFieldType: field.inputFieldType,
      label: field.label,
      placeholder: field.placeholder,
      required: field.required,
    };
  });

  // create new form
  const form = await Form.create({
    name,
    description,
    fields: fieldValues,
    ratingType: ratingType || "star",
    user: user._id,
  });

  // return error if form creation fails
  if (!form) {
    res.status(500).json({
      success: false,
      message: "Form Creation Failed",
      data: null,
    });
  }

  // return success response
  res.status(200).json({
    success: true,
    message: "Form Created Successfully",
    data: form,
  });
});

/**
 * @description Update Form
 * @route PATCH /api/forms/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const updateForm = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Form']
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

  // update form
  const updatedForm = await Form.findOneAndUpdate(
    { $and: [{ _id: req.params.id }, { user: user._id }] },
    req.body,
    {
      new: true,
    }
  )
    .lean()
    .exec();

  // return error if form creation fails
  if (!updatedForm) {
    res.status(500).json({
      success: false,
      message: "Form Update Failed",
      data: null,
    });
  }

  // return success response
  res.status(200).json({
    success: true,
    message: "Form Updated Successfully",
    data: updatedForm,
  });
});

/**
 * @description Delete Form
 * @route DELETE /api/forms/:id
 * @access Private
 * @returns JSON Response with success status, data and message
 * @returns JSON Response with error status and error message if any error occurs.
 */
export const deleteForm = asyncHandler(async (req, res) => {
  // #swagger.tags = ['Form']
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

  // delete form
  const deletedForm = await Form.findOneAndDelete({
    $and: [{ _id: req.params.id }, { user: user._id }],
  });

  if (!deletedForm) {
    return res.status(500).json({
      success: false,
      message: "Form Deletion Failed",
      data: null,
    });
  }

  // return success response
  res.status(200).json({
    success: true,
    message: "Form Deleted Successfully",
    data: null,
  });
});
