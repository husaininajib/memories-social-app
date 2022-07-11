import express, { Request, Response } from 'express';

const get_posts = (req: Request, res: Response): void => {
  res.send('this is posts page');
};

export default {
  get_posts,
};