import { DynamoDB } from "aws-sdk";
import { Post } from "../types";
import { dbConfig } from "../db";
import {} from "uuid";

const postDocClient = new DynamoDB.DocumentClient(dbConfig);
const tableName = "posts";

export const getAllPosts = async () => {};

export const getPost = async () => {};

export const createPost = async () => {};

export const updatePost = async () => {};

export const deletePost = async () => {};
