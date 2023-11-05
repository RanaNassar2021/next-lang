'use client'
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

// Static Data
import TermsAndConditions from '../Assets/StaticData/TermsAndConditions.json';

// styles
import useStyles from "./Terms.Styles";


export default function PrivacyPolicy() {
    const { classes } = useStyles();
    const [currency, setCurrency] = useState<any>('Egypt');

    const currencyFromHeader = (data: any)=>{
            setCurrency(data);
           
    }

    return (
        <React.Fragment>
            <Box>
                <Header sendCurrency={currencyFromHeader}></Header>
                <Box className={classes.root}>
                    <Box className={classes.container}>
                        <Typography variant="h6">Terms & Conditions</Typography>
                        <Typography>These Terms and Conditions govern your use of the PICTURA website and
                             the services provided by PICTURA. By accessing or using our website
                              and services, you agree to comply with these Terms and Conditions.
                               Please read them carefully before proceeding.
                        </Typography>

                            { TermsAndConditions.map( term => {
                                return (
                                    <Box  className={classes.content} key={term.id}>
                                    <Typography  variant="h4">{term.title}</Typography>
                                    <Divider/>
                                    <Typography>{term.description}</Typography>
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