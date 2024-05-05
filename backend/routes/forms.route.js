import express from "express";
import {
  authorizeAdmin,
  authorizeUser,
} from "../middleware/auth.middleware.js";
import {
  createForm,
  deleteForm,
  getAllForms,
  getSingleForm,
  updateForm,
} from "../controllers/form.controller.js";
import { validateObjectId } from "../middleware/validate.middleware.js";

const router = express.Router();

router.use(authorizeUser);

router.get("/", getAllForms);
router.get("/:id", validateObjectId, getSingleForm);

router.use(authorizeAdmin);
router.post("/", createForm);
router.patch("/:id", validateObjectId, updateForm);
router.delete("/:id", validateObjectId, deleteForm);

export default router;
