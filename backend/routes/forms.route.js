import express from "express";
import {
  authorizeAdmin,
  authorizeUser,
} from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authorizeUser);
router.use(authorizeAdmin);

router.get("/");
router.get("/:id");
router.post("/");
router.patch("/:id");
router.delete("/:id");

export default router;
