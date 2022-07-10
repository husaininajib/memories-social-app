import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.listen(5000, () => {
  console.log('server running at post 5000');
});

app.get('/', (req: Request, res: Response): void => {
  // res.json({ message: 'hello world' });
  res.send('hello haha')
});
