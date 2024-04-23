import { Router } from "express";
import { getPosts, newPost } from "../controllers/postController";

const router = Router();

router.get("/posts", getPosts);
router.post("/post", newPost);

export default router;