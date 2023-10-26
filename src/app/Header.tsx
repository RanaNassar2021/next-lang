'use client'
import React,{useState,useEffect} from 'react'
import { Box, Typography, Button, Divider, Menu, MenuItem } from '@mui/material';
import logo from './Assets/Images/logo.png';
import Image from 'next/image';
import flashSale from './Assets/Images/flashSale.png';
import egyptFlag from './Assets/Images/egyptFlag.png';
import Link from 'next/link';
import SideBar from './SideBar/SideBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { CookiesProvider, useCookies } from "react-cookie";

//Axios
import Axios from 'axios';


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
  const [totalNumber,SetTotalNumber]  = useState<number>();
  const [cookies, setCookie,removeCookie] = useCookies(["Product"]);
  const [totalNumberFavourite,SetTotalNumberFavourite]  = useState<number>();


  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const fetchData = async () => {
    const Config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    }
    // Make a GET Total number of cart and favourite in case of login
    const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetUserCart?PageNumber=1&PageSize=10`, Config);
    const responseFavourite = await Axios.get(`${process.env.apiUrl}` + `Product/FavoriteList?PageNumber=1&PageSize=10&Location=egypt`, Config);

    SetTotalNumber(response.data.length);
    SetTotalNumberFavourite(responseFavourite.data.length)
};

  useEffect(()=>{
    SetToken(localStorage.getItem("Token"));
  },[localStorage.getItem("Token")])

  useEffect(()=>{
    token && fetchData();
  },[token])

  useEffect(()=>{
    if(token != null && token != undefined){
      SetShow(false);
    }
  },[token])

  const LogOut = () => {
    localStorage.clear();
  }

// {  useEffect(()=>{
//       if(!!token && cookies.Product.length!=0){
//         cookies.Product.map((product:any)=>{
//           let body = {
//             productId: product.ProductId,
//             colorId: product.ColorId,
//             sizeId: product.SizeId
//         }
//         const Config = {
//             headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
//         }
//           Axios.post(`${process.env.apiUrl}` + `Product/AddCart`, body, Config).then((res) => {
//               console.log(res);
//           })
//         })
//         removeCookie("Product");
//       }
//   },[token, cookies.Product]) }
  
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
               {!show && <Link href="/UserProfileLayout"><Icons.AccountCircle /></Link>  }
               {!show && <Button className={classes.btnR} onClick={LogOut}>log out</Button>}
                <Link href="/Favourites">
               { totalNumberFavourite? <IconButton size="large" color="inherit">
                  <Badge badgeContent={totalNumberFavourite} color="error">
                  <Icons.FavoriteBorder />
                  </Badge>
                </IconButton>:<Icons.FavoriteBorder/>}
                  </Link>

                <Link href="/Cart">
                 {totalNumber ? <IconButton size="large" color="inherit">
                <Badge badgeContent={totalNumber} color="error" >
                    <Icons.ShoppingCart  />
                    </Badge>
                </IconButton>:<Icons.ShoppingCart />}
                 </Link>
              
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
          <SideBar show/>
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
        <Link href="/Favourites">
               { totalNumberFavourite? <IconButton size="large" color="inherit">
                  <Badge badgeContent={totalNumberFavourite} color="error">
                  <Icons.FavoriteBorder />
                  </Badge>
                </IconButton>:<Icons.FavoriteBorder/>}
                  </Link>
        </Box>
        <Box className={classes.mobileIcons}>
        <Link href="/Cart">
                 {totalNumber ? <IconButton size="large" color="inherit">
                <Badge badgeContent={totalNumber} color="error" >
                    <Icons.ShoppingCart  />
                    </Badge>
                </IconButton>:
                <Badge badgeContent={cookies?.Product?.length} color="error" >
                    <Icons.ShoppingCart  />
                    </Badge>}
        </Link>
        </Box>
      </Box>
    </React.Fragment>
  )
}