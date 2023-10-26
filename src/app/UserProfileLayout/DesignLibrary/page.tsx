'use client';
import React, { useState } from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import Image from "next/image";
import design from '../../Assets/Images/front1.png';
import Rating from '@mui/material/Rating';

// styles
import useStyles from "./DesignLibrary.Styles";


import SideBar from "../UserSideBar/page";
import Header from './Header/page';
import Footer from "../../Footer";

export default function DesignLibrary() {
    const { classes } = useStyles();
    const [SideMenu, setSideMenu] = useState(true);
    const [value, setValue] = React.useState<number | null>(3);

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
                            <Box className={classes.design}>
                                <Image src={design} alt="design Picture" width={200} height={200} />
                                <Box>
                                    <Typography variant="h5">Status: Done</Typography>
                                    <Box className={classes.reviews}>
                                        <Typography variant="h5">Reviews: </Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                    <Box sx={{marginTop:{md:'2ch', xs:'1ch'}}}>
                                        <Button>Edit The Design</Button>
                                    </Box>
                                </Box>
                            </Box>
                            <Divider></Divider>
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