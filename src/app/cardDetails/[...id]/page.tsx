'use client';
import React from "react";
import { Box, Typography, Button, Divider, Toolbar } from "@mui/material";
import Header from "../../Header";
import Footer from "../../Footer";
import ProductDetails from "../../ProductDetails/page";
import ProductDetailsMob from "../../ProductDetailsMob/page";
import Image from "next/image";
import { useParams } from 'next/navigation';


// styles
import useStyles from "../CardDetails.Styles";
import '@splidejs/react-splide/css';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

// Slider
import { Splide, SplideSlide } from '@splidejs/react-splide';

import StickyBox from "react-sticky-box";

// Images
import tshirt1 from '../../Assets/Images/best3.jpg';
import tshirt2 from '../../Assets/Images/newTrendM.jpg';
import tshirt3 from '../../Assets/Images/best6.jpg';
import thsirt4 from '../../Assets/Images/back2.png'


const Images = [tshirt1, tshirt2, tshirt3, thsirt4]

export default function CardDetails() {
    const { classes } = useStyles();
    const params = useParams();
    const Icons: any = MuiIcons;
    console.log(params.id);

    return (
        <React.Fragment>
            <Header ></Header>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Box className={classes.mainContainer}>
                    <Box className={classes.contentLeft}>
                        <Box sx={{ width: '50%' }}>
                            <Image src={tshirt1} alt="t-shirt" layout="responsive" />
                            <Image src={tshirt3} alt="t-shirt" layout="responsive" />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Image src={tshirt2} alt="t-shirt" layout="responsive" />
                            <Image src={thsirt4} alt="t-shirt" layout="responsive" />
                        </Box>

                    </Box>
                    <Box className={classes.contentRight}>
                        <StickyBox>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <Typography variant="h6">
                                    cool BT21 oversize fit short sleeve t-shirt
                                </Typography>
                                <Icons.FavoriteBorder />
                            </Box>
                            <Box>
                                <Typography style={{ marginTop: 20 }}>449.00 EGP</Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography style={{ color: 'red', fontWeight: '600', fontSize: '18px' }}>20% discount 359.00 EGP </Typography>
                                <Icons.Share />
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: '500', marginTop: 20 }}>Design Rate</Typography>
                            </Box>
                            <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Typography>(4.5)</Typography>
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: '500', marginTop: 20 }}>Quality Rate</Typography>
                            </Box>
                            <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Typography>(4.8)</Typography>
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: '600', marginTop: 20 }}>Color </Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <Box style={{
                                    backgroundColor: 'white',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'black',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'red',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'orange',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'yellow',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'green',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'blue',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'blue',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                                <Box style={{
                                    backgroundColor: 'purple',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%'
                                }}>

                                </Box>
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: '600', marginTop: 20 }}>Size </Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>XS</Button>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>S</Button>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>M</Button>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>L</Button>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>XL</Button>
                                <Button style={{ color: 'black', fontWeight: 'bold' }}>2XL</Button>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                                <Button style={{ width: '30ch', backgroundColor: '#EA4335', color: 'white' }}>Add to cart</Button>
                            </Box>
                            <Box style={{ display: 'flex', marginTop: 50 }}>
                                <ProductDetails />
                            </Box>
                            <Divider></Divider>
                            <Toolbar />
                        </StickyBox>
                    </Box>
                </Box>
                <Box className={classes.ratingSectionContainer}>
                    <Typography variant="h6">Ratings & Reviews</Typography>
                    <Box className={classes.ratingSection}>
                        <Box className={classes.commentContent} sx={{ borderRight: 'groove 1px' }}>
                            <Typography sx={{ fontWeight: 500, fontSize: '18px' }}>UserName</Typography>
                            <Divider sx={{ margin: '10px 40px', }}></Divider>
                            <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                <Icons.CheckCircle sx={{ color: 'green' }}></Icons.CheckCircle>
                                <Typography sx={{ color: 'green' }}>verified purchaser</Typography>
                            </Box>
                            <Typography sx={{ marginTop: '10px' }}>Location: Egypt</Typography>
                        </Box>
                        <Box className={classes.commentContent} sx={{ textAlign: 'left' }}>
                            <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.StarBorder />
                                <Typography>(4.0)</Typography>
                            </Box>
                            <Typography sx={{ marginTop: '20px' }}>fluffy, good material. i really recommed it</Typography>
                            <Typography sx={{ marginTop: '10px' }}>sep 9, 2023</Typography>
                        </Box>
                        <Box className={classes.commentContent} sx={{ borderLeft: 'groove 1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button style={{ width: '20ch', backgroundColor: '#778da9', color: 'white' }}>comment</Button>
                        </Box>
                    </Box>

                    <Box className={classes.ratingSection}sx={{marginTop:'20px'}}>
                        <Box className={classes.commentContent} sx={{ borderRight: 'groove 1px' }}>
                            <Typography sx={{ fontWeight: 500, fontSize: '18px' }}>UserName</Typography>
                            <Divider sx={{ margin: '10px 40px', }}></Divider>
                            <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                <Icons.CheckCircle sx={{ color: 'green' }}></Icons.CheckCircle>
                                <Typography sx={{ color: 'green' }}>verified purchaser</Typography>
                            </Box>
                            <Typography sx={{ marginTop: '10px' }}>Location: Egypt</Typography>
                        </Box>
                        <Box className={classes.commentContent} sx={{ textAlign: 'left' }}>
                            <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.Star sx={{ color: '#FFD43B' }} />
                                <Icons.StarBorder />
                                <Icons.StarBorder />
                                <Typography>(3.0)</Typography>
                            </Box>
                            <Typography sx={{ marginTop: '20px' }}> good material, overall good experience </Typography>
                            <Typography sx={{ marginTop: '10px' }}>Aug 5, 2023</Typography>
                        </Box>
                        <Box className={classes.commentContent} sx={{ borderLeft: 'groove 1px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* mobile view */}


            <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                <Box className={classes.imageContainerMob}>
                    <Splide options={{ type: 'loop', autoWidth: true, perMove: 1, autoplay: false, gap: '1rem', speed: 3000, pagination: false }}>
                        {Images.map((image: any, index: number) => {
                            return (
                                <SplideSlide >
                                    <Box className={classes.productCard}>
                                        <Box className={classes.cardBody}>
                                            <Image src={image} alt="product image" />
                                        </Box>
                                    </Box>
                                </SplideSlide>
                            )
                        })
                        }
                    </Splide>
                    <Box sx={{ display: 'flex', gap: '18px', justifyContent: 'space-between', alignItems: 'center', marginTop: '2ch' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, textAlign: 'left' }}>
                            cool BT21 oversize fit short sleeve t-shirt
                        </Typography>
                        <Icons.Share />
                        <Icons.FavoriteBorder />
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left' }}>449.00 EGP</Typography>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 8, textAlign: 'left', color: 'red', fontWeight: 'bold' }}>20% discount 359.00 EGP</Typography>
                    </Box>
                    <Box>
                        <Typography style={{ fontWeight: '500', marginTop: 15, marginBottom: 5, textAlign: 'left' }}>Design Rate</Typography>
                        <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Typography>(4.5)</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ fontWeight: '500', marginTop: 15, marginBottom: 5, textAlign: 'left' }}>Quality Rate</Typography>
                        <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Typography>(4.8)</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left', fontWeight: 'bold' }}>Color</Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                        <Box style={{
                            backgroundColor: 'white',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'black',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'red',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'orange',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'yellow',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'green',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'blue',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'blue',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                        <Box style={{
                            backgroundColor: 'purple',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%'
                        }}>

                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left', fontWeight: 'bold' }}>Size</Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 10 }}>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>XS</Button>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>S</Button>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>M</Button>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>L</Button>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>XL</Button>
                        <Button style={{ color: 'black', fontWeight: 'bold' }}>2XL</Button>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <Button style={{ width: '30ch', backgroundColor: '#EA4335', color: 'white' }}>Add to cart</Button>
                    </Box>
                    <Box style={{ display: 'flex', marginTop: 30 }}>
                        <ProductDetailsMob />
                    </Box>
                    <Divider></Divider>
                </Box>
                <Box className={classes.commentSection}>
                    <Typography variant="h6">Ratings & Reviews</Typography>
                    <Typography variant="h5">userName</Typography>
                    <Divider></Divider>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Icons.CheckCircle sx={{ color: 'green' }}></Icons.CheckCircle>
                        <Typography sx={{ color: 'green' }}>verified purchaser</Typography>
                    </Box>
                    <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.StarBorder />
                        <Typography>(4.0)</Typography>
                    </Box>
                    <Typography>fluffy, good material. i really recommed it</Typography>
                    <Typography>sep 9, 2023</Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                       <Divider></Divider>
                    </Box>

                </Box>

                <Box className={classes.commentSection}>
                    <Typography variant="h5">userName</Typography>
                    <Divider></Divider>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Icons.CheckCircle sx={{ color: 'green' }}></Icons.CheckCircle>
                        <Typography sx={{ color: 'green' }}>verified purchaser</Typography>
                    </Box>
                    <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.Star sx={{ color: '#FFD43B' }} />
                        <Icons.StarBorder />
                        <Icons.StarBorder />
                        <Typography>(3.0)</Typography>
                    </Box>
                    <Typography>good material, overall good experience  </Typography>
                    <Typography>Aug 5, 2023</Typography>
                    <Box style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                        <Button style={{ width: '20ch', backgroundColor: '#778da9', color: 'white' }}>comment</Button>
                    </Box>

                </Box>
            </Box>

            <Footer></Footer>
        </React.Fragment>
    )
}