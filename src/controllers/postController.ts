import { Request, Response } from "express";
import {
  getall,
  getone,
  insert,
  remove,
  update,
  query,
  mocking,
} from "../services";
import { mockData } from "../consts/mock";
import { v4 as uuid } from "uuid";

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
  const searchQuery = { ...req.body };
  const result = await query(searchQuery);
  res.status(200).send(result);
};

export const createMock = async (req: Request, res: Response) => {
  const keymod = req.query.keymod || "sep";
  const datamod = req.query.datamod || "value";
  const result = await mocking(keymod as string, datamod as string, mockData);
  res.status(200).send(result);
};
