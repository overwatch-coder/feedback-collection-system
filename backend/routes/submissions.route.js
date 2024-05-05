import express from "express";
import {
  authorizeAdmin,
  authorizeUser,
} from "../middleware/auth.middleware.js";
import { validateObjectId } from "../middleware/validate.middleware.js";
import {
  createSubmission,
  deleteSubmission,
  getAllSubmissions,
  getSingleSubmission,
} from "../controllers/submission.controller.js";

const router = express.Router();

router.use(authorizeUser);

router.get("/", getAllSubmissions);
router.get("/:id", validateObjectId, getSingleSubmission);
router.post("/", createSubmission);
router.delete("/:id", validateObjectId, authorizeAdmin, deleteSubmission);

export default router;
