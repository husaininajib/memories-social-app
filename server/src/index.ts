import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postsRoutes from '../src/routes/postsRoutes';
import awsS3Routes from './routes/s3BucketRoutes';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb' }));
app.use(cors());

const dbUri = 'mongodb+srv://nejuko:iamadmin@cluster0.zjxruup.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(dbUri)
  .then((res) => {
    console.log('starting server at port 5000');
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.get('/', (req: Request, res: Response): void => {
  // res.json({ message: 'hello world' });
  res.send('hello haha');
});

app.use('/posts', postsRoutes);
app.use('/s3_bucket', awsS3Routes);
