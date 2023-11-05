'use client'
import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";

// styles
import useStyles from "./Shop.Styles";

// Images
import men from '../Assets/Images/men.jpg';
import flashSale from '../Assets/Images/BuyNow.png';
import women from '../Assets/Images/women.jpg';

export default function Pictura() {
    const { classes } = useStyles();
    const [currency, setCurrency] = useState<any>('Egypt');

    const currencyFromHeader = (data: any)=>{
            setCurrency(data);
           
    }
    return (
        <React.Fragment>
            <Header sendCurrency={currencyFromHeader}></Header>
            <Box className={classes.container} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Box className={classes.content}>
                    <Link href='/PicturaMen'>
                        <Image src={men} alt='Pictura Men section' />
                        <Box className={classes.maskMen}>
                            <Typography variant="h6">For Men</Typography>
                            <Divider style={{ backgroundColor: 'white', marginTop: 10, width: 30, fontSize: 'bold' }}></Divider>
                            <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginTop: 10 }}>Shop Now</Typography>
                        </Box>
                    </Link>
                </Box>

                <Box className={classes.contentFlashSale}>
                    <Link href="/FlashSale">
                        <Image src={flashSale} alt='Pictura flash sale section' layout="responsive" />
                    </Link>
                </Box>

                <Box className={classes.content}>
                    <Link href='/PicturaWomen'>
                        <Image src={women} alt='Pictura Women section' />
                        <Box className={classes.maskWomen}>
                            <Typography variant="h6">For Women</Typography>
                            <Divider style={{ position: 'absolute', left: '88%', backgroundColor: 'white', marginTop: 10, width: 30, fontSize: 'bold' }}></Divider>
                            <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>Shop Now</Typography>
                        </Box>
                    </Link>
                </Box>
            </Box>

            {/* Mobile view */}

            <Box className={classes.containerMobile} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box className={classes.contentMobileMen}>
                    <Link href='/PicturaMen'>
                        <Image src={men} alt='Pictura Men section' />
                        <Box className={classes.maskMen}>
                            <Typography variant="h6">For Men</Typography>
                            <Divider style={{ backgroundColor: 'white', marginTop: 10, width: 30, fontSize: 'bold' }}></Divider>
                            <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginTop: 10 }}>Shop Now</Typography>
                        </Box>
                    </Link>
                </Box>

                <Box>
                    <Link href="/FlashSale">
                        <Image src={flashSale} alt='Pictura flash sale section' />
                    </Link>
                </Box>

                <Box className={classes.contentMobileWomen}>
                    <Link href='/PicturaWomen'>
                        <Image src={women} alt='Pictura Women section' />
                        <Box className={classes.maskWomenMobile}>
                            <Typography variant="h6">For Women</Typography>
                            <Divider style={{ position: 'absolute', left: '88%', backgroundColor: 'white', marginTop: 10, width: 30, fontSize: 'bold' }}></Divider>
                            <Typography style={{ color: 'white', fontWeight: 'bold', fontSize: '16px', marginTop: 20 }}>Shop Now</Typography>
                        </Box>
                    </Link>
                </Box>

            </Box>
            <Footer></Footer>
        </React.Fragment>
    )
}