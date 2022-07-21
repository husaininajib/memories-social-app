import axios from 'axios';
import { END_POINTS } from '../helpers/endpoints';
import { PostItems } from '../helpers/types';

const createPost = async (payload: any) => {
  try {
    const createdPost = await axios.post(END_POINTS.post.url, payload, { headers: END_POINTS.post.headers });
  } catch (err) {
    console.log(err);
  }
};

const getPosts = async (): Promise<PostItems[] | undefined> => {
  try {
    const { data } = await axios.get(END_POINTS.getPosts.url);
    return (data as PostItems[]) ?? null;
  } catch (err) {
    console.log(err);
  }
};

export default {
  createPost,
  getPosts,
};
