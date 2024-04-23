import { DynamoDB } from "aws-sdk";
import { Post, UpdatePost } from "../types";
import { dbConfig } from "../db";
import { v4 as uuid } from "uuid";

const postDocClient = new DynamoDB.DocumentClient(dbConfig);
const tableName = "posts";

export const getall = async () => {
  const result = await postDocClient.scan({
    TableName: tableName,
  }).promise();
  return result;
};

export const getone = async (id: string) => {
  const result = await postDocClient.get({
    TableName: tableName,
    Key: { id },
  }).promise();
  return result.Item || null;
};

export const insert = async (post: Post) => {
    const id = uuid();
    const item = { id, ...post };
    await postDocClient.put({
        TableName: tableName,
        Item: item,
    }).promise();
    return item;
};

export const update = async (updatedPost: UpdatePost) => {
  const params = {
    TableName: tableName,
    Key: { id: updatedPost.id },
    UpdateExpression: "SET title = :title, author = :author, field = :field, content = :content",
    ExpressionAttributeValues: {
      ":title": updatedPost.title,
      ":author": updatedPost.author,
      ":field": updatedPost.field,
      ":content": updatedPost.content,
    },
    ReturnValues: "ALL_NEW",
  };

  const result = await postDocClient.update(params).promise();
  return result;
};

export const remove = async (id: string) => {
    const result = await postDocClient.delete({
        TableName: tableName,
        Key: { id },
        ReturnValues: "ALL_OLD",
    }).promise();

    return result;
};
