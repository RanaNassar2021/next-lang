'use client'
import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import Image from 'next/image';
import logo from '../Assets/Images/logo.png';

// styles
import useStyles from './ResetPassword.Styles';
import Link from 'next/link';

// Form validation
import { useFormik } from 'formik';
import * as yup from 'yup';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// validation 
const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
})

export default function ResetPassword() {
    const { classes } = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <React.Fragment>
            <Box className="flex min-h-screen flex-col items-center justify-between">
                <Box className={classes.container}>
                    <Box>
                        <Image src={logo}
                            width={180}
                            height={180}
                            alt="Picture of pictura logo" />
                    </Box>
                    <Box>
                        <Typography variant='h6'>Please enter your Registeration email to reset your password</Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl fullWidth>
                                <TextField label="Email *" size='small' id="email"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                ></TextField>
                            </FormControl>
                            <Button className={classes.logInBtn} sx={{ mt: 2 }} color="primary" variant="contained" fullWidth type="submit">
                                    Reset Password
                                </Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </React.Fragment>
    )
}