'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Divider, Dialog , DialogActions, DialogContent, DialogContentText , DialogTitle, } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

// Images
import Designer from './Assets/Images/theDesigner.jpg';
import Design1 from './Assets/Images/design1.jpg';
import Design2 from './Assets/Images/design2.jpg';
import Design3 from './Assets/Images/design3.jpg';
import flashSaleBanner from './Assets/Images/flashSaleBanner.png';
import buyNow from './Assets/Images/BuyNow.png';
import newTrendG from './Assets/Images/newTrendG.jpg';
import newTrendM from './Assets/Images/newTrendM.jpg';
import tiktok from './Assets/Images/tiktok.jpg';
import tiktokIcon from './Assets/Images/tiktokb.png';
import instagram from './Assets/Images/insta.jpg';
import facebook from './Assets/Images/facebook.jpg';
import redShirt from './Assets/Images/best4.jpg'


import Image from 'next/image';
import Link from 'next/link';
// material UI icons
import * as MuiIcons from '@mui/icons-material';

// styles
import useStyles from './HomePage.Styles';


// static Data
import flashSaleData from './Assets/StaticData/FlashSale.json';
import bestSellerData from './Assets/StaticData/BestSeller.json';
import votesData from './Assets/StaticData/Vote.json'

// Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Header from './Header';
import Footer from './Footer';
import CustomizedProgressBars from './Progress/Progress';
import '@splidejs/react-splide/css';

//Axios
import Axios from 'axios';



// Vote & Win Registeration check

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
  const Icons: any = MuiIcons;
  const { classes } = useStyles();

  const [flashData, setFlashData] = useState<{ userId: number ;id: number; title: string; body: string }[]>([]);

  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setFlashData(res.data)
    ).catch(err => console.log( 'Error fetching flash Sale data',err))
  },[])


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


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
        <Box style={{ width: '100%', color: 'white' }}>
          <CustomizedProgressBars />
        </Box>
      </Box>
    );
  }


  return (
    <React.Fragment>
      <Header></Header>
      <Box className="flex  flex-col items-center justify-between">

        {/* The dsigner & Pictura designs */}
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

          {/* best seller slider map using grid */}
          <Box  className={classes.sliderFlashSale}>
          <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 2000, pagination: false }} style={{ width: '100%' }}>
            <SplideSlide>
            <Box   sx={{
                   display: 'grid',
                   gap: 2,
                   gridTemplateColumns: 'repeat(4, 1fr)',
                      }}>
              {bestSellerData.map(bestSeller =>{
                return(
                  <Card key={bestSeller.id} style={{ width: '230px' }}>
                  <CardMedia
                    sx={{ height: 220 }}
                    image={bestSeller.image}
                    title="product image"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                      {bestSeller.title}
                    </Typography>
                    <Box className={classes.cardFooter}>
                      <Typography color="text.secondary">{bestSeller.category}</Typography>
                      <Typography>{bestSeller.price}</Typography>
                    </Box>
                  </CardContent>
                </Card>
                )
              })
              }
            </Box>
            </SplideSlide>
          </Splide>
          </Box>
        </Box>

        {/* Mobile view */}

        <Box className={classes.bestSellerContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Divider style={{paddingTop:20}}></Divider>
          <Box className={classes.title}>
            Best Seller
          </Box>
          <Box className={classes.slider}>
            <Splide className={classes.slider} options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
              {bestSellerData.map(bestSeller => {
                return (
                  <SplideSlide className={classes.sliderCard}>
                    <Card sx={{ maxWidth: 345 }} key={bestSeller.id} >
                      <CardMedia
                        sx={{ height: 220 }}
                        image={bestSeller.image}
                        title="product image"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                          {bestSeller.title}
                        </Typography>
                        <Box className={classes.cardFooter}>
                          <Typography color="text.secondary">{bestSeller.category}</Typography>
                          <Typography>{bestSeller.price}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </SplideSlide>
                )
              })}
            </Splide>
          </Box>
        </Box>

        {/* flash sale section */}
        <Box className={classes.flashSaleImage}>
          <Image src={flashSaleBanner} alt='flash sale' />
        </Box>

        {/* flash sale map */}
        <Box className={classes.flashSaleContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box className={classes.sliderFlashSale}>
            <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 3000, pagination: false }} style={{ width: '100%' }}>
              <SplideSlide>
                <Box style={{ display: 'flex', gap: 25 }}>
                  {flashSaleData.map(flashSale => {
                    return (
                      <Card key={flashSale.id} style={{ width: '300px' }}>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={flashSale.images[0]}
                          title="product image"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                            {flashSale.title}
                          </Typography>
                          <Box className={classes.cardFooter}>
                            <Typography color="text.secondary">{flashSale.category}</Typography>
                            <Typography>{flashSale.price}</Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    )
                  })}
                </Box>
              </SplideSlide>
            </Splide>
          </Box>
          <Box className={classes.buyNow}>
            <Link href="/FlashSale">
            <Button className={classes.buyNowBtn}><Image src={buyNow} alt='flash sale button' width={200} height={80} /> </Button>
            </Link>
          </Box>
        </Box>

        {/* flash sale slider */}
      </Box>

      {/* Mobile view */}

      <Box className={classes.flashSaleContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <Box className={classes.sliderFlashSaleMobile}>
          <Splide className={classes.sliderFlashSaleMobile} options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
            {flashSaleData.map(flashSale => {
              return (
                <SplideSlide className={classes.sliderCard}>
                  <Card sx={{ maxWidth: 345 }} key={flashSale.id} >
                    <CardMedia
                      sx={{ height: 220 }}
                      image={flashSale.images[0]}
                      title="product image"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                        {flashSale.title}
                      </Typography>
                      <Box className={classes.cardFooter}>
                        <Typography color="text.secondary">{flashSale.category}</Typography>
                        <Typography>{flashSale.price}</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
        </Box>
        <Box className={classes.buyNow}>
            <Link href="/FlashSale">
            <Button className={classes.buyNowBtn}><Image src={buyNow} alt='flash sale button' width={100} height={20} /> </Button>
            </Link>
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
        <Link href="NewTrends">
          <Typography variant='h5'>New Trends</Typography>
          <Box className={classes.newTrendAbsBtnContainer}>
            <Button className={classes.newTrendButton}>Shop Now</Button>
          </Box>
          </Link>
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
          <Button className={classes.newTrendBtn}> <Link href="/NewTrends"> Shop Now</Link> </Button>
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
      <Box sx={{display:{xs:'none',md:'block'}}}>
      <Box className={classes.voteContainer}  id="VoteWin">
        <Typography variant='h6'>Vote & Win</Typography>
        <Typography>Choose The Best Design And Get A 5% Discount On Your Next Purchase For A Month.</Typography>
      </Box>
      <Box className={classes.voteCardsContainer}>
        {votes.map(vote => {
          return (
            <Box key={vote.id}  className={classes.voteBox} onClick={handleClickOpen}>
              <Image width={200} height={300} src={vote.image} alt='vote & win first design' onMouseOver={e => handleMouseOverVote(vote.id)} onMouseOut={e => handleMouseOutVote(vote.id)} />
              {vote.isMouseOver && <Heading />}
            </Box>
          )
        })}
         <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Vote & Win"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Choose The Best Design And Get A 5% Discount On Your Next Purchase For A Month.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Log In</Button>
          <Button onClick={handleClose}>Sign Up</Button>
        </DialogActions>
      </Dialog>
      </Box>
      </Box>

      {/* Mobile view */}
      <Box sx={{display:{xs:'flex',md:'none'}}}>
        <Box className={classes.voteMobileContainer}>
        <Typography variant='h6'>Vote & Win</Typography>
        <Typography>Choose The Best Design And Get A 5% Discount On Your Next Purchase For A Month.</Typography>
        <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 3000, pagination: false }} style={{ width: '100%' }}>
        
          {votes.map(vote => {
          return (
            <SplideSlide>
            <Box key={vote.id}>
              <Image width={200} height={300} src={vote.image} alt='vote & win first design' onMouseOver={e => handleMouseOverVote(vote.id)} onMouseOut={e => handleMouseOutVote(vote.id)} />
              {vote.isMouseOver && <Heading />}
            </Box>
            </SplideSlide>
          )
        })}
          
        </Splide>
        </Box>
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
