'use client'
import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Checkbox, Grid, Card, CardContent, Button } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "../Filter/Filter";
import Link from "next/link";
import ImagesCard from "../Card/page";

// styles
import useStyles from "./BestSeller.Styles";

// Images
import Image from "next/image";

//Axios
import Axios from 'axios';

// Material ui
import * as MuiIcons from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function PicturaWomen() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    const [data, setData] = useState<any>([]);
    const fetchData = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Tag/GetBestSellerProducts?PageNumber=1&PageSize=10`);
        // Update the state with the response data
        setData(response.data);
        console.log(response.data);
    };

    // Call the fetchData function after the initial render
    useEffect(() => {
        fetchData();
    }, []);


    const handleMouseOver = (id: any, index: any) => {
        setData((prev: any) => prev.map((item: any, indexPrev: any) => {
            if (item.productId == id && index == indexPrev) {
                item.isMouseOver = true;
                item.hoverImage = true;
            }
            return item
        }))
    }
    const handleMouseOut = (id: any, index: any) => {
        setData((prev: any) => prev.map((item: any, indexPrev: any) => {
            if (item.productId == id && index == indexPrev) {
                item.isMouseOver = false;
                item.hoverImage = false;
            }
            return item
        }))
    }


    const [cart, setCart] = useState(false);



   function handleAddToCart (id: any) {
    setCart(true);
    setData((prev: any) => prev.map((x: any) => {
        if (x.productId == id && cart == true) x.isClicked = true;
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
                    {data.map((data: any, index: number) => {
                            return (
                                <Grid item xs={2} sm={3} md={3} key={index}>

                                    <Card sx={{ maxWidth: 345 }} onMouseOver={e => handleMouseOver(data.productId, index)} onMouseOut={e => handleMouseOut(data.productId, index)}
                                        className={classes.card}>
                                        {data.hoverImage ? (
                                            <Box>
                                                <Link href={'/cardDetails/' + data.productId + "/" + data.colorId}>
                                                    <Box className={classes.productDetailsLink}></Box>
                                                </Link>
                                                <ImagesCard images={data?.images}></ImagesCard>
                                            </Box>

                                        ) : (
                                            <Box className={classes.cardImage}>
                                                <Image src={data.images[1]} alt="product picture" unoptimized height={250} width={270} />
                                            </Box>
                                        )}

                                        {data.isMouseOver ? (<Box className={classes.hoverBox}> <Box>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        </Box>
                                            <Box>
                                                {data.isClicked ? (
                                                    
                                                    <Box className={classes.sizes}>
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
                                                </Box>) : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(data.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                                }

                                            </Box>
                                        </Box>) : null}

                                        {data.onlyFewLeft ? (
                                            <Box className={classes.fewLeftBox}>
                                                <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                                            </Box>
                                        ) : null}

                                        {data.isSale ? (
                                            <Box>
                                                <Box className={classes.saleBox}>
                                                    <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                                </Box>
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                        {data.title}
                                                    </Typography>
                                                    <Box className={classes.cardFooter}>
                                                        <Typography color="text.secondary">{data.category}</Typography>
                                                        <Box sx={{ display: 'flex', gap: '10px' }}>
                                                            <Typography sx={{ opacity: 0.8, textDecoration: 'line-through' }}>{data.orginalPrice}</Typography>
                                                            <Typography sx={{ color: '#EA4335' }}>{data.currentPrice}</Typography>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Box>
                                        ) : <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                {data.title}
                                            </Typography>
                                            <Box className={classes.cardFooter}>
                                                <Typography color="text.secondary">{data.category}</Typography>
                                                <Typography>{data.orginalPrice}</Typography>
                                            </Box>
                                        </CardContent>}
                                    </Card>
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