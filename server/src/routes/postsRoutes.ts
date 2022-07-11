import express from "express";
import postsController from '../controllers/postsController'

const router = express.Router();

router.get('/', postsController.get_posts);

export default router;

