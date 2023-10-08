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
    };

    // Call the fetchData function after the initial render
    useEffect(() => {
        fetchData();
    }, []);


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
                                <Typography variant="h5">My Shopping Cart (2 items)</Typography>
                                {data.map((data: any, index: number) => {
                                    return (
                                        <Box className={classes.card} key={index}>
                                            <Box>
                                                <Image src={data.productImage} width={200} height={100} alt="product image" />
                                            </Box>
                                            <Box sx={{ width: '60%' }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography variant="h6">{data.productTitle}</Typography>
                                                    <DeleteIcon sx={{ marginTop: '10px', marginRight:'10px' }}></DeleteIcon>
                                                </Box>
                                                <Typography>Color: {data.colorName}</Typography>
                                                <Typography>Size: {data.sizeName}</Typography>
                                                <Typography sx={{ textDecoration: "underline" }}>Move to favourites</Typography>
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
                                            <TextField label="Promo Code" size='small' id="email"
                                                name="PromoCode" sx={{ backgroundColor: 'white', width: '40ch' }}></TextField>
                                        </FormControl>
                                    </form>
                                    <Button sx={{ backgroundColor: '#cad2c5', width: '15ch' }}>Done</Button>
                                </Box>
                                <Typography variant="h6">Order Summary</Typography>
                                        <Box sx={{ backgroundColor: 'white' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>Subtotal</Typography>
                                                <Typography>800 EGP</Typography>
                                            </Box>
                                            <Divider></Divider>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '1ch' }}>
                                                <Typography>VAT</Typography>
                                                <Typography>112 EGP</Typography>
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