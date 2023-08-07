'use client'
import React from 'react';
import { useState } from 'react';
import { Drawer, Box, List, ListItem,IconButton,Divider} from '@mui/material';
import Image from 'next/image';
import flashSale from '../Assets/Images/flashSale.png';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

export default function SideBar () {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Icons:any = MuiIcons;

    return (
        <React.Fragment>
            <IconButton onClick={()=>{setIsDrawerOpen(true)}}>
                <Icons.Menu></Icons.Menu>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
                <Box p={2} width='250px' role='presentation'>
                    <List>
                        <ListItem>Log In</ListItem>
                        <ListItem>Sign Up</ListItem>
                        <Divider/>
                        <ListItem>Home</ListItem>
                        <ListItem>The Designer</ListItem>
                        <ListItem>PICTURA Designs</ListItem>
                        <ListItem>New Trends</ListItem>
                        <ListItem>Vote & Win</ListItem>
                        <ListItem> <Image src={flashSale}
                                width={100}
                                height={15}
                                alt="Pictura flashsale page" /></ListItem>
                        <Divider/>
                        <ListItem>Our Journey</ListItem>
                        <ListItem>Contact Us</ListItem>
                        <ListItem>Language</ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}