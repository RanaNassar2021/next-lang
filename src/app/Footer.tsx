'use client'
import React from 'react'
import { Box, Typography, Button, Divider } from '@mui/material';
import logo from './Assets/Images/LogoModified.png';
import fb from './Assets/Images/fbw.png';
import inst from './Assets/Images/instaw.png';
import tiktok from './Assets/Images/tiktokw.png';
import Image from 'next/image';
import flashSale from './Assets/Images/flashSale.png';
import Link from 'next/link';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

//styles
import useStyles from './Footer.Styles';

export default function Footer() {

    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    return (
        <React.Fragment>
            <Box className={classes.container}>
                <Box className={classes.footerSection}>
                    <Box className={classes.footerLogo}>
                        <Link href='/'>
                            <Image src={logo}
                                width={150}
                                height={100}
                                alt="Picture of pictura logo" /></Link>
                    </Box>
                    <Box className={classes.socialMedia}>
                        <Box>
                            <Link href="https://www.facebook.com/">
                        <Image src={fb}
                                width={20}
                                height={20}
                                alt="Pictura facebook account" />
                                </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.instagram.com/">
                        <Image src={inst}
                                width={20}
                                height={20}
                                alt="Pictura Instagram account" />
                                </Link>
                        </Box>
                        <Box>
                            <Link href="https://www.tiktok.com/en/">
                        <Image src={tiktok}
                                width={20}
                                height={20}
                                alt="Pictura Tiktok account" />
                                </Link>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.footerContent}>
                    <Box>
                        <Typography variant='h6'>CATALOG</Typography>
                    </Box>
                    <Box>
                        <Typography>The Designer</Typography>
                    </Box>
                    <Box>
                        <Link href="/PicturaDesigns">
                        <Typography>PICTURA Designs</Typography>
                        </Link>
                    </Box>
                    <Box> 
                        <Link href="/NewTrends">
                        <Typography>New Trends</Typography>
                        </Link>
                    </Box>
                    <Box>
                    <Link href="/FlashSale">
                    <Image src={flashSale}
                                width={70}
                                height={15}
                                alt="Pictura flashsale page" />
                                </Link>
                    </Box>
                </Box>
                <Box className={classes.footerContent}>
                    <Box>
                        <Typography variant='h6'>about us</Typography>
                    </Box>
                    <Box>
                        <Link href="/AboutUs">
                        <Typography>Our journey</Typography>
                        </Link>
                    </Box>
                    <Box>
                    <Link href="/FAQ">
                        <Typography>FAQ</Typography>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/TermsAndConditons">
                             <Typography>Terms & Conditions</Typography>
                        </Link>
                    </Box>
                </Box>
                <Box className={classes.footerContent}>
                    <Box>
                        <Typography variant='h6'>customer services</Typography>
                    </Box>
                    <Box>
                        <Typography>Contact Us</Typography>
                    </Box>
                    <Box>
                        <Link href="/ShippingAndReturns">
                        <Typography>Shipping & Returns</Typography>
                        </Link>
                       
                    </Box>
                    <Box>
                        <Typography><Link href='/PrivacyPolicy'> Privacy Policy & Data Protection</Link></Typography>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}