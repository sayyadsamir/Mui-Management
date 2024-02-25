import React from 'react'
// import Grid from '@mui/joy/Grid';
import Box from '@mui/material/Box';
import Sidebar from '../../Component/Sidebar';
// import Navbar from '../Component/Navbar';
import Navbar from '../../Component/Navbar';
import ProductList from './ProductList'
// import Home from '../Home'


export default function Product() {
  return (
    <>
      <Navbar />
      <Box height={ 50 } />

      <Box sx={ { display: 'flex' } }>
        <Sidebar />

        <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
          {/* < Home /> */}
         <ProductList/>
         
        </Box>
      </Box>
    </>
  )
}
