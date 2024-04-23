import { Request, Response } from "express";
import { Post } from "../types";
import { getall } from "../services";

export const getAllPosts = (_req: Request, res: Response) => {
    const posts = getall();
    res.status(200).send(posts);
}

export const getPost = (req: Request, res: Response) => {}
export const createPost = (req: Request, res: Response) => {}
export const updatePost = (req: Request, res: Response) => {}
export const deletePost = (req: Request, res: Response) => {}
