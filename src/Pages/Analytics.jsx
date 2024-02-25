import React from 'react'
import Sidebar from '../Component/Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Dash from './Dash.css';
import Analytic_BarChart from '../Charts/Analytics_BarChart';
import GeoChart_Analytic from '../Charts/GeoChart_Analytic';
import Pie_Analytic from '../Charts/Pie_Analytic'
import CountUp from 'react-countup';


export default function Setting() {
    return (
        <>
            <Navbar />
            <Box height={ 50 } />
            <Box className='bgColor' sx={ { display: 'flex' } }>

                <Sidebar />
                {/* <h1>Analytics</h1> */ }
                <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 5 }>
                            <Stack spacing={ 2 } direction={ 'row' }>

                                <Card className='cards' sx={ { minWidth: 49 + "%" , height: 170 } }>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <div>
                                                <span className='pricetitle'>
                                                <CountUp delay={0.2} end={2000} duration={0.9} />
                                                </span>
                                                <br />
                                                <span className='pricesubtitle'>Total Earning</span>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className='cards' sx={ { minWidth: 49 + "%" } }>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <div>
                                                <span className='pricetitle'>
                                                    <CountUp delay={0.2} end={4000} duration={0.9} />
                                                </span>
                                                <br />
                                                <span className='pricesubtitle'>Total Earning</span>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                            <br />
                            <Stack spacing={ 2 } direction={ 'row' }>

                                <Card className='cards' sx={ { minWidth: 49 + "%" ,  height: 140 } }>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <div>
                                                <span className='pricetitle'>
                                                <CountUp delay={0.2} end={3000} duration={0.9} />
                                                </span>
                                                <br />
                                                <span className='pricesubtitle'>Total Earning</span>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card className='cards' sx={ { minWidth: 49 + "%" } }>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            <div>
                                                <span className='pricetitle'>
                                                <CountUp delay={0.2} end={22000} duration={0.9} />
                                                </span>
                                                <br />
                                                <span className='pricesubtitle'>Total Earning</span>
                                            </div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>

                        </Grid>
                        <Grid item xs={ 7 }>
                            <Card  sx={ { minWidth: 49 + "%", height: 340 } }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       <Analytic_BarChart/>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={ 8 }>
                            <Card  sx={ { minWidth: 49 + "%", height: 420 } }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       <GeoChart_Analytic/>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={ 4 }>
                            <Card  sx={ { minWidth: 49 + "%", height: 420 } }>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       <Pie_Analytic/>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}
