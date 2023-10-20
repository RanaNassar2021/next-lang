'use client';
import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";

// styles
import useStyles from "./UserProfile.Styles";

// Material Icon
import * as MuiIcons from '@mui/icons-material';

import Header from './UserHeader/page';
import SideBar from "./UserSideBar/page";
import Footer from "./UserFooter/page";

export default function UserProfile() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [SideMenu, setSideMenu] = useState(true);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.dashboard}>
                    {/* Header */}
                    <Header SideMenu={SideMenu} setSideMenu={setSideMenu} />
                     {/* Side Bar */}
                     <SideBar SideMenu={SideMenu} setSideMenu={setSideMenu}/>
                    {/* Content */}
                    <Box className={`${classes.container} ${!SideMenu ? classes.openContainer : ''}`}>
                        <Box className={classes.content}>
                            outlet
                        </Box>
                        {/* Footer */}
                        <Footer />
                    </Box>
                </Box>
            </Box>

        </React.Fragment>
    )
}