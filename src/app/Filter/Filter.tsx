'use client'
import React from 'react';
import { useState } from 'react';
import { Drawer, Box, List, ListItem, IconButton, Divider, Checkbox, Typography } from '@mui/material';


// material UI icons
import * as MuiIcons from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Filter() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Icons: any = MuiIcons;

    return (
        <React.Fragment>
            <IconButton onClick={() => { setIsDrawerOpen(true) }}>
                <Icons.FilterList></Icons.FilterList>
            </IconButton>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => { setIsDrawerOpen(false) }}>
                <Box p={2} width='250px' role='presentation'>
                    <List>
                        <Typography style={{fontWeight:'bold', fontSize:'18px', marginTop:10, marginBottom:5}} > Catergories </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            T-Shirts
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Checkbox {...label} />
                            Polo
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            High-Neck
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            V-Neck
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Checkbox {...label} />
                            Shirts
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Hoodies
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Top Rated
                        </ListItem>
                        <Divider />
                        <Typography style={{fontWeight:'bold', fontSize:'18px', marginTop:10, marginBottom:5}}> Color </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            Black
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            White
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Gray
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Red
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Blue
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Yellow
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Orange
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Green
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            Purple
                        </ListItem>
                        <Divider/>
                        <Typography style={{fontWeight:'bold', fontSize:'18px',marginTop:10, marginBottom:5}}> Sort By </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            New In
                        </ListItem>
                        <Typography style={{ fontSize:'16px',marginTop:10, marginBottom:5}}> Prices </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            Low to High
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            High to Low
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}