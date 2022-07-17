import express from 'express';
import s3BucketController from '../controllers/s3BucketController';

const router = express.Router();

router.get('/', s3BucketController.getImagesUrl);

export default router;
