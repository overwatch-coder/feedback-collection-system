import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: {
      type: String,
      default: "https://source.unsplash.com/random",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.set("strictPopulate", false);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;

  next();
});

// delete form and submissions when user is deleted
userSchema.pre("deleteOne", async function (next) {
  await this.model("Form").deleteMany({ user: this._id });
  await this.model("Submission").deleteMany({ owner: this._id });
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
