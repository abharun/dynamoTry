import { AWSError, DynamoDB } from "aws-sdk";
import { dbConfig } from "./config";

export const createTables = async (tableNames: string[]) => {
  const dynamoDB = new DynamoDB(dbConfig);
  tableNames.map(async (tbname) => {
    try {
      await dynamoDB.describeTable({ TableName: tbname }).promise();
      console.log(`Table ${tbname} already exists.`);
    } catch (error: any) {
      if (error.code === "ResourceNotFoundException") {
        const params = {
          TableName: tbname,
          KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
          AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
          },
        };

        try {
          await dynamoDB.createTable(params).promise();
          console.log(`Table ${tbname} created successfully.`);
        } catch (createError) {
          console.error(`Failed to create table ${tbname}:`, createError);
        }
      } else {
        console.log(`Failed to describe Table ${tbname}.`);
      }
    }
  });
};
