import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import { Box, Typography } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Swal from "sweetalert2";
import { useState } from 'react';
// import { collection, addDoc, getDoc } from "firebase/firestore"
import { db } from "./Firebase";
import { useAppStore } from '../App_Store';


import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";

export default function Update({ fid, closeEvent }) {

    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState(0);
    const [ category, setCategory ] = useState('');
    const setRows = useAppStore((state) => state.setRows)
    const rows = useAppStore((state) => state.rows);

    const empCollectionRef = collection(db, "MuiCrud");


    const createUser = async () => {

        const userDoc = doc(db, "MuiCrud", fid.id)
        const newfields = {
            name: String(name),
            price: Number(price),
            category: category,
            date: String(new Date()),
        };
        await updateDoc(userDoc, newfields)
        getUsers()
        closeEvent();

        Swal.fire("Submitted", "Your file has been submited...")

    }

    useEffect(() => {
        console.log("FID: " + fid.id);
        // console.log('name' + fid.name);
        setName(fid.name);
        setPrice(fid.price);
        setCategory(fid.category)
    }, []);

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <>
            <Box sx={ { m: 1 } } />

            <Typography Variant='h2' align='center'>
                <h2>Edit Product</h2>
            </Typography>
            <IconButton
                style={ { position: "absolute", top: '0', right: '5' } }
                onClick={ closeEvent }
            >
                <closeIcon />
            </IconButton>
            <Grid container className='text-center' spacing={ 2 }>
                <Grid sx={ 12 }>
                    <TextField name='name' value={ name } onChange={ (e) => setName(e.target.value) } id="outlined-basic" label="Name" variant="outlined" size='small' />
                </Grid>
                <Grid sx={ 6 }>
                    <TextField name='price' value={ price } onChange={ (e) => setPrice(e.target.value) } id="outlined-basic" label="Price" variant="outlined" size='small' />
                </Grid>
                <Grid sx={ 12 }>
                    <TextField className='w-100' name='category' value={ category } onChange={ (e) => setCategory(e.target.value) } id="outlined-basic" label="Category" variant="outlined" size='small' />
                </Grid>

                <Grid sx={ 6 }>

                    <br /><br />
                    <Button onClick={ createUser } size="lg">Large</Button>
                </Grid>


                {/* </Stack> */ }
            </Grid>

        </>
    );
}
