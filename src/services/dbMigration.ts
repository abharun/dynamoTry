import { DynamoDB, Credentials } from "aws-sdk";
import { Post } from "../types";

const endpoint = "http://localhost:8000";
const region = "us-west-2";

const credentials = new Credentials('dummy', 'dummy', 'dummy');
const dynamoDB = new DynamoDB({endpoint: endpoint, region: region, credentials: credentials});

export const createTable = async (tableName: string) => {
    const params = {
        TableName: tableName,
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" }, // Assuming "id" is the primary key
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "S" }, // "S" stands for String
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
        },
    };

    try {
        const result = await dynamoDB.createTable(params).promise();
        console.log("Table created successfully:", result);
        return result;
    } catch (err) {
        console.error("Error on creating table: ", err);
        throw err;
    }
}