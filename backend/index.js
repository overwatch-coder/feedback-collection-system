import "dotenv/config.js";

// import packages
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

// import db
import connectDB from "./config/db.config.js";

// import middleware
import { errorHandler } from "./middleware/error.middleware.js";

// import routes
import userRoutes from "./routes/user.route.js";
import formRoutes from "./routes/forms.route.js";
import submissionRoutes from "./routes/submissions.route.js";

// custom imports
import swaggerDocs from "./docs/docs.json" with { type: "json" };

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
  app.use("/api/forms", formRoutes);
  app.use("/api/submissions", submissionRoutes);

  // setup docs
  const SWAGGER_UI_CSS_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.3/swagger-ui.min.css";
  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, { customCssUrl: SWAGGER_UI_CSS_URL })
  );

  // default route
  app.use("*", (req, res) => {
    res.redirect(process.env.DOCS_URL);
  });

  // error handler
  app.use(errorHandler);

  // connect to db
  await connectDB();

  // set port
  const port = process.env.PORT || 8000;

  // server
  app.listen(port, () => console.log(`Server running on port ${port}`));
};

initializeServer();
