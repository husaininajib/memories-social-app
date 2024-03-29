import express, { Request, Response } from 'express';
import PostMessage from '../models/PostMessage';

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

const createPost = async (req: Request, res: Response) => {
  const { creator, title, message, selectedFile, tags, likeCount, createdAt } = req.body;
  try {
    const createdPost = await PostMessage.create({
      creator,
      title,
      message,
      selectedFile,
      tags,
      likeCount,
      createdAt,
    });
    createdPost.save();
    res.status(200).json(createdPost);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

export default {
  getPosts,
  createPost,
};
