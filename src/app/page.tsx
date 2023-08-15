'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

// Images
import Designer from './Assets/Images/theDesigner.jpg';
import Design1 from './Assets/Images/design1.jpg';
import Design2 from './Assets/Images/design2.jpg';
import Design3 from './Assets/Images/design3.jpg';
import HoodyMen from './Assets/Images/hoody.jpg';
import best2 from './Assets/Images/best2.jpg';
import best3 from './Assets/Images/best3.jpg';
import best4 from './Assets/Images/best4.jpg';
import best5 from './Assets/Images/best5.jpg';
import best6 from './Assets/Images/best6.jpg';
import best7 from './Assets/Images/best7.jpg';
import flashSaleBanner from './Assets/Images/flashSaleBanner.png';
import buyNow from './Assets/Images/BuyNow.png';
import newTrendG from './Assets/Images/newTrendG.jpg';
import newTrendM from './Assets/Images/newTrendM.jpg';
import vote1 from './Assets/Images/vote1.jpg';
import tiktok from './Assets/Images/tiktok.jpg';
import tiktokIcon from './Assets/Images/tiktokb.png';
import instagram from './Assets/Images/insta.jpg';
import facebook from './Assets/Images/facebook.jpg'


import Image from 'next/image';
import Link from 'next/link';
// material UI icons
import * as MuiIcons from '@mui/icons-material';

// styles
import useStyles from './HomePage.Styles';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

// static Data
import flashSaleSliders from './Assets/StaticData/FlashSale.json';
import votesData from './Assets/StaticData/Vote.json'

// Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Header from './Header';
import Footer from './Footer';
import CustomizedProgressBars from './Progress/Progress';
import ProductCard from './Card/Card';
import '@splidejs/react-splide/css';

export default function Home() {
  const Icons: any = MuiIcons;
  const { classes } = useStyles();

  const [hover, setHover] = useState(false);

  const [votes, setVotes] = useState(votesData)
  const handleMouseOverVote = (id: number) => {
    setVotes(prev => prev.map(x => {
      if (x.id == id) x.isMouseOver = true;
      return x;
    }));
  }
  const handleMouseOutVote = (id: number) => {
    setVotes(prev => prev.map(x => {
      if (x.id == id) x.isMouseOver = false;
      return x;
    }));
  }

 

  function Heading() {
    return (
      <Box className={classes.hoverBox}>
        <Box style={{ width:'100%', color:'white'}}>
        <CustomizedProgressBars/>
        </Box>
      </Box>
    );
  }

 


  const flashSaleImages: any = [
    { key: '01', value: HoodyMen }, { key: '02', value: best2 }, { key: '03', value: best3 }
  ]

  return (
    <React.Fragment>

      <Header></Header>

      <Box className="flex  flex-col items-center justify-between">
        <Box className={classes.container} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box className={classes.theDesigner} style={{ backgroundImage: `url(${Designer.src})`, backgroundSize: 'cover' }}>
            <Box className={classes.designerContent}>
              <Typography variant='h6'>The designer</Typography>
              <Typography>craft your own outfit</Typography>
            </Box>
          </Box>
          <Box className={classes.picturaDesigns} >
            <Box >
              <Link href='/PicturaDesigns'>
              <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: true, speed: 1000, pagination: false }}>
                <SplideSlide>
                  <Image src={Design1} alt='pictura designs' />
                </SplideSlide>
                <SplideSlide>
                  <Image src={Design2} alt='pictura designs' />
                </SplideSlide>
                <SplideSlide>
                  <Image src={Design3} alt='pictura designs' />
                </SplideSlide>
              </Splide>
              </Link>
            </Box>
            <Box className={classes.picturaContent}>
              <Typography variant='h6'>PICTURA designs</Typography>
              <Typography>choose from our iconic designs</Typography>
            </Box>
          </Box>
        </Box>

        {/* mobile view */}

        <Box className={classes.container} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box className={classes.theDesigner} style={{ backgroundImage: `url(${Designer.src})`, backgroundSize: 'cover' }}>
            <Box className={classes.designerContent}>
              <Typography variant='h6'>The designer</Typography>
              <Typography>craft your own outfit</Typography>
            </Box>
          </Box>
          <Box className={classes.picturaDesigns} >
            <Box>
              <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: true, speed: 1000, pagination: false }}>
                <SplideSlide>
                  <Image src={Design1} alt='pictura designs' />
                </SplideSlide>
                <SplideSlide>
                  <Image src={Design2} alt='pictura designs' />
                </SplideSlide>
                <SplideSlide>
                  <Image src={Design3} alt='pictura designs' />
                </SplideSlide>
              </Splide>
            </Box>
            <Box className={classes.picturaContent}>
              <Typography variant='h6'>PICTURA designs</Typography>
              <Typography>choose from our iconic designs</Typography>
            </Box>
          </Box>
        </Box>

        {/* best seller */}

        <Box className={classes.bestSellerContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box className={classes.title}>
            <Typography variant='h4'>Best Seller</Typography>
          </Box>

          {/* slider */}
          <Box className={classes.slider}>
            <Splide options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
              <SplideSlide>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}
                    >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best2.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best3.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best4.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best5.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best6.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best7.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </SplideSlide>
              <SplideSlide>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best7.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best3.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best5.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best4.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best2.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={3} lg={3}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best6.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </SplideSlide>
            </Splide>
          </Box>
        </Box>

        {/* Mobile view */}

        <Box className={classes.bestSellerContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Box className={classes.title}>
            Best Seller
          </Box>
          <Box className={classes.slider}>
            <Splide className={classes.slider} options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
              <SplideSlide className={classes.sliderCard}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    sx={{ height: 220 }}
                    image={best6.src}
                    title="product image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                      cool oversize short sleeve T-Shirt
                    </Typography>
                    <Box className={classes.cardFooter}>
                      <Typography color="text.secondary">T-Shirt</Typography>
                      <Typography>300 EGP</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SplideSlide>
              <SplideSlide className={classes.sliderCard}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    sx={{ height: 220 }}
                    image={best5.src}
                    title="product image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                      cool oversize short sleeve T-Shirt
                    </Typography>
                    <Box className={classes.cardFooter}>
                      <Typography color="text.secondary">T-Shirt</Typography>
                      <Typography>300 EGP</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SplideSlide>
              <SplideSlide className={classes.sliderCard}>
                <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    sx={{ height: 220 }}
                    image={best4.src}
                    title="product image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                      cool oversize short sleeve T-Shirt
                    </Typography>
                    <Box className={classes.cardFooter}>
                      <Typography color="text.secondary">T-Shirt</Typography>
                      <Typography>300 EGP</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </SplideSlide>

            </Splide>
          </Box>
        </Box>

        {/* flash sale section */}
        <Box className={classes.flashSaleImage}>
          <Image src={flashSaleBanner} alt='flash sale' />
        </Box>

        {/* flash sale slider */}
        <Box className={classes.flashSaleContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box className={classes.sliderFlashSale}>
            <Splide options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
              <SplideSlide>
                <Grid container spacing={2} sx={{ mt: 0 }}>
                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best2.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best3.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </SplideSlide>
              <SplideSlide>
                <Grid container spacing={2} sx={{ mt: 0 }}>
                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best7.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={best3.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={HoodyMen.src}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          cool oversize short sleeve T-Shirt
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">T-Shirt</Typography>
                          <Typography>300 EGP</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </SplideSlide>
            </Splide>
          </Box>
          <Box className={classes.buyNow}>
            <Button className={classes.buyNowBtn}><Image src={buyNow} alt='flash sale button' width={200} height={80} /> </Button>
          </Box>
        </Box>
      </Box>

      {/* Mobile view */}

      <Box className={classes.bestSellerContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box className={classes.slider}>
          <Splide className={classes.slider} options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
            <SplideSlide className={classes.sliderCard}>
              <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 220 }}
                  image={best6.src}
                  title="product image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                    cool oversize short sleeve T-Shirt
                  </Typography>
                  <Box className={classes.cardFooter}>
                    <Typography color="text.secondary">T-Shirt</Typography>
                    <Typography>300 EGP</Typography>
                  </Box>
                </CardContent>
              </Card>
            </SplideSlide>
            <SplideSlide className={classes.sliderCard}>
              <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 220 }}
                  image={best5.src}
                  title="product image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                    cool oversize short sleeve T-Shirt
                  </Typography>
                  <Box className={classes.cardFooter}>
                    <Typography color="text.secondary">T-Shirt</Typography>
                    <Typography>300 EGP</Typography>
                  </Box>
                </CardContent>
              </Card>
            </SplideSlide>
            <SplideSlide className={classes.sliderCard}>
              <Card sx={{ maxWidth: 345 }} >
                <CardMedia
                  sx={{ height: 220 }}
                  image={best4.src}
                  title="product image"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                    cool oversize short sleeve T-Shirt
                  </Typography>
                  <Box className={classes.cardFooter}>
                    <Typography color="text.secondary">T-Shirt</Typography>
                    <Typography>300 EGP</Typography>
                  </Box>
                </CardContent>
              </Card>
            </SplideSlide>

          </Splide>
        </Box>
      </Box>
      {/* New Trends Section */}
      <Box className={classes.newTrendsContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box className={classes.newTrendsCard}>
          <Card>
            <CardMedia sx={{ height: '100vh' }}
              image={newTrendG.src}
              title="product image" />
          </Card>
        </Box>
        <Box className={classes.newTrendsCard}>
          <Card>
            <CardMedia sx={{ height: '100vh' }}
              image={newTrendM.src}
              title="product image" />
          </Card>
        </Box>
        <Box className={classes.newTrendAbs}>
          <Typography variant='h5'>New Trends</Typography>
          <Box className={classes.newTrendAbsBtnContainer}>
            <Button className={classes.newTrendButton}>Shop Now</Button>
          </Box>
        </Box>
      </Box>
      {/* Mobile view */}
      <Box className={classes.newTrendsContainerMobile} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box className={classes.newTrendCardMobile}>
          <Card>
            <CardMedia sx={{ width: '300px', height: '50vh' }}
              image={newTrendM.src}
              title="product image" />
          </Card>
        </Box>
        <Box className={classes.newTrendCardBtnContainer}>
          <Typography variant='h6'>New Trends</Typography>
          <Button className={classes.newTrendBtn}>Shop Now</Button>
        </Box>
        <Box className={classes.newTrendCardMobile}>
          <Card>
            <CardMedia sx={{ width: '300px', height: '50vh' }}
              image={newTrendG.src}
              title="product image" />
          </Card>
        </Box>
      </Box>

      {/* vote & win section */}
      <Box className={classes.voteContainer}>
        <Typography variant='h6'>Vote & Win</Typography>
        <Typography>Choose The Best Design And Get A 5% Discount On Your Next Purchase For A Month.</Typography>
      </Box>
      <Box className={classes.voteCardsContainer}>
        {votes.map(vote => {
          return (
            <Box key={vote.id} onMouseOver={e => handleMouseOverVote(vote.id)} onMouseOut={e => handleMouseOutVote(vote.id)} className={classes.voteBox}>
              <Image src={vote1} alt='vote & win first design' />
              {vote.isMouseOver && <Heading />}
            </Box>
          )
        })}
      </Box>

      {/* follow on social media */}

      <Box className={classes.socialMediaContainer}>
        <Typography variant='h6'>Follow Products & Discounts On Social Media</Typography>
      </Box>
      <Box className={classes.socialCardsContainer}>
        <Box className={classes.socialCard}>
          <Link href="https://www.tiktok.com/">
            <Image src={tiktok} alt='pictura tiktok account' />
            <Box className={classes.socialTiktok} >
              <Image src={tiktokIcon} width={40} height={40} alt="Pictura Tiktok account" />
            </Box>
          </Link>
        </Box>
        <Box className={classes.socialCard}>
          <Link href="https://www.instagram.com/">
            <Image src={instagram} alt='pictura instagram account' />
            <Box className={classes.socialIcon}>
              <Icons.Instagram style={{ fontSize: '2.5rem' }}></Icons.Instagram>
            </Box>
          </Link>
        </Box>
        <Box className={classes.socialCard}>
          <Link href="https://www.facebook.com/">
            <Image src={facebook} alt='pictura facebook account' />
            <Box className={classes.socialIcon}>
              <Icons.Facebook style={{ fontSize: '2.5rem' }}></Icons.Facebook>
            </Box>
          </Link>
        </Box>
      </Box>

      <Footer />
    </React.Fragment>
  )
}
