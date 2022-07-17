import dotenv from 'dotenv';
import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';

dotenv.config();

const region: string = 'us-west-2';
const bucketName: string = 'direct-upload-s3-bucket-nejuko';
const accessKeyId: any = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey: any = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: 'v4',
});

const randomBytes = promisify(crypto.randomBytes);

export const generateUploadUrl = async () => {
  try {
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Expires: 60,
    };

    return await s3.getSignedUrlPromise('putObject', params);
  } catch (err) {
    console.log(err);
  }
};
