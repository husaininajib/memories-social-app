import { Box, Button, Chip, Container, Paper, Stack, TextField } from '@mui/material';
import React from 'react';

const PostForm: React.FC = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box display={'flex'} flexDirection="column" gap={2}>
          <TextField id="standard-basic" label="Title" variant="outlined" size="small" />
          <TextField
            id="standard-basic"
            label="Message"
            variant="outlined"
            size="small"
            autoComplete="hello"
            multiline
            rows={4}
          />
          <TextField id="standard-basic" label="Tags" variant="outlined" size="small" autoComplete="hello" />
          <Stack direction="row" spacing={1}>
            <Chip label="primary" color="primary" />
            <Chip label="success" color="success" />
          </Stack>
          <input type="file" id="myFile" name="filename"></input>
          <Button variant="contained">SEARCH</Button>
          <Button variant="contained" color="error">
            CLEAR
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostForm;
