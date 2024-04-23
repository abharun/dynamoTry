import { Request, Response } from "express";
import { Post } from "../types";
import { getall, getone, insert, remove } from "../services";

export const getAllPosts = async (_req: Request, res: Response) => {
  const posts = await getall();
  res.status(200).send(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const id = req.params.id;
  const post = await getone(id);
  res.status(200).send(post);
};

export const createPost = async (req: Request, res: Response) => {
    const { title, author, field, content } = req.body;
    const result = await insert({title, author, field, content});
    res.status(200).send(result);
};

export const updatePost = async (req: Request, res: Response) => {};

export const deletePost = async (req: Request, res: Response) => {
  const result = await remove(req.params.id);
  res.status(200).send(result);
};
