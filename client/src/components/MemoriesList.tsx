import {
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
import React from 'react';

type Props = {};

const MemoriesList: React.FC = (props: Props) => {
  return (
    <Container sx={{ mt: 8 }}>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  #eiffeltower #paris
                </Typography>

                <Typography component="h2" variant="h6" color="text.primary">
                  Paris
                </Typography>

                <Typography component="p" variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                  cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  1 Like
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="194" image="/static/images/cards/paella.jpg" alt="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  #eiffeltower #paris
                </Typography>

                <Typography component="h2" variant="h6" color="text.primary">
                  Paris
                </Typography>

                <Typography component="p" variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                  cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <Typography variant="body2" color="text.secondary">
                  1 Like
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MemoriesList;
