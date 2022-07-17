import { Accordion, Pagination } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import SimpleAccordion from './components/Accordion';
import FilterSection from './components/FilterSection';
import MemoriesList from './components/MemoriesList';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const { data } = await axios.get('http://localhost:5000/posts/');
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getPosts();
  // }, []);

  return (
    <>
      <Navbar />
      <FilterSection />
      <PostForm />
      <Pagination count={10} sx={{ mt: 2 }} />
      <MemoriesList />
      {/* <SignIn />
      <SignUp /> */}
      {/* <SimpleAccordion /> */}
    </>
  );
}

export default App;
