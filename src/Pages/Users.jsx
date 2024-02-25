import React from 'react'
import Sidebar from '../Component/Sidebar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Component/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <Box height={ 50 } />

      <Box sx={ { display: 'flex' } }>
        <Sidebar />
        <h1>About</h1>
        <Box component="main" sx={ { flexGrow: 1, p: 3 } }>

        </Box>
      </Box>
    </>
  )
}
