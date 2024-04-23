import { Request, Response } from "express";
import { Post } from "../types";
import { getall, getone, insert } from "../services";

export const getAllPosts = (_req: Request, res: Response) => {
  const posts = getall();
  res.status(200).send(posts);
};

export const getPost = (req: Request, res: Response) => {
  const id = req.params.id;
  const post = getone(id);
};

export const createPost = (req: Request, res: Response) => {
    const { title, author, field, content } = req.body;
    const result = insert({title, author, field, content});
    res.status(200).send(result);
};

export const updatePost = (req: Request, res: Response) => {};

export const deletePost = (req: Request, res: Response) => {
  const result = delete(req.params.id);
  res.status(200).send(result);
};
