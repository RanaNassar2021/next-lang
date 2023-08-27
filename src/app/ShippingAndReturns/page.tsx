'use client'
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";

// Static Data
import ShippingAndReturns from '../Assets/StaticData/shipping.json';

// styles
import useStyles from "./shipping.Styles";


export default function PrivacyPolicy() {
    const { classes } = useStyles();
    return (
        <React.Fragment>
            <Box>
                <Header />
                <Box className={classes.root}>
                    <Box className={classes.container}>
                        <Typography variant="h6">Shipping & Returns</Typography>
                       

                            { ShippingAndReturns.map( shipping => {
                                return (
                                    <Box  className={classes.content} key={shipping.id}>
                                    <Typography  variant="h4">{shipping.title}</Typography>
                                    <Divider/>
                                    <Typography>{shipping.description}</Typography>
                                    </Box>
                                )
                            })
                            }

                    </Box>
                </Box>
                <Footer />
            </Box>
        </React.Fragment>
    )
}