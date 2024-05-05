import "dotenv/config.js";

// import packages
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// import db
import connectDB from "./config/db.config.js";

// import routes
import userRoutes from "./routes/user.route.js";

// server
const initializeServer = async () => {
  // initialize express
  const app = express();

  // middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );
  app.use(helmet());
  app.use(morgan("dev"));

  // routes
  app.use("/api/auth", userRoutes);

  // connect to db
  await connectDB();

  // set port
  const port = process.env.PORT || 8000;

  // server
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

initializeServer();
