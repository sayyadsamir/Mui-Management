

import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { Box, Typography } from '@mui/material';
import Sidebar from '../Component/Sidebar';
import Dash from '../Pages/Dash.css'


export default function Login() {

    const [data,setData] = useState('');

      const handleData = (e) =>{
           e.preventDefault();

          setData(e.target.value);
          
    }
    useEffect(()=>{
       console.log(data);
       

    })
    return (
        <>
            <Navbar />
            < Box height={ 40 }/>

            <Box sx={ { display: 'flex' } } >
                <Sidebar />
                <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
                    <div className='outer text-center'>
                        <form className='inner'>
                            <input type="text" onChange={handleData} placeholder='Username' className='form-control ' />
                            <input type="text" onChange={handleData} placeholder='Password' className='form-control ' />
                           
                            <br /><br />
                            <button className='btn btn-lg btn-outline-primary w-100'>Save</button>
                        </form>
                    </div>
                </Box>
            </Box>
        </>
    )
}

