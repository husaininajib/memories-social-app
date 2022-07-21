import { Box, Button, Chip, Container, Paper, Stack, TextField, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import PostService from '../services/post.service';
import ImageService from '../services/image.service';

const validationSchema = yup.object({
  creator: yup.string().required('This field is required'),
  title: yup.string().required('This field is required'),
  message: yup.string().required('This field is required'),
  tags: yup.string(),
  selectedFile: yup.mixed().required('This field is required'),
});

const PostForm: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const formik = useFormik({
    validationSchema,
    initialValues: {
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    },
    onSubmit: async (values) => {
      try {
        //! GET aws url
        const s3BucketUrl = await ImageService.getImageUrl();

        //! PUT image to the url
        const uploadedimage = values.selectedFile[0];
        await ImageService.putImage(s3BucketUrl, uploadedimage);

        //! POST form data items with image url string to
        const imageUrl = s3BucketUrl.split('?')[0];
        const postPayload = { ...values, selectedFile: imageUrl, tags };

        await PostService.createPost(postPayload);

        if (Object.keys(formik.errors).length === 0) {
          handleClear();
        }
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

  const handleClear = (): void => {
    formik.setFieldValue('creator', '');
    formik.setFieldValue('title', '');
    formik.setFieldValue('message', '');
    formik.setFieldValue('tags', '');
    formik.setFieldValue('selectedFile', '');
    setTags([]);
  };

  const handleDeleteTag = (value: any) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== value));
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box display={'flex'} flexDirection="column" gap={2}>
          <TextField
            name="creator"
            id="creator"
            label="Creator"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.creator}
            required
            error={!!formik.errors.creator}
            helperText={formik.errors.creator}
          />
          <TextField
            name="title"
            id="title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.title}
            required
            error={!!formik.errors.title}
            helperText={formik.errors.title}
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
            required
            error={!!formik.errors.message}
            helperText={formik.errors.message}
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
            required
            // error={formik.errors.message}
            // helperText={formik.errors.message}
          />
          {formik.errors.selectedFile && (
            <Typography color={'#d32f2f'} fontSize={'small'}>
              {formik.errors.selectedFile}
            </Typography>
          )}
          <Button variant="contained" onClick={() => formik.handleSubmit()}>
            SUBMIT
          </Button>
          <Button variant="contained" color="error" onClick={handleClear}>
            CLEAR
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default PostForm;
