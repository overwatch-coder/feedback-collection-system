import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fields: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          default: "text",
        },
        inputFieldType: {
          type: String,
          enum: ["text", "number", "date", "email", "url", "password"],
          default: "text",
        },
        label: {
          type: String,
          required: true,
        },
        placeholder: {
          type: String,
          default: "Enter your answer here",
        },
        required: {
          type: Boolean,
          default: false,
        },
      },
    ],
    submissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission",
      },
    ],
    ratingType: {
      type: String,
      enum: ["star", "number", "emoji"],
      default: "star",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

formSchema.set("strictPopulate", false);

const Form = mongoose.model("Form", formSchema);

export default Form;
