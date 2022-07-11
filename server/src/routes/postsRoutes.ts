import express from "express";
import postsController from '../controllers/postsController'

const router = express.Router();

router.get('/', postsController.getPost);
router.post('/', postsController.createPost);

export default router;

