import React from 'react'
import Sidebar from '../Component/Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../Component/Navbar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

export default function Setting() {
  return (
    <>
      <Navbar />
      <Box height={ 50 } />
      <Box sx={ { display: 'flex' } }>
        <Sidebar />
        <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
          <Grid container spacing={ 2 } className="setting">
            <div className='images'>

            </div>
            <section className='mt-4'>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam assumenda impedit dolores nihil commodi. Nesciunt sequi quia itaque eaque molestiae voluptas vel quidem ab impedit, iusto quasi veritatis! Perspiciatis, excepturi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at voluptatum, numquam cupiditate atque vitae eveniet suscipit neque labore assumenda, ipsum eum excepturi. Eveniet dolores, delectus iure debitis reprehenderit esse.
              </div>

              <div className='mt-5 container-fluid cards2'>
                <Grid container spacing={ 2 }>
                  <Grid item xs={ 4 } data-aos="fade-right">
                    <Stack spacing={ 2 } direction={ 'row' } />

                    <Card sx={ { maxWidth: 345 } } className='card2'>
                      <CardMedia
                        sx={ { height: 240 } }
                        image="https://images.unsplash.com/photo-1543332164-6e82f355badc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZ2h0fGVufDB8fDB8fHww"
                        title="green iguana"
                      />
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur autem reprehenderit odio exercitationem, aspernatur quasi obcaecati voluptatibus alias animi minima ea incidunt quia suscipit corporis possimus eveniet veniam ipsam vitae.
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs={ 4 } data-aos="fade" >
                    <Stack spacing={ 2 } direction={ 'row' } />
                    <Card sx={ { maxWidth: 345 } } className='card2'>
                      <CardMedia
                        sx={ { height: 240 } }
                        image="https://plus.unsplash.com/premium_photo-1673435845920-7dd594ab70f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpZ2h0fGVufDB8fDB8fHww"
                        title="green iguana"
                      />
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur autem reprehenderit odio exercitationem, aspernatur quasi obcaecati voluptatibus alias animi minima ea incidunt quia suscipit corporis possimus eveniet veniam ipsam vitae.
                      </div>
                    </Card>
                  </Grid>

                  <Grid item xs={ 4 } data-aos="fade-left"  >
                    <Card sx={ { maxWidth: 345 } } className='card2'>

                      <CardMedia
                        sx={ { height: 240 } }
                        image="https://images.unsplash.com/photo-1543332164-6e82f355badc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZ2h0fGVufDB8fDB8fHww"
                        title="green iguana"
                      />
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur autem reprehenderit odio exercitationem, aspernatur quasi obcaecati voluptatibus alias animi minima ea incidunt quia suscipit corporis possimus eveniet veniam ipsam vitae.
                      </div>
                    </Card>
                    <Stack />
                  </Grid>
                </Grid>
              </div>
            </section>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
