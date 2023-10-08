'use client'
import React,{useState,useEffect} from 'react'
import { Box, Typography, Button, Divider, Menu, MenuItem } from '@mui/material';
import logo from './Assets/Images/logo.png';
import Image from 'next/image';
import flashSale from './Assets/Images/flashSale.png';
import egyptFlag from './Assets/Images/egyptFlag.png';
import Link from 'next/link';
import SideBar from './SideBar/SideBar';
// material UI icons
import * as MuiIcons from '@mui/icons-material';

//styles
import useStyles from './Header.Styles';

export default function Header() {
  const { classes } = useStyles();
  const Icons: any = MuiIcons;
  const [token, SetToken] = useState<any>(localStorage.getItem("Token"));
  const [show,SetShow] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    SetToken(localStorage.getItem("Token"));
  },[localStorage.getItem("Token")])

  useEffect(()=>{
    if(token != null && token != undefined){
      SetShow(false);
    }
  },[token])

  const LogOut = () => {
    localStorage.clear();
  }
  return (
    <React.Fragment>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className="flex flex-col">
          <Box className={classes.header}>
            <Box className={classes.topHeader}>
              <Link href="/Contact"><Button className={classes.btn}>Contact</Button> </Link>
              <Link href="/AboutUs"> <Button className={classes.btn}>About us</Button> </Link>
              <Button className={classes.btn}>
                <Image src={egyptFlag} width={20} alt='flag' style={{ marginRight: 5 }} /> Egypt (English) EGP <Icons.ArrowDropDown />
              </Button>
              <Box sx={{marginTop:'4.5ch',paddingLeft:'1ch'}}>
              <Icons.Search></Icons.Search>
              </Box>
            </Box>
            <Link href='/' className={classes.logo}><Box >
              <Image src={logo}
                width={180}
                height={180}
                alt="Picture of pictura logo" />
            </Box> </Link>
            <Box className={classes.endHeader}>
              <Box className={classes.register}>
               {show && <Link href="/Registeration"><Button className={classes.btnR}>sign up</Button></Link>}
               {show && <Link href="/LogIn"><Button className={classes.btnR}>log in</Button> </Link>}
               {!show && <Icons.AccountCircle /> }
               {!show && <Button className={classes.btnR} onClick={LogOut}>log out</Button>}
                <Link href="/Favourites"><Icons.FavoriteBorder /></Link>
               <Link href="/Cart"> <Icons.ShoppingCart /></Link>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.bottomHeader}>
            <Button className={classes.btnB}> <Link href="/"> Home</Link></Button>
            <Button className={classes.btnB} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>Shop</Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}> <Link href="/"> The Designer</Link> </MenuItem>
              <MenuItem onClick={handleClose}> <Link href='/PicturaDesigns'>PICTURA Designs</Link> </MenuItem>
            </Menu>
            <Button className={classes.btnB}><Link href="/BestSeller"> Best Seller</Link></Button>
            <Button className={classes.btnB}><Link href="/NewTrends"> New Trends</Link></Button>
            <Button className={classes.btnB}> <Link href="/#VoteWin">Vote & Win</Link></Button>
            <Button className={classes.btnB}> <Link href="/FlashSale"> <Image src={flashSale}
              layout='responsive'
              alt="Picture of flash sale logo" /> </Link></Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={classes.mobile}>
        <Box className={classes.mobileIcons}>
          <SideBar />
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.Search></Icons.Search>
        </Box>
        <Box className={classes.mobileIcons}>
          <Image src={logo}
            width={80}
            height={80}
            alt="Picture of pictura logo" />
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.FavoriteBorder />
        </Box>
        <Box className={classes.mobileIcons}>
          <Icons.ShoppingCart />
        </Box>
      </Box>
    </React.Fragment>
  )
}