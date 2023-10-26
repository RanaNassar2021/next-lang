'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stepper, Step, StepLabel, TextField, Divider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import AlertAddToFav from "@/app/AlertAddToFav/page";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CookiesProvider, useCookies } from "react-cookie";


// images
import masterCard from '../Assets/Images/visa.png';
import paypal from '../Assets/Images/paypal.jpg';
import fawry from '../Assets/Images/fawry.png';

// styles
import useStyles from "./Cart.Styles";

//Axios
import Axios from 'axios';

// Material ui
import DeleteIcon from '@mui/icons-material/Delete';
import { Token } from "@mui/icons-material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Cart() {
    const { classes } = useStyles();
    const [token, SetToken] = useState<any>(localStorage.getItem("Token"));

    // stepper

    const steps = [
        'Cart',
        (token == null || token == undefined) ? '' :'Sign In',
        'Delivery',
        'Payment',
        'Confirmation'];
    const IndexSteper = [
        0,
        (token == null || token == undefined) ? 1:10,
        (token == null || token == undefined) ? 2:1,
        (token == null || token == undefined) ? 3:2,
        (token == null || token == undefined) ? 4:3
    ]
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [TotlalPrice, setTotlalPRice] = useState<any>();
    const [cookies, setCookie,removeCookie] = useCookies(["Product"]);
    const [activeSteperIndex, setActiveSteperIndex] = useState<number>(0);

    useEffect(()=>{
        SetToken(localStorage.getItem("Token"));
      },[localStorage.getItem("Token")])

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveSteperIndex(IndexSteper.filter((item)=>item != 10 ).length - (activeStep-1) )
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };


    // Get user Cart

    const [data, setData] = useState<any>([]);
    const fetchData = async () => {
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/GetUserCart?PageNumber=1&PageSize=10`, Config);
        // Update the state with the response data
        setData(response.data);
        let x: any = 0;
        response.data.map((item: any) => {
            x = x + (item.price * item.quantity);
        })
        setTotlalPRice(x);
        console.log(response.data)
    };


    // Call the fetchData function after the initial render
    useEffect(() => {
        !!token && fetchData();
    }, [token]);

    useEffect(()=>{
        if((token == undefined || token == null) && cookies?.Product?.length!=0){
            cookies?.Product?.map((product:any)=>{
                if(!!data.filter((item:any)=>item.productId !== product.ProductId)){
                    Axios.get(`${process.env.apiUrl}` + `Product/GetProductDetials?Id=${product.ProductId}&ColorId=${product.ColorId}`).then((res)=>{
                        if(res.status=200){
                            setData((prev:any)=>[...prev, {
                                productId:res.data.productId,
                                sizeName:res.data.sizes.filter((item:any) => item.sizeId === product.SizeId).map((item:any) => item.name),
                                colorName:res.data.selectedColorName,
                                productImage:res.data.images[0],
                                productTitle:res.data.title,
                                price:res.data.currentPrice,
                                sizeId:product.SizeId,
                                colorId:product.ColorId
                            }])
                        }
                      });
                }
            })
        }
    
    },[token, cookies.Product])

    useEffect(()=>{
        let x: any = 0;
        if((token == undefined || token == null) && cookies?.Product?.length!=0){
            data && data?.map((item: any) => {
                x = x + item.price;
            })
            setTotlalPRice(x);
        }
        console.log(TotlalPrice)
    },[data, token, cookies?.Product])

    // let x: any = 0;
    // data?.map((item: any) => {
    //      x = x + (item.price);
    //  })
    //  setTotlalPRice(x);
    //  console.log(TotlalPrice)





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

    interface StateFavs extends SnackbarOrigin {
        openTopFav: boolean;
    }
    const [isFavourite, setIsFavourite] = useState<any>(false);
    const [openFav, setOpenFav] = React.useState(false);
    const [stateFav, setStateFav] = React.useState<StateFavs>({
        openTopFav: false,
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


    // Remove from user Cart

    interface RemoveFromCartInterface {
        ProductId: string;
        ColorId: number;
        SizeId: number;
    }


    const RemoveFromCart = (remove: RemoveFromCartInterface, newState: SnackbarOrigin) => {
        if(!!token){
             const Config = {
                headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
             }
            Axios.delete(`${process.env.apiUrl}` + `Product/RemoveFromCart?ProductId=${remove.ProductId}&ColorId=${remove.ColorId}&SizeId=${remove.SizeId}`, Config).then((res) => {
                setState({ ...newState, openTop: true });
                setOpen(true)
                // setData(data.filter((item: any) => {
                //     return item.productId != remove.ProductId
                // }))
                fetchData();
            })
        }else
        {
            const myArray = cookies.Product || [];
            const updatedArray = myArray.filter((item:any)=>(item.ProductId != remove.ProductId && item.ColorId != remove.ColorId));
            //setData(data.filter((item:any)=>item.ProductId !== remove.ProductId));
            setCookie('Product', updatedArray, { path: '/' });
            setData(data.filter((item: any) => {
                    return item.productId != remove.ProductId
            }))
        }
    }

    // Increase Quantity
    interface AddToFavouriteInrerface {
        ProductId: string;
        ColorId: number;
        SizeId?: number;
    }
    const IncreaseQunatity = (increase: AddToFavouriteInrerface) => {
        let body = {
            productId: increase.ProductId,
            colorId: increase.ColorId,
            sizeId: increase.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.put(`${process.env.apiUrl}` + `Product/IncreaseOrderQuantity?Increase=${true}`, body, Config).then((res) => {
            fetchData();
        })
    }

    const DecreaseQunatity = (increase: AddToFavouriteInrerface) => {
        let body = {
            productId: increase.ProductId,
            colorId: increase.ColorId,
            sizeId: increase.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.put(`${process.env.apiUrl}` + `Product/IncreaseOrderQuantity?Increase=${false}`, body, Config).then((res) => {
            fetchData();
        })
    }


    // Add to Favourite


    const AddToFavourite = (AddToFavourite: AddToFavouriteInrerface, newState: SnackbarOrigin) => {
        let body = {
            productId: AddToFavourite.ProductId,
            colorId: AddToFavourite.ColorId,
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` + `Product/ChangeFaviorate`, body, Config).then((res) => {
            console.log(res);
            setData(data.filter((item: any) => {
                return item.productId != AddToFavourite.ProductId
            }))
            if (res.data == "Saved Successfully") {
                setIsFavourite(true);
                setStateFav({ ...newState, openTopFav: true });
                setOpenFav(true);
                fetchData();
            } else {
                console.log("removed")
                setIsFavourite(false);
                setStateFav({ ...newState, openTopFav: false });
                setOpenFav(true)
            }

        })

    }

    const [promo, setPromo] = useState("");
    const handlePromoCode = (e: { target: { value: string } }) => {
        setPromo(e.target.value)
    }

    interface promoCode {
        promo: string
    }

    const [discount, SetDiscount] = useState<any>(0);
    const CheckPromoCode = (Promo: promoCode) => {
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.get(`${process.env.apiUrl}` + `Coupon/DiscountPercentage?CouponCode=${Promo.promo}`, Config).then((res: any) => {
            console.log(res)
            if (res.status == 200) {
                SetDiscount(res?.data * TotlalPrice);
            } else {
                SetDiscount(0);
            }
        }).catch(() => {
            SetDiscount(undefined);
        })
    }


    const [delivery, setDelivery] = useState<any>(50);

    const [country, setCountry] = React.useState('');
    const handleCountryChange = (event: { target: { value: string } }) => {
        setCountry(event.target.value);
    };
    const [city, setCity] = React.useState('');
    const handleCityChange = (event: { target: { value: string } }) => {
        setCity(event.target.value);
    };

    return (
        <React.Fragment>
            <Header></Header>

            {/* stepper */}

            <Box className={classes.stepper}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: {
                            optional?: React.ReactNode;
                        } = {};

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        if(label?.trim() !== "" ){
                            return (
                                <Step key={label} {...stepProps}>
                                   <StepLabel {...labelProps}>{label}</StepLabel>
                               </Step>
                           );
                        }                        
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                ) : (


                    <React.Fragment>
                        {activeStep === IndexSteper[0] &&
                            <Box className={classes.container}>
                                <Box className={classes.leftContent}>
                                    <Typography variant="h5">My Shopping Cart ({data ? data.length : 0} items)</Typography>
                                    {data.map((data: any, index: number) => {
                                        return (
                                            <Box className={classes.card} key={index}>
                                                <Box>
                                                    <Image src={data.productImage} width={200} height={100} alt="product image" />
                                                </Box>
                                                <Box sx={{ width: '60%' }}>
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography variant="h6">{data.productTitle}</Typography>
                                                        <DeleteIcon sx={{ marginTop: '10px', marginRight: '10px' }} onClick={() => RemoveFromCart({ ProductId: data.productId, ColorId: data.colorId, SizeId: data.sizeId }, { vertical: 'top', horizontal: 'right' })}></DeleteIcon>
                                                    </Box>
                                                    <Box>
                                                        <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                                            <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
                                                                product Removed succussfully from Cart
                                                            </Alert>
                                                        </Snackbar>
                                                    </Box>
                                                    <Typography>Price: {data.price}</Typography>
                                                    <Typography>Color: {data.colorName}</Typography>
                                                    <Typography>Size: {data.sizeName}</Typography>
                                                    <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                                        <Box>
                                                            <Typography sx={{ textDecoration: "underline" }} onClick={() => AddToFavourite({ ProductId: data.productId, ColorId: data.colorId }, { vertical: 'top', horizontal: 'right' })}>Move to favourites</Typography>
                                                        </Box>
                                                        <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                                            <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                                                <AlertAddToFav />
                                                            </Alert>
                                                        </Snackbar>
                                                        { !!token && <Box className={classes.quantity}>
                                                            <Button className={classes.quantitiyBtn} onClick={() => DecreaseQunatity({ ProductId: data.productId, ColorId: data.colorId, SizeId: data.sizeId })} >-</Button>
                                                            <Typography>{data.quantity}</Typography>
                                                            <Button className={classes.quantitiyBtn} onClick={() => IncreaseQunatity({ ProductId: data.productId, ColorId: data.colorId, SizeId: data.sizeId })} >+</Button>
                                                        </Box>
                                                        }

                                                    </Box>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </Box>
                                <Box className={classes.rightContent}>
                                    <Typography variant="h6">Have a promo code ?</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2ch', paddingBottom: '2ch' }}>
                                        <FormControl>
                                            <TextField error={discount == undefined} helperText={discount == undefined ? "Invalid Promo Code" : null} label="Promo Code" size='small' id="PromoCode" className={classes.promoText}
                                                onChange={handlePromoCode} name="PromoCode"></TextField>
                                        </FormControl>
                                        <Button className={classes.doneBtn} onClick={() => CheckPromoCode({ promo: promo })}>Done</Button>
                                    </Box>
                                    <Typography variant="h6">Order Summary</Typography>
                                    <Box sx={{ backgroundColor: 'white' }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                            <Typography>Subtotal</Typography>
                                            <Typography>{TotlalPrice ?? 0} EGP</Typography>
                                        </Box>
                                        {(!!discount) && <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                            <Typography sx={{ color: 'red' }}>Discount</Typography>
                                            <Typography sx={{ color: 'red' }}>{discount} EGP</Typography>
                                        </Box>}
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                            <Typography>VAT</Typography>
                                            <Typography>{TotlalPrice && (((TotlalPrice - (discount != undefined ? discount : 0))) * (14 / 100)).toFixed(2)} EGP</Typography>
                                        </Box>
                                        <Divider></Divider>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                            <Typography>Total Price</Typography>
                                            <Typography>{TotlalPrice && (TotlalPrice - (discount != undefined ? discount : 0) + (((TotlalPrice - (discount != undefined ? discount : 0))) * (14 / 100))).toFixed(2)} EGP</Typography>
                                        </Box>

                                        <Box sx={{ padding: '1ch' }}>
                                            <Button sx={{ width: '100%', backgroundColor: '#FF6F61', color: 'black', fontWeight: 600 }} onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Continue to Checkout'} </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        }


                        {/* second page of Cart LogIn */}


                        {
                            activeStep === IndexSteper[1] &&
                            <Box>
                                <Typography>Sign In</Typography>
                                <Button sx={{ width: '100%', backgroundColor: '#FF6F61', color: 'black', fontWeight: 600 }} onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Continue to Checkout'} </Button>
                            </Box>
                        }


                        {/* Third page of Cart Delivery */}


                        {
                           activeStep === IndexSteper[2] &&
                            <Box>
                                <Box className={classes.container}>
                                    <Box className={classes.leftContent}>
                                        <Typography variant="h6">Delivery Address</Typography>
                                        <Box className={classes.deliveryAddressContainer}>
                                            <Accordion>
                                                 <AccordionSummary
                                                     expandIcon={<ExpandMoreIcon />}
                                                     aria-controls="panel1a-content"
                                                     id="panel1a-header"
                                                 >
                                                    <Typography>Saved Address</Typography>
                                                </AccordionSummary>
                                             <AccordionDetails>
                                                <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>
                                                <Checkbox {...label} />
                                             <Typography>642 ElGiash Road, Alexandria , Egypt</Typography>
                                                </Box>
                                            </AccordionDetails>
                                            </Accordion>
                                            <Accordion sx={{marginTop:'2ch'}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                >
                                                    <Typography>New Address</Typography>
                                                </AccordionSummary>
                                                    <AccordionDetails>
                                                    <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>
                                                    <Checkbox {...label} />
                                                    <FormControl size="small" className={classes.countryField}>
                                            <InputLabel id="demo-select-small-label" className={classes.mobileNumber}>Country</InputLabel>
                                            <Select required
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={country}
                                                label="Mobile Number"
                                                onChange={handleCountryChange}
                                            >
                                                <MenuItem value={10}>Egypt</MenuItem>
                                                <MenuItem value={20}>Kuwait</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl size="small" className={classes.cityField}>
                                            <InputLabel id="demo-select-small-label" className={classes.mobileNumber}>City</InputLabel>
                                            <Select required
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={city}
                                                label="Mobile Number"
                                                onChange={handleCityChange}
                                            >
                                                <MenuItem value={20}>Alex</MenuItem>
                                                <MenuItem value={30}>Cairo</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl variant="standard" className={classes.fullAdress} size='small' >
                                            <TextField label="Full Address" size='small' type="text" id="address"
                                                name="address" className={classes.mobileDetail}
                                            ></TextField>
                                        </FormControl>
                                                    </Box>
                                                    </AccordionDetails>
                                            </Accordion>

                                             <Box sx={{ padding: '2ch', marginTop:'2ch' }}>
                                                <Button sx={{ width: '100%', backgroundColor: '#FF6F61', color: 'black', fontWeight: 600 }} onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Continue to Checkout'} </Button>
                                            </Box>

                                        </Box>
                                    </Box>
                                    <Box className={classes.rightContent}>
                                        <Typography variant="h6">Order Summary ({data ? data.length : 0} items)</Typography>
                                        {data.map((data: any, index: number) => {
                                            return (
                                                <Box className={classes.card} key={index}>
                                                    <Box>
                                                        <Image src={data.productImage} width={200} height={100} alt="product image" />
                                                    </Box>
                                                    <Box sx={{ width: '60%' }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="h6">{data.productTitle}</Typography>
                                                        </Box>
                                                        <Typography>Price: {data.price}</Typography>
                                                        <Typography>Color: {data.colorName}</Typography>
                                                        <Typography>Size: {data.sizeName}</Typography>
                                                        <Typography>Qunatity: {data.quantity}</Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })}

                                        <Box sx={{ backgroundColor: 'white', marginTop:'2ch' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>SubTotal</Typography>
                                                <Typography>{TotlalPrice && (TotlalPrice - (discount != undefined ? discount : 0) + (((TotlalPrice - (discount != undefined ? discount : 0))) * (14 / 100))).toFixed(2)} EGP</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>Delivery</Typography>
                                                <Typography> {delivery} EGP</Typography>
                                            </Box>
                                            <Divider></Divider>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>Total Price</Typography>
                                                <Typography> {TotlalPrice && ((TotlalPrice - (discount != undefined ? discount : 0) + (((TotlalPrice - (discount != undefined ? discount : 0))) * (14 / 100))) + delivery).toFixed(2) } EGP</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        }

                        {/* forth page of Cart Payment */}


                        {  activeStep === IndexSteper[3] && 
                            <Box className={classes.payment}>
                                  <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                      defaultValue="female"
                                      name="radio-buttons-group"
                                    >
                                <Box className={classes.paymentOption}>
                              
                                <Accordion sx={{width:'100%'}}>
                                    <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                    >
                                          <FormControlLabel value="CreditCard" control={<Radio />} label="Credit Card" sx={{ width:'20ch'}} />
                                        <Box sx={{display:'flex',justifyContent:'end',alignItems:'center', width:'100%'}}>
                                        <Image src={masterCard} alt="credit card payment" width={40} height={25} />
                                        </Box>
                                    </AccordionSummary>
                                        <AccordionDetails>
                                                <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>
                                                <Checkbox {...label} />
                                                    <Typography>642 ElGiash Road, Alexandria , Egypt</Typography>
                                                 
                                                </Box>
                                        </AccordionDetails>
                                </Accordion>
                                </Box>
                                <Box  className={classes.paymentOption}>
                                <Accordion sx={{width:'100%'}}>
                                    <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                    >     <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
                                         <Box sx={{display:'flex',justifyContent:'end',alignItems:'center', width:'100%'}}>
                                        <Image src={paypal} alt="paypal payment" width={40} height={25} />
                                        </Box>
                                    </AccordionSummary>
                                        <AccordionDetails>
                                                <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>
                                                <Checkbox {...label} />
                                                    <Typography>642 ElGiash Road, Alexandria , Egypt</Typography>
                                                </Box>
                                        </AccordionDetails>
                                </Accordion>
                                </Box>
                                <Box  className={classes.paymentOption}>
                                <Accordion sx={{width:'100%'}}>
                                    <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                    >    <FormControlLabel value="Fawry" control={<Radio />} label="Fawry" />
                                        <Box sx={{display:'flex',justifyContent:'end',alignItems:'center', width:'100%'}}>
                                        <Image src={fawry} alt="Fawry payment" width={40} height={25} />
                                        </Box>
                                    </AccordionSummary>
                                        <AccordionDetails>
                                                <Box sx={{display:'flex', gap:'10px',alignItems:'center'}}>
                                                <Checkbox {...label} />
                                                    <Typography>642 ElGiash Road, Alexandria , Egypt</Typography>
                                                </Box>
                                        </AccordionDetails>
                                </Accordion>
                                </Box>
                                </RadioGroup>
                                <Button sx={{ width: '100%', backgroundColor: '#FF6F61', color: 'black', fontWeight: 600 }} onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Continue to Checkout'} </Button>
                            </Box>
                        }

                        {/* forth page of Cart confirmation */}


                        {
                             activeStep === IndexSteper[4]  &&
                            <Box>
                                <Typography>Confirmation</Typography>
                                <Button sx={{ width: '100%', backgroundColor: '#FF6F61', color: 'black', fontWeight: 600 }} onClick={handleNext}> {activeStep === steps.length - 1 ? 'Confirm' : 'Continue to Checkout'} </Button>
                            </Box>

                        }



                        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {/* <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Continue to Checkout'}
                               </Button> */}
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            <Footer></Footer>
        </React.Fragment>
    )

}