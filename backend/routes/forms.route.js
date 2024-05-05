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

const router = express.Router();

router.use(authorizeUser);

router.get("/", getAllForms);
router.get("/:id", getSingleForm);

router.use(authorizeAdmin);
router.post("/", createForm);
router.patch("/:id", updateForm);
router.delete("/:id", deleteForm);

export default router;
