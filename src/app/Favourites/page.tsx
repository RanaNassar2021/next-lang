'use client';
import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem, Divider, Grid, Card, CardContent } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import ImagesCard from "../Card/page";
import Image from "next/image";
import Link from "next/link";
import CustomizedSnackbars from "../SnakeBar/page";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

// styles
import useStyles from "./favourites.Styles";

//Axios
import Axios from 'axios';

// Material ui Icons
import * as MuiIcons from '@mui/icons-material';


export default function Favourites() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    const [data, setData] = useState<any>([]);

    const fetchData = async () => {
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/FavoriteList?PageNumber=1&PageSize=10&Location=egypt`, Config);
        setData(response.data);
        console.log(response.data);

    }

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

    function handleAddToCart(id: any) {
        setCart(true);
        setData((prev: any) => prev.map((x: any) => {
            if (x.productId == id && cart == true) x.isClicked = true;
            return x
        }))
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    interface RemoveFavouteOrAddCart {
        ProductId: string;
        ColorId: number;
        SizeId?: number;
    }

    const RemoveFromFavourite = (removeFavoute: RemoveFavouteOrAddCart) => {
        let body = {
            productId: removeFavoute.ProductId,
            colorId: removeFavoute.ColorId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` + `Product/ChangeFaviorate`, body, Config).then((res) => {
            setData(data.filter((item: any) => {
                return item.productId != removeFavoute.ProductId
            }));
           
        })
    }

    const addToCart = (addToCart: RemoveFavouteOrAddCart) => {
        let body = {
            productId: addToCart.ProductId,
            colorId: addToCart.ColorId,
            sizeId: addToCart.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` + `Product/AddCart`, body, Config).then((res) => {
            setData(data.filter((item: any) => {
                return item.productId != addToCart.ProductId
            }))
        })
    }


    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.container}>
                <Box className={classes.title}>
                    <Typography variant="h6"> my favourites ({data.length}) </Typography>
                    <Box>
                        <Button sx={{ color: 'black' }}
                            id="basic-button"
                            aria-controls={opens ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={opens ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            sort by
                            <Icons.ArrowDropDown></Icons.ArrowDropDown>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={opens}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>New Trends</MenuItem>
                            <MenuItem onClick={handleClose}>Ascending Prices</MenuItem>
                            <MenuItem onClick={handleClose}>Decending Prices</MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Divider className={classes.divider}></Divider>

                <Box className={classes.cardsContainer}>
                    <Box className={classes.cards}>
                        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {data.map((data: any, index: number) => {
                                return (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ maxWidth: 345 }} onMouseOver={e => handleMouseOver(data.productId, index)} onMouseOut={e => handleMouseOut(data.productId, index)}
                                            className={classes.card}>
                                            {data.hoverImage ? (
                                                <Box>
                                                    <Link href={'/cardDetails/' + data.productId + "/" + 1}>
                                                        <Box className={classes.productDetailsLink}></Box>
                                                    </Link>
                                                    <ImagesCard images={data?.images}></ImagesCard>
                                                </Box>

                                            ) : (
                                                <Box className={classes.cardImage}>
                                                    <Image src={data.images[1]} alt="product picture" unoptimized width={300} height={270} />
                                                </Box>
                                            )}

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

                                        <Button sx={{ display: 'block', width: '100%', backgroundColor: '#FF6F61', color: 'black', marginTop: '2ch', fontWeight: 500 }} onClick={() => addToCart({ ProductId: data.productId, ColorId: data.colorId, SizeId: data.sizeId })}>Add to cart</Button>
                                        <Button sx={{ display: 'block', width: '100%', backgroundColor: 'white', color: '#FF6F61', marginTop: '2ch', fontWeight: 600 }} onClick={() => RemoveFromFavourite({ ProductId: data.productId, ColorId: data.colorId })}>Remove</Button>
                                    </Grid>
                                )
                            })
                            }

                        </Grid>
                    </Box>
                </Box>

            </Box>
            <Footer></Footer>
        </React.Fragment>
    )
}