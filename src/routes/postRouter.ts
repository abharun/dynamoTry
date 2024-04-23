import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/:id", deletePost);

export default router;
