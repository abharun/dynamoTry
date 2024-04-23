import { Request, Response } from "express";
import { createPost, getAllPosts } from "../services/postService";
import { Post } from "../types";

export const getPosts = async (_req: Request, res: Response) => {
  const posts = await getAllPosts();

  res.status(200).send(posts);
};

export const newPost = async (req: Request, res: Response) => {
    const post: Post = req.body;

    const result = await createPost(post);

    res.status(200).send(result);
}
