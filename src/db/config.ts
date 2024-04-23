import { DynamoDB, Credentials } from "aws-sdk";
import { Post } from "../types";

const endpoint = "http://localhost:8000";
const region = "eu-west-1";
const credentials = new Credentials({
  accessKeyId: "FakeAccessKeyId",
  secretAccessKey: "FakeAccessKey",
  sessionToken: "FakeSessionToken",
});

export const dbConfig = {
  endpoint: endpoint,
  region: region,
  credentials: credentials,
};
