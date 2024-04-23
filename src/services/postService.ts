import { DynamoDB } from "aws-sdk";
import { Post } from "../types";
import { dbConfig } from "../db";
import {} from "uuid";

const postDocClient = new DynamoDB.DocumentClient(dbConfig);
const tableName = "posts";

export const getall = async () => {
    const params = {
        TableName: tableName,
    };

    const result = await postDocClient.scan(params);
    return result;
};

export const getone = async () => {};

export const create = async () => {};

export const update = async () => {};

export const remove = async () => {};
