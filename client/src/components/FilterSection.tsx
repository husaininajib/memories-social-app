import { Autocomplete, Box, Button, Chip, Container, Paper, Stack, TextField } from '@mui/material';
import React from 'react';

const FilterSection = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box display={'flex'} flexDirection="column" gap={2}>
          <TextField id="standard-basic" label="Search Memories" variant="outlined" size="small" />
          <TextField id="standard-basic" label="Search Tags" variant="outlined" size="small" autoComplete="hello" />
          <Stack direction="row" spacing={1}>
            <Chip label="primary" color="primary" />
            <Chip label="success" color="success" />
          </Stack>
          <Button variant="contained">SEARCH</Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default FilterSection;
