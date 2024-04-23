import { DynamoDB } from "aws-sdk";
import { Post } from "../types";
import { dbConfig } from "../db";
import {} from "uuid";

const postDocClient = new DynamoDB.DocumentClient(dbConfig);
const tableName = "posts";

export const getall = async () => {};

export const getone = async () => {};

export const create = async () => {};

export const update = async () => {};

export const remove = async () => {};
