import { Request, Response } from "express";
import { getall, getone, insert, remove, update, query } from "../services";

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
  const { title, author, field, year, content } = req.body;
  const result = await insert({ title, author, field, year, content });
  res.status(200).send(result);
};

export const updatePost = async (req: Request, res: Response) => {
  const { id, title, author, year, field, content } = req.body;
  const result = await update({ id, title, author, field, year, content });
  res.status(200).send(result);
};

export const deletePost = async (req: Request, res: Response) => {
  const result = await remove(req.params.id);
  res.status(200).send(result);
};

export const queryPost = async (req: Request, res: Response) => {
  const searchQuery = {...req.body};
  const result = await query(searchQuery);
  res.status(200).send(result);
}
