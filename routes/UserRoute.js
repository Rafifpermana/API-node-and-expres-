import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controller/UserController.js";
import authenticateToken from "../middleware.js";

const router = express.Router();

router.get("/users", getUser);
router.post("/users", authenticateToken, createUser);
router.put("/users/:NPM", authenticateToken, updateUser);
router.delete("/users/:NPM", authenticateToken, deleteUser);

export default router;
