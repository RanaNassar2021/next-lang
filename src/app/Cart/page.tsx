'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stepper, Step, StepLabel, FormControl, TextField, Divider } from "@mui/material";
import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";

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
           x= x + item.price;
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

    interface AddToFavouriteInrerface {
        ProductId:string;
        ColorId:number;
    }

    const AddToFavourite = (AddToFavourite: AddToFavouriteInrerface) =>{
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
                console.log("saved")
            }else {
                console.log("removed")
            }
           
         })

    }

    interface RemoveFromCartInterface {
        ProductId: string;
        ColorId: number;
        SizeId: number;
    }

    const RemoveFromCart = (RemoveFromCart: RemoveFromCartInterface) => {
        let body = {
            productId: RemoveFromCart.ProductId,
            colorId: RemoveFromCart.ColorId,
            sizeId: RemoveFromCart.SizeId
        }
        const Config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` }
        }
        Axios.post(`${process.env.apiUrl}` + `Product/RemoveFromCart`, body, Config).then((res) => {
            setData(data.filter((item: any) => {
                return item.productId != RemoveFromCart.ProductId
            }))
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
                                                    <DeleteIcon sx={{ marginTop: '10px', marginRight:'10px' }} onClick={() => RemoveFromCart({ ProductId: data.productId, ColorId: data.colorId, SizeId: data.sizeId })}></DeleteIcon>
                                                </Box>
                                                 <Typography>Price: {data.price}</Typography>
                                                <Typography>Color: {data.colorName}</Typography>
                                                <Typography>Size: {data.sizeName}</Typography>
                                                <Box sx={{display:"flex", justifyContent:'space-between'}}>
                                                    <Box>
                                                <Typography sx={{ textDecoration: "underline" }} onClick={()=>AddToFavourite({ProductId:data.productId, ColorId:data.colorId})}>Move to favourites</Typography>
                                                </Box>
                                                <Box className={classes.quantity}>
                                                <Typography>-</Typography>
                                                <Typography>1</Typography>
                                                <Typography>+</Typography>
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