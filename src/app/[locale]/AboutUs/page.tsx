'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '../Header';
import Footer from '../Footer';
import craft from '../Assets/Images/craft.png';

// styles
import useStyles from './AboutUs.Styles';

export default function AboutUs() {

    const { classes } = useStyles();
    const [currency, setCurrency] = useState<any>('Egypt');

    const currencyFromHeader = (data: any)=>{
            setCurrency(data);
           
    }

    return (
        <React.Fragment>
            <Box>
                <Header sendCurrency={currencyFromHeader}></Header>
            </Box>
            <Box className={classes.container}>
                <Box className={classes.content}>
                    <Typography variant='h6'>PICTURA Story</Typography>
                    <Typography>At PICTURA, we believe that fashion is a powerful form of self-expression. We
                        are passionate about empowering individuals to unleash their creativity and
                        design their own clothes. With our innovative platform and dedication to quality,
                        we offer a unique opportunity for fashion enthusiasts to turn their imagination
                        into wearable masterpieces.</Typography>
                </Box>
            </Box>
            <Box className={classes.info} style={{ backgroundImage: `url(${craft.src})`, width: '100%', backgroundRepeat: 'no-repeat' }}>
                <Box className={classes.infoContentLeft} >
                    <Typography variant='h6'>crafting Unique Stories through Fashion</Typography>
                    <Typography>PICTURA was founded with a vision to revolutionize the fashion industry by
                        providing a platform for individuals to design their own clothes. We understand
                        that fashion is not just about following trends; it's about creating a personal style
                        that reflects who you are. We believe that everyone has a unique story to tell, and
                        clothing is a canvas for expressing that story to the world.</Typography>
                </Box>
                <Box className={classes.infoRight}>
                    <Box className={classes.infoContentRight}>
                        <Typography variant='h6'>Unleash Your Creativity</Typography>
                        <Typography>PICTURA was founded with a vision to revolutionize the fashion industry by
                            providing a platform for individuals to design their own clothes. We understand
                            that fashion is not just about following trends; it's about creating a personal style
                            that reflects who you are. We believe that everyone has a unique story to tell, and
                            clothing is a canvas for expressing that story to the world.</Typography>
                    </Box>
                </Box>
                <Box className={classes.infoContentLeft}>
                    <Typography variant='h6'>Quality and Craftsmanship</Typography>
                    <Typography>We take pride in the quality and craftsmanship of our products. Every custom designed
                        garment goes through a meticulous production process, ensuring
                        attention to detail and precision. We use only premium fabrics and materials to
                        ensure the highest standards of comfort, durability, and style. When you wear a
                        PICTURA creation, you can be confident that you are wearing a piece of art.</Typography>
                </Box>
                <Box className={classes.infoRight}>
                    <Box className={classes.infoContentRight}>
                        <Typography variant='h6'>A Seamless Experience</Typography>
                        <Typography>At PICTURA, we strive to provide a seamless and enjoyable experience for our
                            customers. From the moment you start designing to the day your custom-made
                            clothes arrive at your doorstep, we are committed to delivering excellence at
                            every step. Our customer support team is always ready to assist you with any
                            questions or concerns, ensuring your journey with PICTURA is smooth and
                            delightful.</Typography>
                    </Box>
                </Box>
                <Box className={classes.infoContentLeft}>
                    <Typography variant='h6'>Join the PICTURA Community</Typography>
                    <Typography>When you choose PICTURA, you become part of a vibrant community of likeminded
                        individuals who share a passion for creativity and self-expression
                        through fashion. Connect with fellow designers, showcase your unique creations,
                        and inspire others with your style. We celebrate diversity and embrace the
                        power of fashion to bring people together.</Typography>
                </Box>
                <Box className={classes.infoRight}>
                    <Box className={classes.infoContentRight}>
                        <Typography variant='h6'>Design Your Own Fashion Story with PICTURA</Typography>
                        <Typography>Whether you're a fashion enthusiast, an artist at heart, or simply someone who
                            craves a wardrobe as unique as you are, PICTURA is here to help you bring your
                            vision to life. Design your own clothes, express your individuality, and make a
                            statement with PICTURA. Join us on this exciting journey of self-discovery and
                            fashion innovation. Together, let's create a world where everyone can design
                            their own fashion story.</Typography>
                    </Box>
                </Box>

            </Box>

            <Box>
                <Footer />
            </Box>
        </React.Fragment>

    )
}