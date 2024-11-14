import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/UserController.js";
import authenticateToken from "../middleware.js";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", authenticateToken, createUser);
router.put("/user/:NPM", updateUser);
router.delete("/user/:NPM", deleteUser);

export default router;
