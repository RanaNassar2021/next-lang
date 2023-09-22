
'use client'
import React from "react";
import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

// styles
import useStyles from "./Card.Styles";

// Images
import newTrend1 from '../Assets/Images/best3.jpg';
import newTrend2 from '../Assets/Images/newTrendM.jpg';
import newTrend3 from '../Assets/Images/best6.jpg';
import Image from "next/image";

// Static Data
import cardsData from '../Assets/StaticData/NewTrends.json';




export default function ImagesCard (images:any) {
  const { classes } = useStyles();

  const [imageIndex, setImageIndex] = useState(0);
  var timing: any
 console.log(images)
 
  useEffect(() => {
    timing = setInterval(() => {
      if (imageIndex <= images['images'].length) {
        setImageIndex(imageIndex+1);
      }
    }, 1500);
    return () => clearInterval(timing);
}, [imageIndex]);
 
  const handleImageSlider = ()=> {
      setTimeout(() => {
      if (imageIndex <= images['images'].length) {
        setImageIndex(imageIndex+1);
      }
   },1500)
  }

  const handleImageOut = () =>{
    clearInterval(timing)
    setImageIndex(0)
  }

  return (
   <React.Fragment>
     {images['images'] && images['images'].length &&
        <Box   className={classes.cardImage}  onMouseOver={handleImageSlider} onMouseOut={handleImageOut} >
            <Image src={images['images'][imageIndex] === undefined? images['images'][0]: images['images'][imageIndex] } alt="product picture" width={300} height={260}/>
      </Box> }
   </React.Fragment>
  )
}