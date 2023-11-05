'use client'
import React from 'react';
import { useState } from 'react';
import { Drawer, Box, List, ListItem,IconButton,Divider, Button} from '@mui/material';
import Image from 'next/image';
import flashSale from '../Assets/Images/flashSale.png';
import Link from 'next/link';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

export default function SideBar (show: any) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Icons:any = MuiIcons;
    const [currency, setCurrency] = useState<any>('Egypt');

    const currencyFromHeader = (data: any)=>{
            setCurrency(data);
           
    }

    const LogOut = () => {
        localStorage.clear();
      }
      
    return (
        <React.Fragment>
            <IconButton onClick={()=>{setIsDrawerOpen(true)}}>
                <Icons.Menu></Icons.Menu>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={()=>{setIsDrawerOpen(false)}}>
                <Box p={2} width='250px' role='presentation'>
                    <List>
                    {show &&  <ListItem> <Link href="/LogIn"><Button>log in</Button> </Link> </ListItem>}
                    {show &&  <ListItem> <Link href="/Registeration"><Button>Sign Up</Button> </Link> </ListItem>}
                    {!show &&  <ListItem> <Icons.AccounttItemCircle /></ListItem> }
                    {!show &&  <ListItem> <Button  onClick={LogOut}>log out</Button> </ListItem>}
                        <Divider/>
                        <ListItem><Link href="/">Home</Link> </ListItem>
                        <ListItem>The Designer</ListItem>
                        <ListItem><Link href='/PicturaDesigns'> PICTURA Designs</Link></ListItem>
                        <ListItem><Link  href="/BestSeller">Best Seller</Link> </ListItem>
                        <ListItem><Link href="/NewTrends">New Trends</Link></ListItem>
                        <ListItem><Link href="/#VoteWin">Vote & Win</Link></ListItem>
                        <ListItem> <Link href="/FlashSale"> <Image src={flashSale}
                                width={100}
                                height={15}
                                alt="Pictura flashsale page" /></Link>
                            </ListItem>
                        <Divider/>
                        <ListItem><Link href="/AboutUs"> Our Journey</Link></ListItem>
                        <ListItem><Link href="/Contact"> Contact Us</Link></ListItem>
                        <ListItem>Language</ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}