import mongoose from "mongoose";

// check if id is a valid object id
export const validateObjectId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid object id",
      data: null,
    });
  }

  next();
};
