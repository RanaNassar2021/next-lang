'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import AlertAddToFav from "@/app/AlertAddToFav/page";
import AlertRemovedFromFav from "@/app/AlertRemovedFromFav/page";
import ImagesCard from "./Card/page";
import { CookiesProvider, useCookies } from "react-cookie";
import LocalMallIcon from '@mui/icons-material/LocalMall';

// SSR and TSS



// Images
import Designer from './Assets/Images/theDesigner.jpg';
import Design1 from './Assets/Images/design1.jpg';
import Design2 from './Assets/Images/design2.jpg';
import Design3 from './Assets/Images/design3.jpg';
import flashSaleBanner from './Assets/Images/flashSaleBanner.png';
import flashSale from './Assets/Images/flashSale.png';
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

  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies(["Product"]);
  const [token, SetToken] = useState(localStorage.getItem("Token"));
  const [flashSale, setFlashSale] = useState<any>([]);
  const [bestSeller, setBestSeller] = useState<any>([]);

  useEffect(() => {
    SetToken(localStorage.getItem("Token"));
  }, [localStorage.getItem("Token")])

  const handleMouseOver = (id: any, index: any) => {
    setBestSeller((prev: any) => prev.map((item: any, indexPrev: any) => {
      if (item.productId == id && index == indexPrev) {
        item.isMouseOver = true;
        item.hoverImage = true;
      }
      return item
    }));
    setFlashSale((prev: any) => prev.map((item: any, indexPrev: any) => {
      if (item.productId == id && index == indexPrev) {
        item.isMouseOver = true;
        item.hoverImage = true;
      }
      return item
    }))
  }
  const handleMouseOut = (id: any, index: any) => {
    setBestSeller((prev: any) => prev.map((item: any, indexPrev: any) => {
      if (item.productId == id && index == indexPrev) {
        item.isMouseOver = false;
        item.hoverImage = false;
      }
      return item
    }));
    setFlashSale((prev: any) => prev.map((item: any, indexPrev: any) => {
      if (item.productId == id && index == indexPrev) {
        item.isMouseOver = false;
        item.hoverImage = false;
      }
      return item
    }))
  }


  const [cart, setCart] = useState(false);



  function handleAddToCart(id: any) {
    setCart(true);
    setBestSeller((prev: any) => prev.map((x: any) => {
      if (x.productId == id && cart == true) x.isClicked = true;
      return x
    }));
    setFlashSale((prev: any) => prev.map((x: any) => {
      if (x.productId == id && cart == true) x.isClicked = true;
      return x
    }))
  };


  {/* Alerts */ }
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  interface State extends SnackbarOrigin {
    openTop: boolean;
  }
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<State>({
    openTop: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openTop } = state;

  interface StateFavs extends SnackbarOrigin {
    openTopFav: boolean;
  }
  const [isFavourite, setIsFavourite] = useState<any>(false);
  const [openFav, setOpenFav] = React.useState(false);
  const [stateFav, setStateFav] = React.useState<StateFavs>({
    openTopFav: false,
    vertical: 'top',
    horizontal: 'right',
  })


  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setState({ ...state, openTop: false });
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseAlertFav = (event?: React.SyntheticEvent | Event, reason?: string) => {
    setStateFav({ ...stateFav, openTopFav: false });
    if (reason === 'clickaway') {
      return;
    }

    setOpenFav(false);
  };

  interface AddToCartInrerface {
    ProductId: string;
    ColorId: number;
    SizeId: number;
  }

  const addToCart = (addToCart: AddToCartInrerface, newState: SnackbarOrigin) => {
    let body = {
      productId: addToCart.ProductId,
      colorId: addToCart.ColorId,
      sizeId: addToCart.SizeId
    }
    const Config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    }
    if (!!token) {
      Axios.post(`${process.env.apiUrl}` + `Product/AddCart`, body, Config).then((res) => {
        console.log(res);
        setState({ ...newState, openTop: true });
        setOpen(true)
      })
    } else {
      if (cookies.Product?.filter((item: any) => item.ProductId === addToCart.ProductId).length == 0 || cookies.Product?.filter((item: any) => item.ProductId === addToCart.ProductId).length == undefined) {
        const myArray = cookies.Product || [];
        let updatedArray = [...myArray, addToCart]
        setState({ ...newState, openTop: true });
        setOpen(true)
        setCookie('Product', updatedArray, { path: '/' });

      } else {
        return null;
      }
    }

  }
  console.log(cookies.Product || []);


  interface AddToFavouriteInrerface {
    ProductId: string;
    ColorId: number;
  }

  const AddToFavourite = (AddToFavourite: AddToFavouriteInrerface, newState: SnackbarOrigin) => {
    let body = {
      productId: AddToFavourite.ProductId,
      colorId: AddToFavourite.ColorId,
    }
    const Config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    }
    Axios.post(`${process.env.apiUrl}` + `Product/ChangeFaviorate`, body, Config).then((res) => {
      console.log(res);
      if (res.data == "Saved Successfully") {
        setIsFavourite(true);
        setStateFav({ ...newState, openTopFav: true });
        setOpenFav(true)
      } else {
        console.log("removed")
        setIsFavourite(false);
        setStateFav({ ...newState, openTopFav: false });
        setOpenFav(true)
      }
    })
  }

  // useEffect(()=>{
  //   Axios.get(`${process.env.apiUrl}` + `Tag/GetFalshSaleProducts?PageNumber=1&PageSize=10`)
  //   .then((res) => {setFlashSale(res.flashSale)}
  //   ).catch(err => console.log( 'Error fetching flash Sale data',err))
  // },[])

  const fetchFlashSale = async () => {
    const response = await Axios.get(`${process.env.apiUrl}` + `Tag/GetFalshSaleProducts?PageNumber=1&PageSize=10`);
    const data = response.data
    setFlashSale(data);
  }

  const fetchBestSeller = async () => {
    const response = await Axios.get(`${process.env.apiUrl}` + `Tag/GetBestSellerProducts?PageNumber=1&PageSize=16`);
    const data = response.data;
    setBestSeller(data);

  }

  useEffect(() => {
    fetchFlashSale();
    fetchBestSeller();
  }, [])





  const [openVote, setOpenVote] = React.useState(false);
  const handleClickOpen = () => {
    setOpenVote(true);
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
          <Box className={classes.picturaDesigns}>
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
          <Box className={classes.theDesignerMob} style={{ backgroundImage: `url(${Designer.src})`, backgroundSize: 'cover' }}>
            <Box className={classes.theDesignerContentMob}>
              <Typography variant='h6'>The Designer</Typography>
              <Typography>Craft Your Own Outfit</Typography>
            </Box>
          </Box>
          <Box className={classes.picturaMob}>
            <Box>
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

            <Box className={classes.picturaContentMob}>
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
          </Box>
          
          {/* best seller slider map using grid */}
          <Box className={classes.BestSellerContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box>
              <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 3000, pagination: false, gap: '1rem', perPage: 4 }} style={{ width: '100%' }}>
                {
                  bestSeller?.map((bestSeller: any, index: number) => {
                    if (index <= 16) {
                      return (
                        <SplideSlide key={index}>
                            <Card key={index}  style={{ width: '230px' }} onMouseOver={e => handleMouseOver(bestSeller.productId, index)} onMouseOut={e => handleMouseOut(bestSeller.productId, index)}>
                              {bestSeller.hoverImage ? (
                                <Box>
                                  <Link href={'/cardDetails/' + bestSeller.productId + "/" + bestSeller.colorId}>
                                    <Box className={classes.productDetailsLink}></Box>
                                  </Link>
                                  <ImagesCard images={bestSeller?.images}></ImagesCard>
                                </Box>

                              ) : (
                                <Box className={classes.cardImage}>
                                  <Image src={bestSeller.images[0]} alt="product picture" unoptimized height={250} width={270} />
                                </Box>
                              )}

                              {bestSeller.isMouseOver ? (<Box className={classes.hoverBox}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  {isFavourite || bestSeller?.isFavorite ?
                                    <Box>
                                      <Icons.Favorite sx={{ color: 'red' }} onClick={() => AddToFavourite({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId }, { vertical: 'top', horizontal: 'right' })}></Icons.Favorite>
                                      <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                        <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                          <AlertAddToFav />
                                        </Alert>
                                      </Snackbar>
                                    </Box> :
                                    <Box>
                                      <Icons.FavoriteBorder onClick={() => AddToFavourite({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId }, { vertical: 'top', horizontal: 'right' })} />
                                      <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                        <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                          <AlertRemovedFromFav />
                                        </Alert>
                                      </Snackbar>
                                    </Box>}
                                </Box>
                                <Box>
                                  {bestSeller.isClicked ?
                                    (
                                      <Box className={classes.sizes}>
                                        {bestSeller.sizes.map((siz: any, index: any) => {
                                          return (
                                            <Box key={index}>
                                              <Box className={classes.sizeBox} key={siz.sizeId} onClick={() => addToCart({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId, SizeId: siz.sizeId }, { vertical: 'top', horizontal: 'right' })} >
                                                {siz.name}
                                              </Box>
                                              <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                  product added succussfully to Cart
                                                </Alert>
                                              </Snackbar>
                                            </Box>
                                          )
                                        })}
                                      </Box>
                                    )
                                    : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(bestSeller.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                  }

                                </Box>
                              </Box>) : null}

                              {bestSeller.onlyFewLeft ? (
                                <Box className={classes.fewLeftBox}>
                                  <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                                </Box>
                              ) : null}

                              {bestSeller.isSale ? (
                                <Box>
                                  <Box className={classes.saleBox}>
                                    <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                  </Box>
                                  <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                      {bestSeller.title}
                                    </Typography>
                                    <Box className={classes.cardFooter}>
                                      <Typography color="text.secondary">{bestSeller.category}</Typography>
                                      <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <Typography sx={{ opacity: 0.8, textDecoration: 'line-through' }}>{bestSeller.orginalPrice}</Typography>
                                        <Typography sx={{ color: '#EA4335' }}>{bestSeller.currentPrice}</Typography>
                                      </Box>
                                    </Box>
                                  </CardContent>
                                </Box>
                              ) : <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                  {bestSeller.title}
                                </Typography>
                                <Box className={classes.cardFooter}>
                                  <Typography color="text.secondary">{bestSeller.category}</Typography>
                                  <Typography>{bestSeller.orginalPrice}</Typography>
                                </Box>
                              </CardContent>}
                            </Card>
                        </SplideSlide>
                      )
                    }
                  })
                }
              </Splide>
            </Box>
          </Box>
        
        

        {/* Mobile view */}

        <Box className={classes.bestSellerContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Divider style={{ paddingTop: 20 }}></Divider>
          <Box className={classes.title}>
            Best Seller
          </Box>
          <Box className={classes.slider}>
            <Splide className={classes.slider} options={{ type: 'loop', autoWidth: false, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
            {
                bestSeller?.map((bestSeller: any, index: number) => {
                  if (index <= 6) {
                    return (
                      <SplideSlide key={index} >
                        <Box style={{ display:'flex', justifyContent:'center' }}>
                          <Card key={index} className={classes.flashSaleCard} onMouseOver={e => handleMouseOver(bestSeller.productId, index)} onMouseOut={e => handleMouseOut(bestSeller.productId, index)}>
                            {bestSeller.hoverImage ? (
                              <Box>
                                <Link href={'/cardDetails/' + bestSeller.productId + "/" + bestSeller.colorId}>
                                  <Box className={classes.productDetailsLink}></Box>
                                </Link>
                                <ImagesCard images={bestSeller?.images}></ImagesCard>
                              </Box>

                            ) : (
                              <Box className={classes.cardImage}>
                                <Image  src={bestSeller.images[0]} alt="product picture"  height={260} width={270} />
                              </Box>
                            )}

                            {bestSeller.isMouseOver ? (<Box className={classes.hoverBox}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {isFavourite || bestSeller?.isFavorite ?
                                  <Box>
                                    <Icons.Favorite sx={{ color: 'red' }} onClick={() => AddToFavourite({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId }, { vertical: 'top', horizontal: 'right' })}></Icons.Favorite>
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                        <AlertAddToFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box> :
                                  <Box>
                                    <Icons.FavoriteBorder onClick={() => AddToFavourite({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId }, { vertical: 'top', horizontal: 'right' })} />
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                        <AlertRemovedFromFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box>}
                              </Box>
                              <Box>
                                {bestSeller.isClicked ?
                                  (
                                    <Box className={classes.sizes}>
                                      {bestSeller.sizes.map((siz: any, index: any) => {
                                        return (
                                          <Box key={index}>
                                            <Box className={classes.sizeBox} key={siz.sizeId} onClick={() => addToCart({ ProductId: bestSeller.productId, ColorId: bestSeller.colorId, SizeId: siz.sizeId }, { vertical: 'top', horizontal: 'right' })} >
                                              {siz.name}
                                            </Box>
                                            <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                              <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                product added succussfully to Cart
                                              </Alert>
                                            </Snackbar>
                                          </Box>
                                        )
                                      })}
                                    </Box>
                                  )
                                  : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(bestSeller.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                }

                              </Box>
                            </Box>) : null}

                            {bestSeller.onlyFewLeft ? (
                              <Box className={classes.fewLeftBox}>
                                <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                              </Box>
                            ) : null}

                            {bestSeller.isSale ? (
                              <Box>
                                <Box className={classes.saleBox}>
                                  <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                </Box>
                                <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                    {bestSeller.title}
                                  </Typography>
                                  <Box className={classes.cardFooter}>
                                    <Typography color="text.secondary">{bestSeller.category}</Typography>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                      <Typography sx={{ opacity: 0.8, textDecoration: 'line-through' }}>{bestSeller.orginalPrice}</Typography>
                                      <Typography sx={{ color: '#EA4335' }}>{bestSeller.currentPrice}</Typography>
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Box>
                            ) : <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                {bestSeller.title}
                              </Typography>
                              <Box className={classes.cardFooter}>
                                <Typography color="text.secondary">{bestSeller.category}</Typography>
                                <Typography>{bestSeller.orginalPrice}</Typography>
                              </Box>
                            </CardContent>}
                          </Card>
                        </Box>
                      </SplideSlide>
                    )
                  }
                })
              }
            </Splide>
          </Box>
        </Box>

        {/* flash sale section */}
        <Box className={classes.flashSaleImage}>
          <Image src={flashSaleBanner} alt='flash sale' />
        </Box>

        {/* flash sale map */}
        <Box className={classes.flashSaleContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box className={''}>
            <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 3000, pagination: false, gap: '1rem', perPage: 3 }} style={{ width: '100%' }}>
              {
                flashSale?.map((flashSale: any, index: number) => {
                  if (index <= 6) {
                    return (
                      <SplideSlide key={index}>
                        <Box style={{ display: 'flex', gap: 25 }}>
                          <Card key={index} className={classes.flashSaleCard} onMouseOver={e => handleMouseOver(flashSale.productId, index)} onMouseOut={e => handleMouseOut(flashSale.productId, index)}>
                            {flashSale.hoverImage ? (
                              <Box>
                                <Link href={'/cardDetails/' + flashSale.productId + "/" + flashSale.colorId}>
                                  <Box className={classes.productDetailsLink}></Box>
                                </Link>
                                <ImagesCard images={flashSale?.images}></ImagesCard>
                              </Box>

                            ) : (
                              <Box className={classes.cardImage}>
                                <Image src={flashSale.images[0]} alt="product picture" unoptimized height={250} width={270} />
                              </Box>
                            )}

                            {flashSale.isMouseOver ? (<Box className={classes.hoverBox}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {isFavourite || flashSale?.isFavorite ?
                                  <Box>
                                    <Icons.Favorite sx={{ color: 'red' }} onClick={() => AddToFavourite({ ProductId: flashSale.productId, ColorId: flashSale.colorId }, { vertical: 'top', horizontal: 'right' })}></Icons.Favorite>
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                        <AlertAddToFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box> :
                                  <Box>
                                    <Icons.FavoriteBorder onClick={() => AddToFavourite({ ProductId: flashSale.productId, ColorId: flashSale.colorId }, { vertical: 'top', horizontal: 'right' })} />
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                        <AlertRemovedFromFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box>}
                              </Box>
                              <Box>
                                {flashSale.isClicked ?
                                  (
                                    <Box className={classes.sizes}>
                                      {flashSale.sizes.map((siz: any, index: any) => {
                                        return (
                                          <Box key={index}>
                                            <Box className={classes.sizeBox} key={siz.sizeId} onClick={() => addToCart({ ProductId: flashSale.productId, ColorId: flashSale.colorId, SizeId: siz.sizeId }, { vertical: 'top', horizontal: 'right' })} >
                                              {siz.name}
                                            </Box>
                                            <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                              <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                product added succussfully to Cart
                                              </Alert>
                                            </Snackbar>
                                          </Box>
                                        )
                                      })}
                                    </Box>
                                  )
                                  : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(flashSale.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                }

                              </Box>
                            </Box>) : null}

                            {flashSale.onlyFewLeft ? (
                              <Box className={classes.fewLeftBox}>
                                <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                              </Box>
                            ) : null}

                            {flashSale.isSale ? (
                              <Box>
                                <Box className={classes.saleBox}>
                                  <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                </Box>
                                <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                    {flashSale.title}
                                  </Typography>
                                  <Box className={classes.cardFooter}>
                                    <Typography color="text.secondary">{flashSale.category}</Typography>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                      <Typography sx={{ opacity: 0.8, textDecoration: 'line-through' }}>{flashSale.orginalPrice}</Typography>
                                      <Typography sx={{ color: '#EA4335' }}>{flashSale.currentPrice}</Typography>
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Box>
                            ) : <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                {flashSale.title}
                              </Typography>
                              <Box className={classes.cardFooter}>
                                <Typography color="text.secondary">{flashSale.category}</Typography>
                                <Typography>{flashSale.orginalPrice}</Typography>
                              </Box>
                            </CardContent>}
                          </Card>
                        </Box>
                      </SplideSlide>
                    )
                  }
                })
              }
            </Splide>
          </Box>
          <Box className={classes.buyNow}>
            <Link href="/FlashSale">
              <Button className={classes.buyNowBtn}><Image src={buyNow} alt='flash sale button' width={200} height={80} /> </Button>
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Mobile view */}

      <Box className={classes.flashSaleContainer} sx={{ display: { xs: 'flex', md: 'none' } }}>
       <Box sx={{ paddingTop:'2ch',paddingBottom:'2ch'}}>
        <Image src={flashSaleBanner} 
          layout='resposive'
          alt="Pictura flashsale page" />
          </Box>
        <Box>
          <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, speed: 2000, pagination: false }}>
          {
                flashSale?.map((flashSale: any, index: number) => {
                  if (index <= 6) {
                    return (
                      <SplideSlide key={index} >
                        <Box style={{ display: 'flex', justifyContent:'center', marginLeft:'2ch' }}>
                          <Card key={index} className={classes.flashSaleCard} onMouseOver={e => handleMouseOver(flashSale.productId, index)} onMouseOut={e => handleMouseOut(flashSale.productId, index)}>
                            {flashSale.hoverImage ? (
                              <Box>
                                <Link href={'/cardDetails/' + flashSale.productId + "/" + flashSale.colorId}>
                                  <Box className={classes.productDetailsLink}></Box>
                                </Link>
                                <ImagesCard images={flashSale?.images}></ImagesCard>
                              </Box>

                            ) : (
                              <Box className={classes.cardImage}>
                                <Image  src={flashSale.images[0]} alt="product picture" unoptimized height={260} width={270} />
                              </Box>
                            )}

                            {flashSale.isMouseOver ? (<Box className={classes.hoverBox}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {isFavourite || flashSale?.isFavorite ?
                                  <Box>
                                    <Icons.Favorite sx={{ color: 'red' }} onClick={() => AddToFavourite({ ProductId: flashSale.productId, ColorId: flashSale.colorId }, { vertical: 'top', horizontal: 'right' })}></Icons.Favorite>
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                        <AlertAddToFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box> :
                                  <Box>
                                    <Icons.FavoriteBorder onClick={() => AddToFavourite({ ProductId: flashSale.productId, ColorId: flashSale.colorId }, { vertical: 'top', horizontal: 'right' })} />
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                      <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                        <AlertRemovedFromFav />
                                      </Alert>
                                    </Snackbar>
                                  </Box>}
                              </Box>
                              <Box>
                                {flashSale.isClicked ?
                                  (
                                    <Box className={classes.sizes}>
                                      {flashSale.sizes.map((siz: any, index: any) => {
                                        return (
                                          <Box key={index}>
                                            <Box className={classes.sizeBox} key={siz.sizeId} onClick={() => addToCart({ ProductId: flashSale.productId, ColorId: flashSale.colorId, SizeId: siz.sizeId }, { vertical: 'top', horizontal: 'right' })} >
                                              {siz.name}
                                            </Box>
                                            <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                              <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                product added succussfully to Cart
                                              </Alert>
                                            </Snackbar>
                                          </Box>
                                        )
                                      })}
                                    </Box>
                                  )
                                  : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(flashSale.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                }

                              </Box>
                            </Box>) : null}

                            {flashSale.onlyFewLeft ? (
                              <Box className={classes.fewLeftBox}>
                                <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                              </Box>
                            ) : null}

                            {flashSale.isSale ? (
                              <Box>
                                <Box className={classes.saleBox}>
                                  <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                </Box>
                                <CardContent className={classes.cardContent}>
                                  <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                    {flashSale.title}
                                  </Typography>
                                  <Box className={classes.cardFooter}>
                                    <Typography color="text.secondary">{flashSale.category}</Typography>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                      <Typography sx={{ opacity: 0.8, textDecoration: 'line-through' }}>{flashSale.orginalPrice}</Typography>
                                      <Typography sx={{ color: '#EA4335' }}>{flashSale.currentPrice}</Typography>
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Box>
                            ) : <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                {flashSale.title}
                              </Typography>
                              <Box className={classes.cardFooter}>
                                <Typography color="text.secondary">{flashSale.category}</Typography>
                                <Typography>{flashSale.orginalPrice}</Typography>
                              </Box>
                            </CardContent>}
                          </Card>
                        </Box>
                      </SplideSlide>
                    )
                  }
                })
              }
          </Splide>
        </Box>
        <Box className={classes.buyNow}>
          <Link href="/FlashSale">
            <Button className={classes.buyNowBtn}><Image src={buyNow} alt='flash sale button' width={150} height={20} /> </Button>
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
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className={classes.voteContainer} id="VoteWin">
          <Typography variant='h6'>Vote & Win</Typography>
          <Typography>Choose The Best Design And Get A 5% Discount On Your Next Purchase For A Month.</Typography>
        </Box>
        <Box className={classes.voteCardsContainer}>
          {votes.map(vote => {
            return (
              <Box key={vote.id} className={classes.voteBox} onClick={handleClickOpen}>
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
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
