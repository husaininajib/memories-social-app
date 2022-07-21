import axios from 'axios';
import { END_POINTS } from '../helpers/endpoints';

const getImageUrl = async () => {
  try {
    const { data } = await axios.get(END_POINTS.getImageUrl.url);
    return data.url;
  } catch (err) {
    console.log(err);
  }
};

const putImage = async (url: string, payload: any) => {
  try {
    await axios.put(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export default {
  getImageUrl,
  putImage,
};
