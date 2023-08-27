'use client';
import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";

// styles
import useStyles from "./CardDetails.Styles";

// Images
import tshirt1 from '../Assets/Images/best3.jpg';
import tshirt2 from '../Assets/Images/newTrendM.jpg'

export default function CardDetails () {
    const {classes} = useStyles();
    return(
        <React.Fragment>
            <Header></Header>
            <Box className={classes.container}>
              <Image src={tshirt1} alt="t-shirt" />
              <Image src={tshirt2} alt="t-shirt" />
            </Box>
            <Footer></Footer>
        </React.Fragment>
    )
}