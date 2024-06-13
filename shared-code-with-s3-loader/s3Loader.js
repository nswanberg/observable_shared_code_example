// Example S3 data loader that can retrieve data from a public S3 bucket

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

async function readFromS3(bucketName, objectKey) {
  const s3Client = new S3Client({
    region: "us-east-1",
  });

  // Retrieve the object from S3
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
  });

  try {
    const { Body } = await s3Client.send(command);
    const data = await new Response(Body).text();
    return data;
  } catch (error) {
    console.error("Error reading from S3:", error);
    return [];
  }
}

export { readFromS3 };
