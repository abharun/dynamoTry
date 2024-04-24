import { DynamoDB } from "aws-sdk";
import { Post, UpdatePost } from "../types";
import { dbConfig } from "../db";
import { v4 as uuid } from "uuid";

const postDocClient = new DynamoDB.DocumentClient(dbConfig);
const tableName = "posts";

export const getall = async () => {
  const result = await postDocClient.scan({
    TableName: tableName,
    // FilterExpression: "post.title = :title",
    // ExpressionAttributeValues: {
    //   ":title": "HTML",
    // }
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
    const timestamp = Date.now();
    const item = { id, timestamp, ...post };
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
    UpdateExpression: "SET title = :title, author = :author, field = :field, year = :year content = :content",
    ExpressionAttributeValues: {
      ":title": updatedPost.title,
      ":author": updatedPost.author,
      ":field": updatedPost.field,
      ":year": updatedPost.year,
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

export const query = async (query: {[key: string]: any}) => {
  let keyCondition = "";
  let expAttributeNames: {[key: string]: string} = {};
  let expAttributeValues: {[key: string]: any} = {};
  Object.entries(query).forEach(([key, value]) => {
    keyCondition += `#${key} = :${key}`;
    expAttributeNames[`#${key}`] = key;
    expAttributeValues[`:${key}`] = value;
  });

  // expAttributeNames[`#author`] = "author";
  // expAttributeValues[`:author`] = "dash";

  console.log (keyCondition, expAttributeNames, expAttributeValues);

  try {
    const result = await postDocClient.query({
      TableName: tableName,
      IndexName: "FieldIndex",
      // FilterExpression: "#author = :author",
      KeyConditionExpression: keyCondition,
      ExpressionAttributeNames: expAttributeNames,
      ExpressionAttributeValues: expAttributeValues,
    }).promise();

    return result.Items || null;
  } catch(error: any) {
    console.log(error.__type);
    console.log(error.Message);
    return null;
  }
}
