'use client'
import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Checkbox, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "../Filter/Filter";
import cardsData from '../Assets/StaticData/PicturaMen.json';
import ImagesCard from "../Card/page";
import Image from "next/image";
import Link from "next/link";

// styles
import useStyles from "./PicturaMen.Styles";

// images for slider
const images = [
    "/Assets/Images/best3.jpg",
   "/Assets/Images/newTrendM.jpg",
   "/Assets/Images/best6.jpg"
 ]

 import newTrend1 from '../Assets/Images/best3.jpg';

// Material ui
import * as MuiIcons from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//Axios
import Axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function PicturaMen() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;


    const [data, setData] = useState<any>([]);


    const fetchData = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetAllProduct?gender=male&pageNumber=${1}&pageSize=10`);
        // Update the state with the response data
        setData(response.data);
        console.log(response.data);
    };

    // Call the fetchData function after the initial render
    useEffect(() => {
        fetchData();
    }, []);

  {/*  useEffect(()=>{
        const get = async () => {
            try {
                const resp = await Axios.get(`${process.env.apiUrl}`+ `Product/GetAllProduct?gender=male&pageNumber=1&pageSize=5`);
                setData(resp.data?.forEach((items: any)=>{
                    items.isMouseOver = false;
                    items.hoverImage = false;
                    items.isClicked = false
                })); console.log(data)
              
            } catch (err) {
                console.error('Error fetching pictura men data', err);
            }
        }
      },[]) */ }

    const handleMouseOver = (id: any) => {
        setData((prev: any) => prev.map((item: any) => {
            if (item.productId == id) {
                item.isMouseOver = true;
                item.hoverImage = true;
            }
            return item
        }))
    }


    const handleMouseOut = (id: any) => {
        setData((prev: any) => prev.map((item: any) => {
            if (item.productId == id) {
                item.isMouseOver = false;
                item.hoverImage = false;
            }
            return item
        }))
    }


    const [cart, setCart] = useState(false);

   function handleAddToCart (id: any) {
    setCart(true) ;
    setData((prev: any) => prev.map((x: any)=>{
        if(x.productId == id && cart == true) x.isClicked = true;
        return x
    }))
   };

  


    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.filterMobile} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Typography variant="h3">filter</Typography>
                <Filter />
            </Box>
            <Box className={classes.container}>
                <Box className={classes.filterContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant="h4"> <Icons.FilterList></Icons.FilterList> filter</Typography>
                    <Divider></Divider>
                    <Typography variant="h3"> Catergories </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>T-Shirts</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Polo</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>High-Neck</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>V-Neck</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Shirts</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Hoodies</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Top Rated</Typography>
                    </Box>
                    <Divider></Divider>
                    <Typography variant="h3"> Color </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Black</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>white</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Gray</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Red</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Blue</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Yellow</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Orange</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Green</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Purple</Typography>
                    </Box>
                    <Typography variant="h4"> <Icons.Sort></Icons.Sort> sort by</Typography>
                    <Divider></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>New In</Typography>
                    </Box>
                    <Typography variant="h3"> Price </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>Low to High</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} />
                        <Typography>High to low</Typography>
                    </Box>
                </Box>
                <Box className={classes.cards}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        { data.map((data: any, index: number) => {
                            return (
                                <Grid item xs={2} sm={3} md={3} key={index}>
                                    <Link href={'/cardDetails/' + data.productId}>
                                    <Card sx={{ maxWidth: 345 }} onMouseOver={e => handleMouseOver(data.productId)} onMouseOut={e => handleMouseOut(data.productId)}
                                        className={classes.card}>
                                         {data.hoverImage ? ( 
                                              <ImagesCard images={data?.images}></ImagesCard>
                                        ): (
                                            <Box className={classes.cardImage}>
                                                <Image src={data.images[1]} alt="product picture" unoptimized height={250} width={270}  />
                                            </Box>
                                       )}

                                        {data.isMouseOver ? (<Box className={classes.hoverBox}> <Box>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        </Box>
                                            <Box>
                                                {data.isClicked ? (<Box className={classes.sizes}>
                                                                        <Box className={classes.sizeBox}>
                                                                            XS
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             S
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             M
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             L
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             Xl
                                                                        </Box>
                                                                        <Box className={classes.sizeBox}>
                                                                             XXL
                                                                        </Box>
                                                                       </Box>) :(<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e =>{handleAddToCart(data.productId)}} sx={{color:'white'}}>Add to Cart</Button></Box>)
                                            }

                                            </Box>
                                        </Box>) : null}
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                {data.title}
                                            </Typography>
                                            <Box className={classes.cardFooter}>
                                                <Typography color="text.secondary">{data.category}</Typography>
                                                <Typography>{data.currentPrice}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                    </Link>
                                </Grid>
                            )
                        })
                       }

                    </Grid>
                </Box>
            </Box>

            <Footer></Footer>
        </React.Fragment>
    )
}