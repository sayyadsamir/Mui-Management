import React from 'react'
import Sidebar from './Component/Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Home from './Pages/Home';
import Product from './Pages/Products/Product';
import Setting from './Pages/Setting';
import Analytics from './Pages/Analytics'
import Login from './Pages/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
             <BrowserRouter> 

             <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Product' element={<Product/>}></Route>
                <Route path='/Analytics' element={<Analytics/>}></Route>
                <Route path='/Setting' element={<Setting/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
             </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
