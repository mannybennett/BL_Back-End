import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

const s3Client = new S3Client({
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.KEY,
    secretAccessKey: process.env.S_KEY
  }
});

const fileStream = fs.createReadStream('C:\\Users\\manny\\Documents\\devFolder\\BL_Back-End\\testFile.mp3');

const uploadObjectParams = (fileKey) => {
  return {
    Bucket: process.env.BUCKET,
    Key: fileKey,
    Body: fileStream
  }
};

export const uploadObject = async (file) => {
  try {
    console.log(file)
    const command = new PutObjectCommand(uploadObjectParams());
    const response = await s3Client.send(command);
    console.log('Object uploaded successfully:', response);
  } catch (error) {
    console.error('Error uploading object:', error);
  }
};