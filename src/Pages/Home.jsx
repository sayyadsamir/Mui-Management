import React from 'react'
import Sidebar from '../Component/Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dash from '../Pages/Dash.css';
import AccordingDash from '../Component/AccordingDash';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CardContent from '@mui/material/CardContent';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BarChart from '../Charts/BarChart';
import CountUp from 'react-countup';

export default function Home() {
    return (
        <>
            <Navbar />
            <Box height={ 60 } />

            <Box className='bgColor' sx={ { display: 'flex' } } >
                <Sidebar />
                <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 4 }>
                            <Stack spacing={ 2 } direction={ 'row' } />

                            <Card sx={ { minWidth: 49 + "%", height: 170 } } className='gradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <div className='icons'>
                                            <PaymentIcon />
                                        </div>
                                        <div>
                                            <span className='pricetitle'>$ <CountUp delay={ 0.2 } end={ 500 } duration={ 0.9 } />
                                            </span>
                                            <br />
                                            <span className='pricesubtitle'>Total Earning</span>
                                        </div>
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={ 4 }>
                            <Card sx={ { minWidth: 49 + "%", height: 170 } } className='gradient'>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <div className='icons'>
                                            <LocalMallIcon />
                                        </div>
                                        <div>

                                            <span className='pricetitle'>$ <CountUp delay={ 0.2 } end={ 9000.00 } duration={ 0.9 } /></span>
                                            <br />
                                            <span className='pricesubtitle'>Total Order</span>
                                        </div>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack />
                        </Grid>
                        <Grid item xs={ 4 }>
                            <Stack spacing={ 2 } />
                            <Card className='cards' sx={ { maxWidth: 245 + "%", height: 80 } }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Stack spacing={ 2 } direction={ 'row' }>
                                            <div className='icons'>
                                                <StorefrontIcon />
                                            </div>
                                            <div className='paddings'>
                                                <span className='pricetitle'>$ <CountUp delay={ 0.2 } end={ 4300 } duration={ 0.9 } /></span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Typography>
                                </CardContent>
                                <Stack />
                            </Card>
                            <Card className='cards1' sx={ { maxWidth: 245 + "%", height: 80 } }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Stack spacing={ 2 } direction={ 'row' }>
                                            <div className='icons span1'>
                                                <StorefrontIcon />
                                            </div>
                                            <div>
                                                <span className='pricetitle span1'>$203k</span>
                                                <br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack />
                        </Grid>
                    </Grid>
                    <Box height={ 20 } />
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 8 }>
                            <Card sx={ { height: 60 + "vh" } }>
                                <CardContent>
                                    <BarChart />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={ 4 }>
                            <Card sx={ { height: 60 + 'vh' } }>
                                <CardContent>
                                    <div>
                                        <b> Popular Product</b>

                                    </div>
                                    <AccordingDash />
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}
