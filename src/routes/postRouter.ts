import { Router } from "express";
import {
  createMock,
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  queryPost,
  updatePost,
} from "../controllers";

const router = Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/", updatePost);
router.delete("/:id", deletePost);
router.post("/search", queryPost);
router.post("/mock", createMock);

export default router;
