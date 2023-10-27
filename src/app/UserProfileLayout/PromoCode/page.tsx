'use client';
import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import Image from "next/image";
import ticket from '../../Assets/Images/transparentItcket.png';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// styles
import useStyles from "./PromoCode.Styles";


import SideBar from "../UserSideBar/page";
import Header from './Header/page';
import Footer from "../../Footer";

export default function PromoCode() {
    const { classes } = useStyles();
    const [SideMenu, setSideMenu] = useState(true);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.dashboard}>
                    {/* Header */}
                    <Header SideMenu={SideMenu} setSideMenu={(setSideMenu)} />
                    {/* Side Bar */}
                    <SideBar SideMenu={SideMenu} setSideMenu={setSideMenu} />
                    {/* Content */}
                    <Box className={`${classes.container} ${!SideMenu ? classes.openContainer : ''}`}>
                        <Box className={classes.content}>
                            <Box className={classes.promo}>
                             <Box className={classes.promoContent}  style={{ backgroundImage: `url(${ticket.src})`, width:'60%', backgroundRepeat: 'no-repeat'}}>
                                <Box className={classes.promoDetails}>
                                  <Typography variant="h5">10%</Typography>
                                  <Typography variant="h6">Single use only</Typography>
                                  <Typography variant="h6">Valid till 25/1/2024</Typography>
                                </Box>
                                <Box className={classes.promoDetails}>
                                <Typography variant="h4">CFG3362</Typography>
                                <ContentCopyIcon></ContentCopyIcon>
                                </Box>
                             </Box>
                            </Box>
                        </Box>
                          {/* Footer */}
                          <Box className={classes.footer}>
                            <Footer />
                        </Box>
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}