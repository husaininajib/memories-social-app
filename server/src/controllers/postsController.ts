import express, { Request, Response } from 'express';
import PostMessage from '../models/PostMessage';

const getPost = async (req: Request, res: Response) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(404);
  }
};

const createPost = async (req: Request, res: Response) => {
  const { title, message, selectedFile, tags, likeCount, createdAt } = req.body;
  try {
    const createdPost = await PostMessage.create({
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
  getPost,
  createPost,
};
