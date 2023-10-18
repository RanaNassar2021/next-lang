'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stepper, Step, StepLabel, FormControl, TextField, Divider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import AlertAddToFav from "@/app/AlertAddToFav/page";
import AlertRemovedFromFav from "@/app/AlertRemovedFromFav/page";

// styles
import useStyles from "./Cart.Styles";

//Axios
import Axios from 'axios';



// Material ui
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const { classes } = useStyles();

    // stepper

    const steps = ['Cart', 'Sign In', 'Delivery', 'Payment', 'Confirmation'];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const [TotlalPrice, setTotlalPRice] = useState();

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
        let x:any=0;
       response.data.map((item:any)=>{
           x= x + (item.price * item.quantity) ;
        })
        setTotlalPRice(x);
        console.log(response.data)
    };
console.log(TotlalPrice);
console.log(data.length)

  
    // Call the fetchData function after the initial render
    useEffect(() => {
        fetchData();
    }, []);


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


    // Remove from user Cart

    interface RemoveFromCartInterface {
        ProductId: string;
        ColorId: number;
        SizeId: number;
    }


    const RemoveFromCart = (remove:RemoveFromCartInterface, newState:SnackbarOrigin) => {
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.delete(`${process.env.apiUrl}` + `Product/RemoveFromCart?ProductId=${remove.ProductId}&ColorId=${remove.ColorId}&SizeId=${remove.SizeId}`,Config).then((res) => {
            setState({ ...newState, openTop: true });
            setOpen(true)
            setData(data.filter((item: any) => {
                return item.productId != remove.ProductId
            }))
            
        })
    }

     // Increase Quantity
     interface AddToFavouriteInrerface {
        ProductId:string;
        ColorId:number;
        SizeId?: number;
    }
    const IncreaseQunatity = (increase: AddToFavouriteInrerface) =>{
        let body ={
            productId: increase.ProductId,
            colorId: increase.ColorId,
            sizeId: increase.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.put(`${process.env.apiUrl}` +`Product/IncreaseOrderQuantity?Increase=${true}`, body,Config).then((res)=>{
            fetchData();
    })
    }

    const DecreaseQunatity = (increase: AddToFavouriteInrerface) =>{
        let body ={
            productId: increase.ProductId,
            colorId: increase.ColorId,
            sizeId: increase.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.put(`${process.env.apiUrl}` +`Product/IncreaseOrderQuantity?Increase=${false}`, body,Config).then((res)=>{
            fetchData();
    })
    }


    // Add to Favourite


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
            setData(data.filter((item: any) => {
                return item.productId != AddToFavourite.ProductId
            }))
            if(res.data=="Saved Successfully"){
                setIsFavourite(true);
                    setStateFav({ ...newState, openTopFav: true });
                    setOpenFav(true)
            }else {
                console.log("removed")
                setIsFavourite(false);
                setStateFav({ ...newState, openTopFav: false });
                setOpenFav(true)
            }
           
         })

    }

       

  


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
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
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
                        <Box className={classes.container}>
                            <Box className={classes.leftContent}>
                                <Typography variant="h5">My Shopping Cart ({data?data.length:0} items)</Typography>
                                {data.map((data: any, index: number) => {
                                    return (
                                        <Box className={classes.card} key={index}>
                                            <Box>
                                                <Image src={data.productImage} width={200} height={100} alt="product image" />
                                            </Box>
                                            <Box sx={{ width: '60%' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="h6">{data.productTitle}</Typography>
                                                    <DeleteIcon sx={{ marginTop: '10px', marginRight:'10px' }} onClick={()=>RemoveFromCart({ProductId:data.productId, ColorId:data.colorId, SizeId:data.sizeId},{vertical: 'top', horizontal: 'right'})}></DeleteIcon>
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
                                                <Box sx={{display:"flex", justifyContent:'space-between'}}>
                                                    <Box>
                                                <Typography sx={{ textDecoration: "underline" }} onClick={()=>AddToFavourite({ProductId:data.productId, ColorId:data.colorId },{vertical: 'top', horizontal: 'right'})}>Move to favourites</Typography>
                                                   
                                                </Box>
                                                <Snackbar open={openFav} autoHideDuration={4000} onClose={handleCloseAlertFav} key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }}>
                                                        <Alert onClose={handleCloseAlertFav} severity="success" sx={{ width: '100%' }}>
                                                            <AlertAddToFav/>
                                                        </Alert>
                                                    </Snackbar>
                                                <Box className={classes.quantity}>
                                                <Typography onClick={()=>DecreaseQunatity({ProductId:data.productId, ColorId:data.colorId, SizeId:data.sizeId})} >-</Typography>
                                                <Typography>{data.quantity}</Typography>
                                                <Typography onClick={()=>IncreaseQunatity({ProductId:data.productId, ColorId:data.colorId, SizeId:data.sizeId})} >+</Typography>
                                                </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                            <Box className={classes.rightContent}>
                                <Typography variant="h6">Have a promo code ?</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '2ch', paddingBottom: '2ch' }}>
                                    <form>
                                        <FormControl>
                                            <TextField label="Promo Code" size='small' id="email" className={classes.promoText}
                                                name="PromoCode"></TextField>
                                        </FormControl>
                                    </form>
                                    <Button className={classes.doneBtn}>Done</Button>
                                </Box>
                                <Typography variant="h6">Order Summary</Typography>
                                        <Box sx={{ backgroundColor: 'white' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>Subtotal</Typography>
                                                <Typography>{TotlalPrice??0} EGP</Typography>
                                            </Box>
                                            <Divider></Divider>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>VAT</Typography>
                                                <Typography>{TotlalPrice &&  ((14/100)*TotlalPrice).toFixed(2)} EGP</Typography>
                                            </Box>

                                            <Box sx={{padding:'1ch'}}>
                                            <Button sx={{width:'100%', backgroundColor:'#FF6F61',color:'black',fontWeight:600}}>Continue to Checkout</Button>
                                            </Box>
                                        </Box>
                            </Box>
                        </Box>



                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            <Footer></Footer>
        </React.Fragment>
    )

}