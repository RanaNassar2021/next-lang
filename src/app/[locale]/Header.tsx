'use client'
import React, { useState, useEffect } from 'react'
import { Box, Typography, Button, Divider, Menu, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import logo from './Assets/Images/logo.png';
import Image from 'next/image';
import flashSale from './Assets/Images/flashSale.png';
import egyptFlag from './Assets/Images/egyptFlag.png';
import KuwFlag from './Assets/Images/kuwait.png';
import Link from 'next/link';
import SideBar from './SideBar/SideBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { CookiesProvider, useCookies } from "react-cookie";
import { useRouter } from 'next/navigation';
import {useTranslations} from 'next-intl';

//import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



//Axios
import Axios from 'axios';



// material UI icons
import * as MuiIcons from '@mui/icons-material';

//styles
import useStyles from './Header.Styles';



export default function Header(props: any) {



  const { classes } = useStyles();
  const Icons: any = MuiIcons;
  const [token, SetToken] = useState<any>(localStorage.getItem("Token"));
  const [show, SetShow] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [curr, setCurr] = React.useState<null | HTMLElement>(null);
  const [coun, setCoun] = React.useState<null | HTMLElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>('Egypt');
  const [Lang, setLang] = useState<any>('Egypt');
  const [control, setControl] = React.useState<null | HTMLElement>(null);
  const [totalNumber, SetTotalNumber] = useState<number>();
  const [cookies, setCookie, removeCookie] = useCookies(["Product"]);
  const [favouriteCookies, setFavouriteCookies, removeFavouriteCookies] = useCookies(["FavouriteProduct"]);
  const [totalNumberFavourite, SetTotalNumberFavourite] = useState<number>();

  const [currency, setCurrency] = useState<any>('Egypt');
  const [curName, setCurName] = useState<string>('EGP');
  const [language, setLanguage] = useState('en');
  const [langName, setLangName] = useState<string>('English');
 

  const t = useTranslations('Index');
  const router = useRouter();
 


  useEffect(() => {
    document.documentElement.setAttribute('dir', localStorage.getItem("Lang") === 'ar' ? 'rtl' : 'ltr');
  }, [localStorage.getItem("Lang")]);


  useEffect(()=>{
    props?.sendCurrency(currency)
  },[currency])


  const handleLanguageChange = (newLanguage: any) => {
    setCurr(null);
    setControl(null);
    if (newLanguage === 'ar') {
      setLanguage("ar");
      setLangName("Arabic");
      localStorage.setItem("Lang", "ar");
    } else {
      setLanguage("en");
      setLangName("English");
      localStorage.setItem("Lang", "en");
    }
  };

  const handleCurrencyEgy = () => {
    setSelectedCountry('Egypt');
    setCurrency('Egypt');
    setCurName('EGP');
    setCoun(null)
  }

  const handleCurrencyKuw = () => {
    setSelectedCountry('kuwait');
    setCurrency('kuwait');
    setCurName('KWD');
    setCoun(null)

  }


  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openControl = Boolean(control);

  const handleClickControl = (event: React.MouseEvent<HTMLButtonElement>) => {
    setControl(event.currentTarget);
  };

  const handleCloseControl = () => {
    setControl(null);
  };

  const openCountry = Boolean(coun);

  const handleClickCountry = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCoun(event.currentTarget);
  };

  const handleCloseCountry = ()=>{
    setCoun(null);
  }

  const openCurrency = Boolean(curr);
  const handleClickCurrency = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurr(event.currentTarget);

  };
  const handleCloseCurrency = () => {
    setCurr(null);
  };


  const fetchData = async () => {

    const Config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
    }

    if (!!token) {
      const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetUserCart?PageNumber=1&PageSize=10`, Config);
      const responseFavourite = await Axios.get(`${process.env.apiUrl}` + `Product/FavoriteList?PageNumber=1&PageSize=10&Location=egypt`, Config);

      SetTotalNumber(response.data.length);
      SetTotalNumberFavourite(responseFavourite.data.length)
    } else {
      SetTotalNumber(cookies?.Product?.length);
      SetTotalNumberFavourite(favouriteCookies?.FavouriteProduct?.length);
    }
    // Make a GET Total number of cart and favourite in case of login

  };

  useEffect(() => {
    SetToken(localStorage.getItem("Token"));
  }, [localStorage.getItem("Token")])

  useEffect(() => {
    fetchData();
  }, [totalNumber, totalNumberFavourite]);

  useEffect(() => {
    if (token != null && token != undefined) {
      SetShow(false);
    }
  }, [token, totalNumber, totalNumberFavourite])

  const LogOut = () => {
    localStorage.clear();
    router.push('/');
  }

   
  useEffect(()=>{    
    if(!!token && !!cookies.Product &&cookies.Product.length!=0){
        cookies.Product.map((product:any)=>{
          let body = {
            productId: product.ProductId,
            colorId: product.ColorId,
            sizeId: product.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
          Axios.post(`${process.env.apiUrl}` + `Product/AddCart`, body, Config).then((res) => {
              console.log(res);
          })
        })
        removeCookie("Product");
      }
  },[token, cookies.Product]);

  useEffect(()=>{    
    if(!!token && !!favouriteCookies.FavouriteProduct && favouriteCookies.FavouriteProduct.length!=0){
        favouriteCookies.FavouriteProduct.map((favouriteProduct:any)=>{
        let body = {
            productId: favouriteProduct.ProductId,
            colorId: favouriteProduct.ColorId,
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` + `Product/ChangeFaviorate`, body, Config).then((res) => {
            console.log(res);
            if (res.data == "Saved Successfully") {

            } else {
                console.log("removed");  
            }
          })
        })
        removeFavouriteCookies("FavouriteProduct")  
  }},[token, favouriteCookies.FavouriteProduct]);

  
  return (
    <React.Fragment>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box className="flex flex-col">
          <Box className={classes.header}>
            <Box className={classes.topHeader}>
              <Link href="/Contact"><Button className={classes.btn}>{t('contact')}</Button> </Link>
              <Link href="/AboutUs"> <Button className={classes.btn}>{t('about_us')}</Button> </Link>
              <Button className={classes.btn} aria-controls={openControl ? 'control-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openControl ? 'true' : undefined}
                onClick={handleClickControl}>
               {(selectedCountry=="Egypt"?<Image src={egyptFlag} width={20} alt='flag' style={{ marginRight: 10 }} />:<Image src={KuwFlag} width={20} alt='flag' style={{ marginRight: 10 }} />)} {selectedCountry} {langName} {curName} <Icons.ArrowDropDown />
              </Button>
              <Menu
                id="control-menu"
                anchorEl={control}
                open={openControl}
                onClose={handleCloseControl}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Box sx={{ width: '180px' }}>
                  <MenuItem >
                    <Button sx={{ color: 'black' }} aria-controls={openCountry ? 'country-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openCountry ? 'true' : undefined}
                      onClick={handleClickCountry}> {(selectedCountry=="Egypt"?<Image src={egyptFlag} width={20} alt='flag' style={{ marginRight: 10 }} />:<Image src={KuwFlag} width={20} alt='flag' style={{ marginRight: 10 }} />)} {selectedCountry}</Button>
                      <Menu
                        id="country-menu"
                        anchorEl={coun}
                        open={openCountry}
                        onClose={handleCloseCountry}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}>
                        <Box sx={{ width: '170px' }}>
                          <MenuItem onClick={handleCurrencyEgy}>
                          <Image src={egyptFlag} width={20} alt='flag' style={{ marginRight: 10 }} />  {t('egypt')} </MenuItem>
                          <MenuItem onClick={handleCurrencyKuw}>   <Image src={KuwFlag} width={20} alt='flag' style={{ marginRight: 10 }} />  {t('kuwait')} </MenuItem>
                        </Box>
                      </Menu>
                  </MenuItem>

                  <MenuItem>
                    <Button sx={{ color: 'black' }} aria-controls={openCurrency ? 'language-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={openCurrency ? 'true' : undefined}
                      onClick={handleClickCurrency}> {langName} </Button>
                      <Menu
                        id="language-menu"
                        anchorEl={curr}
                        open={openCurrency}
                        onClose={handleCloseCurrency}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}>
                        <Box sx={{ width: '170px', paddingLeft:'5px' }}>
                          <MenuItem onClick={() => handleLanguageChange("en")}> {t('english')} </MenuItem>
                          <MenuItem onClick={() => handleLanguageChange('ar')}> {t('Arabic')} </MenuItem>
                        </Box>
                      </Menu>

                  </MenuItem>
                </Box>
              </Menu>

            
              <Box sx={{ marginTop: '4.5ch', paddingLeft: '1ch' }}>
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
                {show && <Link href="/Registeration"><Button className={classes.btnR}>{t('sign_up')}</Button></Link>}
                {show && <Link href="/LogIn"><Button className={classes.btnR}>{t('log_in')}</Button> </Link>}
                {!show && <Link href="/UserProfileLayout"><Icons.AccountCircle /></Link>}
                {!show && <Button className={classes.btnR} onClick={LogOut}>{t('log_out')}</Button>}
                <Link href="/Favourites">
                  {totalNumberFavourite ? <IconButton size="large" color="inherit">
                    <Badge badgeContent={totalNumberFavourite} color="error">
                      <Icons.FavoriteBorder />
                    </Badge>
                  </IconButton> : <Icons.FavoriteBorder />}
                </Link>

                <Link href="/Cart">
                  {totalNumber ? <IconButton size="large" color="inherit">
                    <Badge badgeContent={totalNumber} color="error" >
                      <Icons.ShoppingCart />
                    </Badge>
                  </IconButton> : <Icons.ShoppingCart />}
                </Link>

              </Box>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.bottomHeader}>
            <Button className={classes.btnB}> <Link href="/"> {t('home')}</Link></Button>
            <Button className={classes.btnB} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>{t('shop')}</Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}> <Link href="/"> {t('The_Designer')}</Link> </MenuItem>
              <MenuItem onClick={handleClose}> <Link href='/PicturaDesigns'>{t('pictura_designs')}</Link> </MenuItem>
            </Menu>
            <Button className={classes.btnB}><Link href="/BestSeller"> {t('best_seller')}</Link></Button>
            <Button className={classes.btnB}><Link href="/NewTrends">  {t('new_trends')}</Link></Button>
            <Button className={classes.btnB}> <Link href="/#VoteWin"> {t('vote_win')}</Link></Button>
            <Button className={classes.btnB}> <Link href="/FlashSale"> <Image src={flashSale}
              layout='responsive'
              alt="Picture of flash sale logo" /> </Link></Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} className={classes.mobile}>
        <Box className={classes.mobileIcons}>
          <SideBar show />
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
            {totalNumberFavourite ? <IconButton size="large" color="inherit">
              <Badge badgeContent={totalNumberFavourite} color="error">
                <Icons.FavoriteBorder />
              </Badge>
            </IconButton> : <Badge badgeContent={favouriteCookies?.FavouriteProduct?.length} color="error" >
              <Icons.FavoriteBorder /></Badge>}
          </Link>
        </Box>
        <Box className={classes.mobileIcons}>
          <Link href="/Cart">
            {totalNumber ? <IconButton size="large" color="inherit">
              <Badge badgeContent={totalNumber} color="error" >
                <Icons.ShoppingCart />
              </Badge>
            </IconButton> :
              <Badge badgeContent={cookies?.Product?.length} color="error" >
                <Icons.ShoppingCart />
              </Badge>}
          </Link>
        </Box>
      </Box>
    </React.Fragment>
  )
}

