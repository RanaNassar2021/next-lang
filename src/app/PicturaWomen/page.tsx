'use client'
import React, { useState, useEffect } from "react";
import { Box, Typography, Divider, Checkbox, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Filter from "./Filter/page";
import ImagesCard from "../Card/page";
import Image from "next/image";
import Link from "next/link";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AlertAddToFav from "@/app/AlertAddToFav/page";
import AlertRemovedFromFav from "@/app/AlertRemovedFromFav/page";

// styles
import useStyles from "./PicturaWomen.Styles";


// Material ui
import * as MuiIcons from '@mui/icons-material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';

//Axios
import Axios from 'axios';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function PicturaMen() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;


    const [data, setData] = useState<any>([]);
    const [filtersData, setFiltersData] = useState<any>([]);
    const [categoriesId, SetCategoriesId] = useState<any>([]);
    const [colorId, SetColorId] = useState<any>([]);
    const [isSale, setIsSale] = useState<boolean>(false);
    const [onlyFewLeft, setOnlyFewLeft] = useState<boolean>(false);
    const [prices, setPrices] = useState<boolean>(false);
    const [isDecending, setIsDecending] = useState<boolean>(false);
   const [date, setDate]= useState<boolean>(false);


   const fetchFilter = async () => {
    // Make a GET request using axios
    const response = await Axios.get(`${process.env.apiUrl}` + `Product/DropDownListsDetials`);
    // Update the state with the response data
    setFiltersData(response.data);
    console.log(response.data);
};

    const fetchData = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetAllProduct?gender=female&pageNumber=${1}&pageSize=10&${categoriesId.length != 0 ? 'category=' + categoriesId.join(',') : ''}&${colorId.length != 0 ? 'color=' + colorId.join(',') : ''}&${date && 'sortBy=Date'}&${prices && 'sortBy=Price&isDescending=' + isDecending}&OnlyFewLeft=${onlyFewLeft}&FlashSale=${isSale}`);
        // Update the state with the response data
        setData(response.data);
        console.log(response.data);
    };

    // Call the fetchData function after the initial render
    useEffect(() => {
        fetchData();
    }, [categoriesId, colorId, isSale, onlyFewLeft, date, prices, isDecending]);

    useEffect(() => {
        fetchFilter();
    }, [categoriesId, colorId])

    const concateCategoryId = (Id: number, event: any) => {
        if (event.target.checked) {
            SetCategoriesId((categoriesId: any) => [...categoriesId, Id]);
        } else {
            SetCategoriesId((categoriesId: any) => categoriesId.filter((id: any) => id !== Id));
        }
    }

    const concateColorId = (Id: number, event: any) => {
        if (event.target.checked) {
            SetColorId((colorId: any) => [...colorId, Id]);
        } else {
            SetColorId((colorId: any) => colorId.filter((id: any) => id !== Id));
        }
    }

    const concateIsSale = (event: any) => {
        if (event.target.checked) {
            setIsSale(true);
        } else {
            setIsSale(false)
        }
    }
    const concateOnlyFewLeft = (event: any) => {
        if (event.target.checked) {
            setOnlyFewLeft(true);
        } else {
            setOnlyFewLeft(false)
        }
    }

    const concateNewIn = (event: any) => {
        if (event.target.checked) {
            setDate(true)
        } else {
            setDate(false)
        }
    }

    const IsDecending = () => {
        setIsDecending(true);
        setPrices(true)
    }

    const IsAscending = () => {
        setIsDecending(false);
        setPrices(true)
    }



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

    interface AddToCartInrerface {
        ProductId:string;
        ColorId:number;
        SizeId:number;
    }
    
    const addToCart = (addToCart:AddToCartInrerface, newState:SnackbarOrigin) =>{
        let body ={
            productId: addToCart.ProductId,
            colorId: addToCart.ColorId,
            sizeId:addToCart.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` +`Product/AddCart`, body,Config).then((res)=>{
          console.log(res);
          setState({ ...newState, openTop: true });
          setOpen(true)
        })
        }
    
        interface AddToFavouriteInrerface {
            ProductId:string;
            ColorId:number;
        }
    
        const AddToFavourite = (AddToFavourite: AddToFavouriteInrerface, newState: SnackbarOrigin) =>{
            let body ={
                productId: AddToFavourite.ProductId,
                colorId: AddToFavourite.ColorId,
            }
            const Config = {
                headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
            }
            Axios.post(`${process.env.apiUrl}` +`Product/ChangeFaviorate`, body,Config).then((res)=>{
                console.log(res);
                if(res.data=="Saved Successfully"){
                    setIsFavourite(true);
                    setStateFav({ ...newState, openTopFav: true });
                    setOpenFav(true)
                }else {
                    setIsFavourite(false);
                    setStateFav({ ...newState, openTopFav: false });
                    setOpenFav(true)
                }
               
             })
    
        }

        const handleCategoriesChild = (data:any) => {
            SetCategoriesId(data);
        };
    
        const handleColorChild = (data:any) => {
            SetColorId(data);
        };
    
        const handleDateChild = (data:any) => {
            setDate(data);
        };
    
        const handleSaleChild = (data:any) =>{
            setIsSale(data)
        }
    
        const handleOnlyFewLeftChild = (data: any) =>{
            setOnlyFewLeft(data)
        }
    
        const handleIsDecendingChild = (data: any) =>{
            setIsDecending(data);
            setPrices(data);
        }
    
        const handleIsAscendingChild = (data: any) =>{
            setIsDecending(data);
            setPrices(data);
        }



    return (
        <React.Fragment>
            <Header></Header>
            <Box className={classes.filterMobile} sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Typography variant="h3">filter</Typography>
                <Filter sendCategories={handleCategoriesChild} sendColors={handleColorChild} sendDate={handleDateChild} sendSale={handleSaleChild} sendOnlyFewLeft={handleOnlyFewLeftChild} sendIsDescending={handleIsDecendingChild} sendIsAcending={handleIsAscendingChild} />
            </Box>
            <Box className={classes.container}>
                <Box className={classes.filterContainer} sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Typography variant="h4"> <Icons.FilterList></Icons.FilterList> filter</Typography>
                    <Divider></Divider>
                    <Typography variant="h3"> Catergories </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    {filtersData?.categories?.map((item: any, index: number) => {
                        return (
                            <Box className={classes.options} key={index}>
                                <Checkbox {...label} onClick={(e) => concateCategoryId(item.categoryId, e)} />
                                <Typography>{item.name}</Typography>
                            </Box>
                        )
                    })}
                    <Divider></Divider>
                    <Typography variant="h3"> Color </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    {
                        filtersData?.colors?.map((item: any, index: number) => {
                            return (
                                <Box className={classes.options} key={index}>
                                    <Checkbox {...label} onClick={(e) => concateColorId(item.colorId, e)} />
                                    <Typography>{item.name}</Typography>
                                </Box>
                            )
                        })
                    }
                    <Typography variant="h4"> <Icons.Sort></Icons.Sort> sort by</Typography>
                    <Divider></Divider>
                    <Box className={classes.options}>
                        <Checkbox {...label}  onClick={(e) => concateNewIn(e)} />
                        <Typography>New In</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} onClick={(e) => concateIsSale(e)} />
                        <Typography>Sale</Typography>
                    </Box>
                    <Box className={classes.options}>
                        <Checkbox {...label} onClick={(e) => concateOnlyFewLeft(e)} />
                        <Typography>Only Few Left</Typography>
                    </Box>

                    <Typography variant="h3"> Price </Typography>
                    <Divider style={{ width: '40px' }}></Divider>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group">
                        <Box className={classes.options}>
                            <FormControlLabel value="low" control={<Radio />} label="Low to High" onClick={IsAscending} className={classes.radio} sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />
                        </Box>
                        <Box className={classes.options}>
                            <FormControlLabel value="High" control={<Radio />} label="High to Low" onClick={IsDecending} className={classes.radio} sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />

                        </Box>
                    </RadioGroup>
                </Box>
                <Box className={classes.cards}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        { data.map((data: any, index: number) => {
                            return (
                                <Grid item xs={2} sm={3} md={3} key={index}>
                                    <Card sx={{ maxWidth: 345 }} onMouseOver={e => handleMouseOver(data.productId, index)} onMouseOut={e => handleMouseOut(data.productId, index)}
                                        className={classes.card}>
                                         {data.hoverImage ? ( 
                                            <Box>
                                                 <Link href={'/cardDetails/' + data.productId +"/"+ 1}>
                                                <Box className={classes.productDetailsLink}></Box>
                                                </Link>
                                                <ImagesCard images={data?.images}></ImagesCard>
                                            </Box>

                                        ): (
                                            <Box className={classes.cardImage}>
                                                <Image src={data.images[0]} alt="product picture" unoptimized height={250} width={270}  />
                                            </Box>
                                       )}

                                        {data.isMouseOver ? (<Box className={classes.hoverBox}>
                                             <Box  sx={{display:'flex', alignItems:'center'}}>
                                             {isFavourite || data?.isFavorite ?
                                <Box>
                                 <Icons.Favorite  sx={{color:'red'}} onClick={()=>AddToFavourite({ProductId:data.productId, ColorId:data.colorId},{vertical: 'top', horizontal: 'right'})}></Icons.Favorite>
                                    <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                        <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                             <AlertAddToFav/>
                                        </Alert>
                                    </Snackbar>
                                </Box>:
                                <Box>
                                 <Icons.FavoriteBorder onClick={()=>AddToFavourite({ProductId:data.productId, ColorId:data.colorId},{vertical: 'top', horizontal: 'right'})}/>
                                 <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                        <Alert onClose={handleCloseAlertFav} severity="error" sx={{ width: '100%' }}>
                                            <AlertRemovedFromFav/>
                                        </Alert>
                                    </Snackbar>
                                 </Box>}
                                        </Box>
                                            <Box>
                                                {data.isClicked ? (
                                                <Box className={classes.sizes}>
                                                {data.sizes.map((siz:any, index:any)=>{
                                                      return (
                                                        <Box>
                                                        <Box className={classes.sizeBox} key={siz.sizeId}onClick={()=>addToCart({ProductId:data.productId, ColorId:data.colorId, SizeId:siz.sizeId},{vertical: 'top', horizontal: 'right'})}>
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
                                            </Box>
                                           )
                                        : (<Box className={classes.cartMobile}><LocalMallIcon></LocalMallIcon> <Button className={classes.btnCart} onClick={e => { handleAddToCart(data.productId) }} sx={{ color: 'white' }}>Add to Cart</Button></Box>)
                                        }

                                    </Box>
                                </Box>) : null}

                                        {data.onlyFewLeft ? (
                                                <Box className={classes.fewLeftBox}>
                                                <Typography sx={{fontSize:'10px'}}>only few left</Typography>
                                                </Box>
                                            ): null}

                                            {data.isSale ? (
                                                <Box>
                                                <Box className={classes.saleBox}>
                                                    <Typography sx={{fontSize:'14px', color:'white'}}>Sale</Typography>
                                                </Box>
                                                 <CardContent className={classes.cardContent}>
                                                 <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                     {data.title}
                                                 </Typography>
                                                 <Box className={classes.cardFooter}>
                                                     <Typography color="text.secondary">{data.category}</Typography>
                                                     <Box sx={{ display:'flex', gap:'10px'}}>
                                                     <Typography sx={{opacity:0.8, textDecoration:'line-through'}}>{data.orginalPrice}</Typography>
                                                     <Typography sx={{color:'#EA4335'}}>{data.currentPrice}</Typography>
                                                     </Box>
                                                 </Box>
                                             </CardContent>
                                             </Box>
                                            ): <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="div" className={classes.cardTitle}>
                                                {data.title}
                                            </Typography>
                                            <Box className={classes.cardFooter}>
                                                <Typography color="text.secondary">{data.category}</Typography>
                                                <Typography>{data.orginalPrice}</Typography>
                                            </Box>
                                        </CardContent>}
                                    
                                       
                                    </Card>
                                </Grid>
                            )
                        })
                       }

                    </Grid>
                    <Box sx={{ marginTop: '20px' }}>
                    </Box>
                </Box>
            </Box>

            <Footer></Footer>
        </React.Fragment>
    )
}