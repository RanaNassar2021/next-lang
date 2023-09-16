'use client'
import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Checkbox, Grid, Card, CardContent, Button } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "../Filter/Filter";
import cardsData from '../Assets/StaticData/PicturaWomen.json';
import ImagesCard from "../Card/page";
import Image from "next/image";
import InfiniteScroll from 'react-infinite-scroll-component';

// styles
import useStyles from "./PicturaWomen.Styles";

// images for slider
const images = [
    "/Assets/Images/best2.jpg",
   "/Assets/Images/best4.jpg",
   "/Assets/Images/best5.jpg"
 ]

 import newTrend1 from '../Assets/Images/best2.jpg';


// Material ui
import * as MuiIcons from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//Axios
import Axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function PicturaWomen() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    const [cards, setCards] = useState(cardsData)
    const [data, setData] = useState<any>([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        Axios.get(`${process.env.apiUrl}`+ `Product/GetAllProduct?gender=female&pageNumber=${1}&pageSize=1`)
        .then((res:any) => {setData(res.data); console.log(res.data)}
        ).catch(err => console.log( 'Error fetching flash Sale data',err))
      },[])

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

   const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        if(data.length === 2){
            try {
                Axios.get(`${process.env.apiUrl}`+ `Product/GetAllProduct?gender=female&pageNumber=${page}&pageSize=1`)
                .then((res:any) => 
                {
                    setData((prevdata:any) => [...prevdata, ...res.data]);
                }
                ).catch(err => console.log( 'Error fetching flash Sale data',err))
               
                setPage(prevPage => prevPage + 1);
            } catch (error:any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        
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
                <InfiniteScroll dataLength={2}
                next={fetchData}
                hasMore={true} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}>
                    <Box className={classes.cards}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {data.map((data:any, index:number) => {
                                return (
                                    <Grid item xs={2} sm={3} md={3} key={index}>
                                        <Card sx={{ maxWidth: 345 }}  onMouseOver={e => handleMouseOver(data.productId)} onMouseOut={e => handleMouseOut(data.productId)}
                                            className={classes.card}>
                                            {/* {data.hoverImage ? ( 
                                                 <ImagesCard images={images}></ImagesCard>
                                            ): (
                                                <Box className={classes.cardImage}>
                                                    <Image src={newTrend1} alt="product picture" height={250} width={270} />
                                                </Box>
                                        )} */}

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
                                                    {data && data.length && data?.title}
                                                </Typography>
                                                <Box className={classes.cardFooter}>
                                                    <Typography color="text.secondary">{data.category}</Typography>
                                                    <Typography>{data.price}</Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })
                            }

                        </Grid>
                    </Box>
                </InfiniteScroll>
            </Box>

            <Footer></Footer>
        </React.Fragment>
    )
}