'use client';
import React, { FC } from 'react';
import pp from '../../../Assets/Images/pp.jpg';
import Link from 'next/link';

// Material UI
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HubIcon from '@mui/icons-material/Hub';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BrushIcon from '@mui/icons-material/Brush';

// Style
import useStyles from './Header.Styles';

// Interface
interface IHeader {
    SideMenu: boolean,
    setSideMenu: any
}

const Header: FC<IHeader> = ({ SideMenu, setSideMenu }) => {
    const { classes } = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.header}>
                <Box className={`${classes.logo} ${!SideMenu ? classes.closeLogo : ''}`}>
                    <IconButton onClick={() => setSideMenu(!SideMenu)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                            <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor"></path>
                            <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor"></path>
                        </svg>
                    </IconButton>
                </Box>
                <Box className={`${classes.menu} ${!SideMenu ? classes.closeMenu : ''}`} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant='h5'>Orders</Typography>
                    <List className={`${classes.menuList} ${classes.menuIcons}`}>
                        <ListItem className={classes.menuIcons}>
                        <Link href="/UserProfileLayout"><HubIcon></HubIcon></Link>
                        </ListItem>
                        <ListItem className={classes.menuIcons}>
                        <Link href="/UserProfileLayout/DesignLibrary"><BrushIcon></BrushIcon></Link>
                        </ListItem>
                        <ListItem className={classes.menuIcons}>
                         <Link href="/UserProfileLayout/PersonalInfo"><BorderColorIcon></BorderColorIcon></Link>
                        </ListItem>
                        <ListItem className={classes.menuIcons}>
                        <Link href="/UserProfileLayout/Notifications"><NotificationsIcon></NotificationsIcon></Link>
                        </ListItem>
                        <ListItem className={classes.menuProfile}>
                           <Image src={pp} alt="profile picture" />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Header;