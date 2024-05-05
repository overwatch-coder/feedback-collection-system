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
          default: "Field Name",
        },
        type: {
          type: String,
          default: "text",
        },
        inputFieldType: {
          type: String,
          enum: ["text", "number", "date", "email", "url", "password", "tel"],
          default: "text",
        },
        label: {
          type: String,
          default: "Field Label",
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

// delete a submission if it's form has been deleted
formSchema.pre("deleteOne", async function (next) {
  await this.model("Submission").deleteMany({ formId: this._id });
  next();
});

const Form = mongoose.model("Form", formSchema);

export default Form;
