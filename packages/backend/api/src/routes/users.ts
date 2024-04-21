import express from "express";
import { authorization } from "../middleware/authorization";
import { createUser, deleteUser, getUserById, updateUser } from "../services/users";

const router = express.Router();
router.use(authorization);

router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;

