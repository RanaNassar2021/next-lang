
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

const images = [
    "../Assets/Images/best3.jpg",
    "../Assets/Images/newTrendM.jpg",
    "../Assets/Images/best6.jpg"
]

const slider = [
  {
    "images": [
      "/Assets/Images/best3.jpg",
      "/Assets/Images/newTrendM.jpg",
      "/Assets/Images/best6.jpg"
    ],
    "currentImageIndex": 0
  }
]

const [sliders,setSliders] = useState(slider)

export default function ImagesCard () {
  const { classes } = useStyles();

  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevImageIndex) => {
        if (prevImageIndex <= images.length) {
          return prevImageIndex +=1;
        } else {
          return prevImageIndex =0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <React.Fragment>
         <Box style={{width:'30ch'}}>
          {slider.map(slid =>{
            return(
              <Image src={slid.images[0]} alt="product picture" height={220} width={250}/>
            )
          })}
       </Box>

    </React.Fragment>
  )
}