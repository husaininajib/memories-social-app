import express, { Request, Response } from 'express';
import { generateUploadUrl } from '../services/s3Bucket.service';

const getImagesUrl = async (req: Request, res: Response) => {
  const url = await generateUploadUrl();
  res.status(200).send({ url });
};

export default {
  getImagesUrl,
};
