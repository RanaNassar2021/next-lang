'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem,IconButton,Divider, Typography} from '@mui/material';
import Image from 'next/image';
import flashSale from '../Assets/Images/flashSale.png';

import { useParams } from 'next/navigation';

import  Axios  from "axios";

// material UI icons
import * as MuiIcons from '@mui/icons-material';

export default function ProductDetailsMob () {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Icons:any = MuiIcons;
    const params = useParams();
    const [data, setData] = useState<any>([]);

    const fetchData = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetProductDetials?Id=${params.id.split('/')[0]}&ColorId=${params.id.split('/')[1]}`);
        setData(response.data);
    };

    useEffect(()=>{
        fetchData();

    },[])

    return (
        <React.Fragment>
            <IconButton onClick={()=>{setIsDrawerOpen(true)}}>
                 <Typography>Product Details</Typography>
            <Icons.ArrowForward style={{ opacity: 0.9, marginLeft: '1ch' }}></Icons.ArrowForward>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
                <Box p={2} width='250px' role='presentation'>
                    <List>
                    <ListItem sx={{fontWeight:'bold'}}>Product Details</ListItem>
                        <Divider/>
                        <ListItem>Main Fabric: {data.mainFabric} </ListItem>
                        <ListItem>Gender : Men</ListItem>
                        <ListItem>Category: {data.category}</ListItem>
                        {data.isLongSleve? (
                            <ListItem>Arm Length: long Sleeves</ListItem>
                        ): <ListItem>Arm Length: Short Sleeves</ListItem>
                        }
                        <ListItem>Collar: {data.collar}</ListItem>
                        {data.colors?.map((color: any, index: number)=>{
                            return (
                                <ListItem key={index}>Color: {color.name}</ListItem>
                            )
                        })}
                        <ListItem>Availability : {data.stockStatus}</ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}