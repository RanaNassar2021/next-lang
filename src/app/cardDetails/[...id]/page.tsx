'use client';
import React, { useEffect, useState } from "react";
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
import thsirt4 from '../../Assets/Images/back2.png';

import  Axios  from "axios";


const WImages = [tshirt1, tshirt2, tshirt3, thsirt4]

export default function CardDetails() {
    const { classes } = useStyles();
    const params = useParams();
    const Icons: any = MuiIcons;
    const [data, setData] = useState<any>([]);
    const [Images,setImages] = useState<any>([]);
    const [colorIdApi,setColorIdApi] =useState<any>('');

    const fetchData = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetProductDetials?Id=${params.id.split('/')[0]}&ColorId=${params.id.split('/')[1]}`);
        setData(response.data);
    };


    const fetchImages = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Image/GetProductImages?ProductId=${params.id.split('/')[0]}&ColorId=${params.id.split('/')[1]}`);
        setImages(response.data);
    };

    useEffect(()=>{
        fetchData();
        fetchImages();
    },[])

    const ChangeColor =(Id:any)=>{
        setColorIdApi(Id);
        console.log(Id);
    }

    useEffect(()=>{
        console.log(colorIdApi);
          Axios.get(`${process.env.apiUrl}` + `Image/GetProductImages?ProductId=${params.id.split('/')[0]}&ColorId=${colorIdApi}`).then(
             (NewImages)=>{
                console.log(NewImages);
                setImages(NewImages.data);
             }
          );
    },[colorIdApi])

    return (
        <React.Fragment>
            <Header ></Header>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Box className={classes.mainContainer}>
                    <Box className={classes.contentLeft}>
                        <Box sx={{ width: '50%' }}>
                            <Image src={ Images[0] && Images[0].url} alt="t-shirt" width={500} height={650} />
                            <Image src={ Images[1] && Images[1].url} alt="t-shirt" width={400} height={600} layout="responsive" />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Image src={ Images[2] && Images[2].url} alt="t-shirt" width={400} height={600} layout="responsive" />
                            <Image src={ Images[3] && Images[3].url} alt="t-shirt" width={400} height={600} layout="responsive" />
                        </Box>

                    </Box>
                    <Box className={classes.contentRight}>
                        <StickyBox>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                <Typography variant="h6">
                                    {data.title}
                                </Typography>
                                <Icons.FavoriteBorder />
                            </Box>
                            <Box>
                                <Typography style={{ marginTop: 20 }}>{data.orginalPrice} EGP</Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography style={{ color: 'red', fontWeight: '600', fontSize: '18px' }}>{data.discountPercentage} discount {data.currentPrice} EGP </Typography>
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
                                <Typography>({data.avgDesignRating})</Typography>
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
                                <Typography>({data.avgQualityRating})</Typography>
                            </Box>
                            <Box>
                                <Typography style={{ fontWeight: '600', marginTop: 20 }}>Color </Typography>
                            </Box>
                            <Box  style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }} >
                            { data.colors?.map((color: any, index: number) =>{
                                return (
                                        <Box onClick={()=>ChangeColor(color.colorId)} style={{width: '20px',height: '20px', borderRadius: '50%', backgroundColor:`${color.hexaColor}`}}  color={color.name} key={index}>
                                        {color.name}
                                        </Box>
                                )
                            })}
                               </Box>
                           
                            <Box>
                                <Typography style={{ fontWeight: '600', marginTop: 20 }}>Size </Typography>
                            </Box>
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                {data.sizes?.map((size: any, index: number)=>{
                                    return (
                                        <Button style={{ color: 'black', fontWeight: 'bold' }} key={index}>{size.name}</Button>
                                    )
                                })}
                             
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
                        {Images?.map((image: any, index: number) => {
                            return (
                                <SplideSlide >
                                    <Box className={classes.productCard} key={index}>
                                        <Box className={classes.cardBody}>
                                            <Image src={image.url} alt="product image" width={250} height={300} />
                                        </Box>
                                    </Box>
                                </SplideSlide>
                            )
                        })
                        }
                    </Splide>
                    <Box sx={{ display: 'flex', gap: '18px', justifyContent: 'space-between', alignItems: 'center', marginTop: '2ch' }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, textAlign: 'left' }}>
                        {data.title}
                        </Typography>
                        <Icons.Share />
                        <Icons.FavoriteBorder />
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left' }}> {data.orginalPrice} EGP</Typography>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 8, textAlign: 'left', color: 'red', fontWeight: 'bold' }}>{data.discountPercentage} discount {data.currentPrice} EGP </Typography>
                    </Box>
                    <Box>
                        <Typography style={{ fontWeight: '500', marginTop: 15, marginBottom: 5, textAlign: 'left' }}>Design Rate</Typography>
                        <Box style={{ opacity: 0.7, display: 'flex', gap: '5px' }}>
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Icons.StarBorder />
                            <Typography>({data.avgDesignRating})</Typography>
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
                            <Typography>({data.avgQualityRating})</Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left', fontWeight: 'bold' }}>Color</Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                    { data.colors?.map((color: any, index: number) =>{
                                return (
                                        <Box onClick={()=>ChangeColor(color.colorId)} style={{width: '20px',height: '20px', borderRadius: '50%', backgroundColor:`${color.hexaColor}`}}  color={color.name} key={index}>
                                        {color.name}
                                        </Box>
                                )
                            })}
                    </Box>
                    <Box>
                        <Typography style={{ marginTop: 15, textAlign: 'left', fontWeight: 'bold' }}>Size</Typography>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 10 }}>
                    {data.sizes?.map((size: any, index: number)=>{
                                    return (
                                        <Button style={{ color: 'black', fontWeight: 'bold' }} key={index}>{size.name}</Button>
                                    )
                                })}
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