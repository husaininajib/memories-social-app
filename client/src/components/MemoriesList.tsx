import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostService from '../services/post.service';
import { PostItems } from '../helpers/types';

type Props = {};

const MemoriesList: React.FC = (props: Props) => {
  const [allPosts, setAllPosts] = useState<PostItems[]>([]);

  useEffect(() => {
    const getPosts = async (): Promise<void> => {
      try {
        const postsResponse = await PostService.getPosts();
        setAllPosts(postsResponse as PostItems[]);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <Container sx={{ mt: 8 }}>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {allPosts.length > 0 &&
            allPosts.map((post, key) => {
              return (
                <Grid key={key} item xs={6}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component="img" height="194" image={post.selectedFile} alt="kimetsu no yaiba" />
                    <CardContent>
                      <Box display={'flex'} gap={2}>
                        {post.tags.map((tag, key) => (
                          <Typography key={key} variant="body2" color="text.secondary">
                            #{tag}
                          </Typography>
                        ))}
                      </Box>
                      <Typography component="h2" variant="h6" color="text.primary">
                        {post.title}
                      </Typography>

                      <Typography component="p" variant="body2" color="text.secondary">
                        {post.message}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {post.likeCount} Like
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Paper>
    </Container>
  );
};

export default MemoriesList;
