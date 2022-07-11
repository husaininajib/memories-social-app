import { Pagination } from '@mui/material';
import React from 'react';
import FilterSection from './components/FilterSection';
import MemoriesList from './components/MemoriesList';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <Navbar />
      <FilterSection />
      <PostForm />
      <Pagination count={10} sx={{mt: 2}}/>
      <MemoriesList />
      <SignIn />
      <SignUp />
    </>
  );
}

export default App;
