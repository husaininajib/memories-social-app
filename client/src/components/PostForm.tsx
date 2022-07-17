import { Box, Button, Chip, Container, Paper, Stack, TextField } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const validationSchema = yup.object({
  title: yup.string().required('This field is required'),
  message: yup.string().required('This field is required'),
  // tags: yup.string().required('This field is required'),
  selectedFile: yup.mixed().required('This field is required'),
});

const PostForm: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [imageUpload, setImageUpload] = useState<any>(null);
  const formik = useFormik({
    validationSchema,
    initialValues: {
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    },
    onSubmit: async (values) => {
      const image = values.selectedFile[0];
      console.log(image);
      try {
        //! GET aws url
        const { data } = await axios.get('http://localhost:5000/s3_bucket/');

        //! PUT image to the url
        const postedImage = await axios.put(data.url, image, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        //! get the image
        const imageUrl = data.url.split('?')[0];
        console.log(imageUrl);

        const postPayload = { ...values, selectedFile: imageUrl, tags };

        const createdPost = await axios.post('http://localhost:5000/posts/', postPayload);
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handleAddTag = (values: string) => {
    if (values) {
      setTags((prevTags) => [...prevTags, values]);
      formik.setFieldValue('tags', '');
    } else {
      return;
    }
  };

  console.log(formik.errors);
  console.log(formik.values.selectedFile);

  const handleDeleteTag = (value: any) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== value));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box display={'flex'} flexDirection="column" gap={2}>
          <TextField
            name="title"
            id="title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <TextField
            name="message"
            id="message"
            label="Message"
            variant="outlined"
            size="small"
            autoComplete="hello"
            multiline
            rows={4}
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Box>
            <TextField
              name="tags"
              id="tags"
              label="Tags"
              variant="outlined"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.tags}
            />
            <Button variant="contained" onClick={() => handleAddTag(formik.values.tags)}>
              <ChevronRightIcon />
            </Button>
          </Box>
          <Stack direction="row" spacing={1}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} color="primary" onDelete={() => handleDeleteTag(tag)} />
            ))}
          </Stack>
          <input
            type="file"
            id="myFile"
            accept="image/*"
            name="selectedFile"
            onChange={(e) => formik.setFieldValue('selectedFile', e.target.files)}
          />
          <Button variant="contained" onClick={() => formik.handleSubmit()}>
            SUBMIT
          </Button>
          <Button variant="contained" color="error">
            CLEAR
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostForm;
