import { DynamoDB, Credentials } from "aws-sdk";
import { Post } from "../types";

const tableName = "posts";

const endpoint = "http://localhost:8000";
const region = "us-west-2";

const credentials = new Credentials('dummy', 'dummy', 'dummy');
const dynamoDB = new DynamoDB.DocumentClient({endpoint: endpoint, region: region, credentials: credentials});

export const getAllPosts = async () => {
    const params = {
        TableName: tableName,
    };

    try {
        const result = await dynamoDB.scan(params).promise();
        return result;
    } catch (err) {
        console.error("Error on fetching posts: ", err);
        throw err;
    }
}

export const createPost = async (postData: Post) => {
    const params = {
        TableName: tableName,
        Item: {id: "newid", ...postData},
    };

    try {
        const result = await dynamoDB.put(params).promise();
        console.log("Post created successfully:", result);
        return result;
    } catch (err) {
        console.error("Error on creating a post: ", err);
        throw err;
    }
}