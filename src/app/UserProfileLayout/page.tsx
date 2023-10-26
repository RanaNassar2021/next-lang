'use client';
import React, { useState } from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import Image from "next/image";
import Rating from '@mui/material/Rating';
import pp from '../Assets/Images/pp.jpg';
import front from '../Assets/Images/front1.png';
import back from '../Assets/Images/back1.png';
import comment from '../Assets/Images/comment.png';
import share from '../Assets/Images/share.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


// styles
import useStyles from "./UserProfile.Styles";

// Material Icon
import * as MuiIcons from '@mui/icons-material';

import Header from './UserHeader/page';
import SideBar from "./UserSideBar/page";
import Footer from "../Footer";

export default function UserProfile() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [SideMenu, setSideMenu] = useState(true);
    const [value, setValue] = React.useState<number | null>(4);

    return (
        <React.Fragment>
            <Box className={classes.root}>
                <Box className={classes.dashboard}>
                    {/* Header */}
                    <Header SideMenu={SideMenu} setSideMenu={setSideMenu} />
                    {/* Side Bar */}
                    <SideBar SideMenu={SideMenu} setSideMenu={setSideMenu} />
                    {/* Content */}
                    <Box className={`${classes.container} ${!SideMenu ? classes.openContainer : ''}`}>
                        <Box className={classes.content}>
                            <Box className={classes.post}>
                                <Box className={classes.postDetails}>
                                    <Box className={classes.user}>
                                        <Image src={pp} alt="Profile Picture" />
                                        <Typography>UserName</Typography>
                                    </Box>
                                    <Box className={classes.postImages}>
                                        <Box className={classes.image}>
                                            <Image src={front} alt="design picture" />
                                        </Box>
                                        <Box className={classes.image}>
                                            <Image src={back} alt="design picture" />
                                        </Box>
                                    </Box>
                                    <Box className={classes.reacts}>
                                        <Box sx={{ display: 'flex', gap: '5px' }}>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                            <Image src={comment} alt="comment icon" />
                                        </Box>
                                        <Box>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </Box>
                                        <Box>
                                            <Image src={share} alt="share icon" />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box className={classes.comments}>
                                            <Typography variant="h5">User_Name</Typography>
                                            <Typography variant="h6">Very cool designs , great work</Typography>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        </Box>
                                        <Box className={classes.comments}>
                                            <Typography variant="h5">User_Name</Typography>
                                            <Typography variant="h6">ordered Already</Typography>
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        </Box>
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