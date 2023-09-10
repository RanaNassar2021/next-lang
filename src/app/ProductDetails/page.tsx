'use client'
import React from 'react';
import { useState } from 'react';
import { Drawer, Box, List, ListItem,IconButton,Divider, Typography} from '@mui/material';


// material UI icons
import * as MuiIcons from '@mui/icons-material';

export default function ProductDetails () {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Icons:any = MuiIcons;

    return (
        <React.Fragment>
            <IconButton onClick={()=>{setIsDrawerOpen(true)}}>
                 <Typography>Product Details</Typography>
            <Icons.ArrowForward style={{ opacity: 0.9, marginLeft: '1ch' }}></Icons.ArrowForward>
            </IconButton>
            <Drawer anchor='right' open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
                <Box p={2} width='500px' role='presentation'>
                    <List>
                        <ListItem sx={{fontWeight:'bold'}}>Product Details</ListItem>
                        <Divider/>
                        <ListItem>Model Size: M</ListItem>
                        <ListItem>Main Fabric: Cotton</ListItem>
                        <ListItem>Gender : Men</ListItem>
                        <ListItem>Category: T-Shirt</ListItem>
                        <ListItem>Arm Length: Short Sleeves</ListItem>
                        <ListItem>Collar: Round Neck</ListItem>
                        <ListItem>Color: orange</ListItem>
                        <ListItem>Availability : In stock</ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}