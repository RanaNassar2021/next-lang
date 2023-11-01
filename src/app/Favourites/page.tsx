'use client';
import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Typography, Button, Menu, MenuItem, Divider, Grid, Card, CardContent } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import ImagesCard from "../Card/page";
import Image from "next/image";
import Link from "next/link";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { CookiesProvider, useCookies } from "react-cookie";

// styles
import useStyles from "./favourites.Styles";

//Axios
import Axios from 'axios';

// Material ui Icons
import * as MuiIcons from '@mui/icons-material';


export default function Favourites() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;

    const [data, setData] = useState<any>([]);
    const [token, SetToken] = useState<any>(localStorage.getItem("Token"));
    const [cookies, setCookie] = useCookies(["Product"]);
    const [favouriteCookies, setFavouriteCookies] = useCookies(["FavouriteProduct"]);

    useEffect(()=>{
        SetToken(localStorage.getItem("Token"));
      },[localStorage.getItem("Token")])

    const fetchData = async () => {
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/FavoriteList?PageNumber=1&PageSize=10&Location=egypt`, Config);
        setData(response.data);
        console.log(response.data);

    }

    useEffect(() => {
        !!token &&  fetchData();
    }, [token]);
    
    useEffect(()=>{
        setData([]);
        if((token == undefined || token == null) && favouriteCookies?.FavouriteProduct?.length!=0){
            favouriteCookies?.FavouriteProduct?.map((product:any)=>{
                if(!!data.filter((item:any)=>item.productId !== product.productId  )){
                    Axios.get(`${process.env.apiUrl}` + `Product/GetProductDetials?Id=${product.ProductId}&ColorId=${product.ColorId}`).then((res)=>{
                        if(res.status=200){
                            setData((prev:any)=>[...prev, {
                                productId:res.data.productId,
                                sizeName:res.data.sizes.filter((item:any) => item.sizeId === product.SizeId).map((item:any) => item.name),
                                colorName:res.data.selectedColorName,
                                images:res.data.images,
                                productTitle:res.data.title,
                                Category : res.data.category,
                                CurrentPrice:res.data.currentPrice,
                                OrignalPrice: res.data.orginalPrice,
                                sizes:res.data.sizes,
                                colorId:product.ColorId
                            }])

                          
                           

                        }
                      });

                }
               
            })
        }
      
    
    },[token, favouriteCookies.FavouriteProduct])

    //  data.filter((value:any, index:any, self:any) => {
    //                 setData(()=>{ index ===
    //                  self.findIndex((t:any) => t.id === value.id && t.name === value.name)
    //                  })
    //                  console.log("can you see me?", data)
    //            })


   // console.log("cookies data: ", favouriteCookies.FavouriteProduct)

   // console.log("data", data);





    const handleMouseOver = (id: any, index: any) => {
        setData((prev: any) => prev.map((item: any, indexPrev: any) => {
            if (item.productId == id && index == indexPrev) {
                item.isMouseOver = true;
                item.hoverImage = true;
            }
            return item
        }))
    }


    const handleMouseOut = (id: any, index: any) => {
        setData((prev: any) => prev.map((item: any, indexPrev: any) => {
            if (item.productId == id && index == indexPrev) {
                item.isMouseOver = false;
                item.hoverImage = false;
            }
            return item
        }))
    }


    const [cart, setCart] = useState(false);

    function handleAddToCart(id: any) {
        setCart(true);
        setData((prev: any) => prev.map((x: any) => {
            if (x.productId == id && cart == true) x.isClicked = true;
            return x
        }))
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    
     {/* Alerts */ }
     const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    interface State extends SnackbarOrigin {
        openTop: boolean;
    }
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState<State>({
        openTop: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, openTop } = state;

    interface StateFavs extends SnackbarOrigin{
        openTopFav: boolean;
    }
    const [isFavourite, setIsFavourite] = useState<any>(false);
    const [openFav, setOpenFav] = React.useState(false);
    const[stateFav, setStateFav] = React.useState<StateFavs>({
        openTopFav:false,
        vertical: 'top',
        horizontal: 'right',
    })


    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setState({ ...state, openTop: false });
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseAlertFav = (event?: React.SyntheticEvent | Event, reason?: string) => {
        setStateFav({ ...stateFav, openTopFav: false });
        if (reason === 'clickaway') {
            return;
        }

        setOpenFav(false);
    };

    interface RemoveFavouteOrAddCart {
        ProductId: string;
        ColorId: number;
        SizeId?: number;
    }



    const RemoveFromFavourite = (removeFavoute: RemoveFavouteOrAddCart, newState: SnackbarOrigin) => {
        let body = {
            productId: removeFavoute.ProductId,
            colorId: removeFavoute.ColorId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        if(!!token){
            Axios.post(`${process.env.apiUrl}` + `Product/ChangeFaviorate`, body, Config).then((res) => {
                setIsFavourite(true);
                setStateFav({ ...newState, openTopFav: true });
                setOpenFav(true)
                setData(data.filter((item: any) => {
                    return item.productId != removeFavoute.ProductId
                }));
            })
        }else{
            const myArray = favouriteCookies.FavouriteProduct || [];
            const updatedArray = myArray.filter((item:any)=>(item.ProductId != removeFavoute.ProductId && item.ColorId != removeFavoute.ColorId));
            //setData(data.filter((item:any)=>item.ProductId !== remove.ProductId));
            setFavouriteCookies('FavouriteProduct', updatedArray, { path: '/' });
            // setData(data.filter((item: any) => {
            //         return item.productId != removeFavoute.ProductId
            // }))
        }
       
    }

    const addToCart = (addToCart: RemoveFavouteOrAddCart, newState:SnackbarOrigin) => {
        let body = {
            productId: addToCart.ProductId,
            colorId: addToCart.ColorId,
            sizeId: addToCart.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        if(!!token){
            Axios.post(`${process.env.apiUrl}` + `Product/AddCart`, body, Config).then((res) => {
                setState({ ...newState, openTop: true });
                setOpen(true)
                setData(data.filter((item: any) => {
                    return item.productId != addToCart.ProductId
                }))
            })
        } else{
            if(cookies.Product?.filter((item:any)=>item.ProductId === addToCart.ProductId).length == 0 || cookies.Product?.filter((item:any)=>item.ProductId === addToCart.ProductId).length == undefined ){
                const myArray = cookies.Product || [];
                let updatedArray = [...myArray, addToCart]
                setState({ ...newState, openTop: true });
                setOpen(true)
                setCookie('Product', updatedArray, { path: '/' });
                console.log(favouriteCookies?.FavouriteProduct.filter((item: any) => {
                    return item.productId != addToCart.ProductId
                }));
                
                setData(favouriteCookies?.FavouriteProduct.filter((item: any) => {
                    return item.productId != addToCart.ProductId
                }))
            }else{
                return null;
            }
        }
      
    }
    

    const[selectedSize, setSelectedSize] = useState(false);

    const handleSelectedSize = ()=> {
        setSelectedSize(true)
    }


    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.container}>
                <Box className={classes.title}>
                    <Typography variant="h6"> my favourites ({data ? data.length : 0} items) </Typography>
                    <Box>
                        <Button sx={{ color: 'black' }}
                            id="basic-button"
                            aria-controls={opens ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={opens ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            sort by
                            <Icons.ArrowDropDown></Icons.ArrowDropDown>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={opens}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>New Trends</MenuItem>
                            <MenuItem onClick={handleClose}>Ascending Prices</MenuItem>
                            <MenuItem onClick={handleClose}>Decending Prices</MenuItem>
                        </Menu>
                    </Box>
                </Box>
                <Divider className={classes.divider}></Divider>

                <Box className={classes.cardsContainer}>
                    <Box className={classes.cards}>
                        <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {data?.map((data: any, index: number) => {
                                return (
                                    <Grid item xs={2} sm={4} md={4} key={index}>
                                        <Card sx={{ maxWidth: 345 }} onMouseOver={e => handleMouseOver(data.productId, index)} onMouseOut={e => handleMouseOut(data.productId, index)}
                                            className={classes.card}>
                                            {data.hoverImage ? (
                                                <Box>
                                                    <Link href={'/cardDetails/' + data.productId + "/" + 1}>
                                                        <Box className={classes.productDetailsLink}></Box>
                                                    </Link>
                                                    <ImagesCard images={data?.images}></ImagesCard>
                                                </Box>

                                            ) : (
                                                <Box className={classes.cardImage}>
                                                    <Image src={data && data.images[0]} alt="product picture" unoptimized width={300} height={260} />
                                                </Box>
                                            )}

                                            {data.onlyFewLeft ? (
                                                <Box className={classes.fewLeftBox}>
                                                    <Typography sx={{ fontSize: '10px' }}>only few left</Typography>
                                                </Box>
                                            ) : null}

                                            {data.isSale ? (
                                                <Box>
                                                    <Box className={classes.saleBox}>
                                                        <Typography sx={{ fontSize: '14px', color: 'white' }}>Sale</Typography>
                                                    </Box>
                                                    <CardContent className={classes.cardContent}>
                                                        <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                            {data.productTitle}
                                                        </Typography>
                                                        <Box className={classes.cardFooter}>
                                                            <Typography color="text.secondary">{data.Category}</Typography>
                                                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                                                <Typography sx={{ color: '#EA4335' }}>{data.CurrentPrice}</Typography>
                                                            </Box>
                                                        </Box>
                                                    </CardContent>
                                                </Box>
                                            ) : <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                    {data.productTitle}
                                                </Typography>
                                                <Box className={classes.cardFooter}>
                                                    <Typography color="text.secondary">{data.Category}</Typography>
                                                    <Typography>{data.CurrentPrice}</Typography>
                                                </Box>
                                            </CardContent>}
                                        </Card>
                                            {selectedSize?(
                                            <Box  className={classes.sizes}>
                                                {data?.sizes?.map((siz:any, index:any)=>{
                                                       return (
                                                        <Box key={index}>
                                                         <Box className={classes.sizeBox} key={siz.sizeId} onClick={()=>addToCart({ProductId:data.productId, ColorId:data.colorId, SizeId:siz.sizeId},{vertical: 'top', horizontal: 'right'})}>
                                                         {siz.name}
                                                         </Box>
                                                         <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                                            <Alert onClose={handleCloseAlert} severity="success" sx={{ width: '100%' }}>
                                                                 product added succussfully to Cart
                                                            </Alert>
                                                        </Snackbar>
                                                         </Box>
                                                        )
                                                 })}
                                            </Box> ):(  <Button sx={{ display: 'block', width: '100%', backgroundColor: '#FF6F61', color: 'black', marginTop: '2ch', fontWeight: 500 }} onClick={handleSelectedSize}>Add to cart</Button>)}

                                        <Button sx={{ display: 'block', width: '100%', backgroundColor: 'white', color: '#FF6F61', marginTop: '2ch', fontWeight: 600 }} onClick={() => RemoveFromFavourite({ ProductId: data.productId, ColorId: data.colorId },{vertical: 'top', horizontal: 'right'})}>Remove</Button>
                                        <Snackbar open={openFav} autoHideDuration={5000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                            <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                                product removed succussfully from favourites
                                            </Alert>
                                        </Snackbar>
                                    </Grid>
                                )
                            })
                            }

                        </Grid>
                    </Box>
                </Box>

            </Box>
            <Footer></Footer>
        </React.Fragment>
    )
}