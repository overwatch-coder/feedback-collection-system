import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successfully...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
