'use client';
import React from "react";
import { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem, Divider,Grid,Card,CardContent } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import cardsData from '../Assets/StaticData/PicturaMen.json';
import ImagesCard from "../Card/page";
import Image from "next/image";
import Link from "next/link";

// styles
import useStyles from "./favourites.Styles";

import newTrend1 from '../Assets/Images/best3.jpg';

// Material ui
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';


// images for slider
const images = [
    "/Assets/Images/best3.jpg",
   "/Assets/Images/newTrendM.jpg",
   "/Assets/Images/best6.jpg"
 ]

// Material ui Icons
import * as MuiIcons from '@mui/icons-material'

export default function Favourites() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    const [cards, setCards] = useState(cardsData)

    const handleMouseOver = (id: number) => {
        setCards(prev => prev.map(card => {
            if (card.id == id) {
                card.isMouseOver = true;
                card.hoverImage = true;
            }
            return card
        }))
    }


    const handleMouseOut = (id: number) => {
        setCards(prev => prev.map(card => {
            if (card.id == id) {
                card.isMouseOver = false;
                card.hoverImage = false;
                card.currentImageIndex = 0;
            }
            return card
        }))
    }


    const [cart, setCart] = useState(false);

   function handleAddToCart (id: number) {
    setCart(true) ;
    setCards(prev => prev.map(x=>{
        if(x.id == id && cart == true) x.isClicked = true;
        return x
    }))
   };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.container}>
                <Box className={classes.title}>
                    <Typography variant="h6"> my favourites (3) </Typography>
                    <Box>
                        <Button sx={{ color: 'black' }}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            sort by
                            <Icons.ArrowDropDown></Icons.ArrowDropDown>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
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
                        {cards.map(card => {
                            return (
                                <Grid item xs={2} sm={4} md={4} key={card.id}>
                                    <Link href={'/cardDetails/' + card.id}>
                                    <Card sx={{ maxWidth: 345 }}  onMouseOver={e => handleMouseOver(card.id)} onMouseOut={e => handleMouseOut(card.id)}
                                        className={classes.card}>
                                         {card.hoverImage ? ( 
                                              <ImagesCard images={images}></ImagesCard>
                                        ): (
                                            <Box className={classes.cardImage}>
                                                <Image src={newTrend1} alt="product picture" layout="responsive" />
                                            </Box>
                                       )}

                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                {card.title}
                                            </Typography>
                                            <Box className={classes.cardFooter}>
                                                <Typography color="text.secondary">{card.category}</Typography>
                                                <Typography>{card.price}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                    </Link>
                                    <Button sx={{  display: 'block', width:'100%', backgroundColor:'#FF6F61', color:'black' , marginTop:'2ch', fontWeight:500}}>Add to cart</Button>
                                    <Button sx={{  display: 'block', width:'100%', backgroundColor:'white', color:'#FF6F61' , marginTop:'2ch', fontWeight:600}}>Remove</Button>
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