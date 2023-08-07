'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
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
import flashSaleBanner from './Assets/Images/flashSaleBanner.png'

import Image from 'next/image';
// material UI icons
import * as MuiIcons from '@mui/icons-material';

// styles
import useStyles from './HomePage.Styles';

// Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Header from './Header';
import Footer from './Footer';
import ProductCard from './Card/Card';
import '@splidejs/react-splide/css';

export default function Home() {
  const Icons: any = MuiIcons;
  const { classes } = useStyles();

  const [hover, setHover] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
    setHover(!hover)
  };

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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                    <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}>
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
                <Card  sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}>
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
                <Card  sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}>
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
                <Card sx={{ maxWidth: 345 }} onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}>
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
        <Box className={classes.flashSale}>
          <ProductCard />
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  )
}
