'use client'
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";

// Static Data
import privacyPolicies from '../Assets/StaticData/PrivacyPolicy.json';

// styles
import useStyles from "./PrivacyPolicy.Styles";


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
                        <Typography variant="h6">Privacy Policy & Data Protection</Typography>
                        <Typography>This Privacy Policy outlines how PICTURA collects, uses, protects,
                            and shares your personal information in accordance with the laws and regulations
                            of Egypt. By using the PICTURA website and services, you consent to the practices
                            described in this Privacy Policy.
                        </Typography>

                            { privacyPolicies.map( privacyPolicy => {
                                return (
                                    <Box  className={classes.content} key={privacyPolicy.id}>
                                    <Typography  variant="h4">{privacyPolicy.title}</Typography>
                                    <Divider/>
                                    <Typography>{privacyPolicy.description}</Typography>
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