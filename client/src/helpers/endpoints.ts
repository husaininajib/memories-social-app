const domain = window.location.origin;
const PORT_5000 = 'http://localhost:5000';

export const END_POINTS = {
  getPosts: {
    url: `${PORT_5000}/posts`,
  },
  getImageUrl: {
    url: `${PORT_5000}/s3_bucket`,
  },
  post: {
    url: `${PORT_5000}/posts`,
    headers: {
      'Content-Type': 'application/json',
    },
  },
};
