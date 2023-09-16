'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';

// Styles
import useStyles from './Contact.Styles';

// Images
import contact from '../Assets/Images/contact.jpeg';
import fb from '../Assets/Images/fbc.png';
import inst from '../Assets/Images/instac.jpg';
import tiktok from '../Assets/Images/tiktokc.png';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

export default function Contact() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;
    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.container} style={{ backgroundImage: `url(${contact.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <Box sx={{ width: '70%' }}>
                    <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: '35px', fontWeight: 500 }}>PICTURA Contacts</Typography>
                    <Typography sx={{ display: 'flex', justifyContent: 'center', color: 'white', textAlign: 'center', fontSize: '20px' }}>we're here to assist you and answer any questions you may have. Reach out to us using the contact information provided below. we value your feedback and look forward to hearing from you</Typography>
                </Box>
            </Box>
            <Box className={classes.firstContent}>
                <Box className={classes.leftContent}>
                    <Typography variant='h6'>Customer support</Typography>
                    <Typography>for any inquiries or assistance, our dedicated support team is ready to help. feel free to contact us via email or whatsapp </Typography>
                    <Typography>Email: <Link href='mailto: support@pictura.com' className={classes.link}>Support@pictura.com</Link></Typography>
                    <Typography>whatsapp: <Link href='https://wa.me/201096001563'>[+1 xxx xxx-xxxx]</Link></Typography>
                </Box>
                <Box className={classes.rightContent}>
                    <Typography>our customer support representatives are available [days of the week ] from [opening hours] to [closing hours]. we strive to respond to all your inquiries promptly and provide you with the best possible support.</Typography>
                </Box>
            </Box>

            <Box className={classes.secondContent}>
                <Box className={classes.centerContent}>
                    <Typography variant='h6' >Connect with us</Typography>
                    <Typography>stay updated with the latest news, designs and community highlights by connecting with us on social media . follow our official accounts :</Typography>
                    <Box sx={{ display:'flex', justifyContent:'space-evenly', margin:'10px 0'}}>
                        <Typography> <Link href="https://www.facebook.com/">
                            <Image src={fb}
                                width={40}
                                height={40}
                                alt="Pictura facebook account" />
                        </Link>
                        </Typography>
                        <Typography> <Link href="https://www.instagram.com/">
                            <Image src={inst}
                                width={42}
                                height={42}
                                alt="Pictura instagram account" />
                        </Link>
                        </Typography>
                        <Typography> <Link href="https://www.tiktok.com/">
                            <Image src={tiktok}
                                width={40}
                                height={40}
                                alt="Pictura instagram account" />
                        </Link>
                        </Typography>
                    </Box>
                    <Typography sx={{fontStyle:'italic'}}>Join the PICTURA community and engage with fellow designers, share your creations, and be inspired by others.</Typography>
                </Box>
            </Box>

            <Box className={classes.firstContent} sx={{ marginBottom: '30px' }}>
                <Box className={classes.leftContent}>
                    <Typography variant='h6'>Business oppportunities</Typography>
                    <Typography>if you're interested in partnering with PICTURA or exploring business oppportunities, we would be delighted to discuss further. please reach out to our business development team at <Link href='mailto: Business@pictura.com' className={classes.link}>Business@pictura.com</Link> for potential collaboration, partnership, or any related inquiries.  </Typography>
                </Box>
                <Box className={classes.rightContent}>
                    <Typography>we appreciate your interest in PICTURA . and we are commited to providing exceptional customer service . don't hesitate to contact us , we're here to help you make your fashion dreams a reality.</Typography>
                </Box>
            </Box>


            <Footer ></Footer>
        </React.Fragment>

    )
}