'use client';
import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import Image from "next/image";

// styles
import useStyles from "./Orders.Styles";


import SideBar from "../UserSideBar/page";
import Header from './Header/page';
import Footer from "../../Footer";

export default function Orders() {
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
                            <Box>
                              Orders
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