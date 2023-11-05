'use cleint';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import pp from '../../Assets/Images/pp.jpg';
import logo from '../../Assets/Images/LogoTransparent.png';

// React Router


// Material UI
import { Box, Typography, List, ListItem, Accordion, AccordionSummary, AccordionDetails, Button, Divider } from '@mui/material';

// Material Icon
import * as MuiIcons from '@mui/icons-material';

// Style
import useStyles from './UserSideBar.Styles';

// Interface
interface ISideBar {
    SideMenu: boolean,
    setSideMenu: any
}

const SideBar: FC<ISideBar> = ({ SideMenu }) => {
    const Icons: any = MuiIcons;
    const { classes } = useStyles();
    const [AccordionState, setAccordionState] = useState<string | false>(false);

    // Accordion
    const AccordionHandler = (Panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setAccordionState(isExpanded ? Panel : false);
    };

    return (
        <React.Fragment>
            <Box className={`${classes.sideBar} ${!SideMenu ? classes.closeSideBar : ''}`}>
            <Box className={`${classes.logo} ${!SideMenu ? classes.closeLogo : ''}`}>
                    <Image src={logo} alt="Profile Picture" />
                    { SideMenu && <Typography>User Profile</Typography>}
                </Box>
                <Box className={`${classes.profile} ${!SideMenu ? classes.closeProfile : ''}`}>
                    {SideMenu && 
                    <Box>
                          <Typography variant='h6'>Welcome: Rana Nassar </Typography>
                          <Typography variant='h6' >Member Since: 15-Aug-2023 </Typography>
                    </Box>
                    }
                    <Image src={pp} alt="Profile Picture" />
                    {SideMenu &&
                        <Box className={classes.followers}>
                            <Typography variant='h6' gutterBottom>Following: 50</Typography>
                            <Typography variant='h6' gutterBottom>Followers: 64</Typography>
                            <Typography variant='h6' gutterBottom>Posts: 5</Typography>
                        </Box>
                    }
                </Box>
                <Box className={classes.listMenu}>
                    <Accordion className={classes.accordion} expanded={AccordionState === 'Personal Information'} onChange={AccordionHandler('Personal Information')}>
                        <AccordionSummary className={classes.accordionTitle} expandIcon={SideMenu && <Icons.ExpandMore />}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                                <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor"></path>
                                <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor"></path>
                            </svg>
                            {SideMenu && <Typography>Account Settings</Typography>}
                        </AccordionSummary>
                        <AccordionDetails className={`${classes.accordionBody} ${!SideMenu ? classes.closeBody : ''}`}>
                            <List className={classes.accordionList}>
                                <ListItem className={`${classes.activeLink} ${!SideMenu ? classes.activeLinkBefore : ''}`}>
                                    <Link href="/UserProfileLayout/PersonalInfo">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                                            <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor"></path>
                                            <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor"></path>
                                        </svg>
                                        {SideMenu && 'Personal Information'}
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/UserProfileLayout/Notifications">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                                            <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor"></path>
                                            <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor"></path>
                                        </svg>
                                        {SideMenu && 'Notification Management'}
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link href="/UserProfileLayout/DeleteMyAcc">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px">
                                            <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="currentColor"></path>
                                            <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="currentColor"></path>
                                            <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="currentColor"></path>
                                        </svg>
                                        {SideMenu && 'Delete My Account'}
                                    </Link>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                    <Divider sx={{ backgroundColor: 'white' }}></Divider>
                    {SideMenu && <Box className={classes.tabs}>
                        <Link href="/UserProfileLayout/Orders">
                            <Typography>Orders</Typography>
                        </Link>
                    </Box>}
                    <Divider sx={{ backgroundColor: 'white' }}></Divider>
                    {SideMenu && <Box className={classes.tabs}>
                        <Link href="/UserProfileLayout/DesignLibrary">
                            <Typography>Design Library</Typography>
                        </Link>
                    </Box>}
                    <Divider sx={{ backgroundColor: 'white' }}></Divider>
                    {SideMenu && <Box className={classes.tabs}>
                        <Link href="/UserProfileLayout">
                            <Typography>Designers Hub</Typography>
                        </Link>
                    </Box>}
                    <Divider sx={{ backgroundColor: 'white' }}></Divider>
                    {SideMenu && <Box className={classes.tabs}>
                        <Link href="/UserProfileLayout/PromoCode">
                            <Typography>Promo Codes</Typography>
                        </Link>
                    </Box>}
                    <Divider sx={{ backgroundColor: 'white' }}></Divider>
                    {SideMenu && <Box className={classes.tabs}>
                        <Link href="/UserProfileLayout/Help">
                            <Typography>Need Help?</Typography>
                        </Link>
                    </Box>}


                </Box>
            </Box>
        </React.Fragment>
    );
};

export default SideBar;