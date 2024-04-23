import { Router } from "express";
import { createPost, deletePost, getAllPosts, getPost, updatePost } from "../services/postService";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;