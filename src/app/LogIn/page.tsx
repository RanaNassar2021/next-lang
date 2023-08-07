'use client'
import React from 'react'
import { Box, Typography, Button, Divider } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { FormControl, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// styles
import useStyles from './LogIn.Styles';
import Link from 'next/link';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

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
    password: yup
        .string()
        .matches(/\w*[a-z]\w*/, "Password must have a small letter")
        .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
        .matches(/\d/, "Password must have a number")
        .matches(/[!+@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Please enter valid password. between 8 to 20 character, One uppercase, one lowercase, one special character and no spaces')

});

export default function SignUp() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <React.Fragment>
            <Box>
                <Header />
                <Box className="flex  flex-col items-center justify-between">
                    <Box className={classes.container}>
                        <Box>
                            <Typography variant='h6'>welcome to PICTURA</Typography>
                            <Typography>Log in with Email & Password</Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl fullWidth className={classes.textField}>
                                    <TextField label="Email *" size='small' id="email"
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    ></TextField>
                                </FormControl>
                                <FormControl fullWidth size='small' className={classes.textField} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password" >Password *</InputLabel>
                                    <OutlinedInput
                                        name="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end" >
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"

                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <p className={classes.passwordError}>{formik.touched.password && formik.errors.password}</p>
                                <Button className={classes.logInBtn} sx={{ mt: 2 }} color="primary" variant="contained" fullWidth type="submit">
                                    Log In
                                </Button>
                            </form>
                            <Box>
                                <Divider sx={{ mt: 2 }}>Or</Divider>
                            </Box>
                            <Box>
                                <Button className={classes.btn3}>
                                    <Icons.FacebookRounded ></Icons.FacebookRounded> Continue with facebook</Button>
                                <Button className={classes.btn4}> <Icons.Google ></Icons.Google>Continue with Google</Button>
                            </Box>
                            <Box className={classes.logIn}>
                                <Typography>Forget your password ?<Link href='/ResetPassword'>Reset it</Link></Typography>
                            </Box>
                            <Box className={classes.signUp}>
                                <Typography>Don't have an account?<Link href='/Registeration'> Sign Up</Link></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Footer />
                </Box>
            </Box>
        </React.Fragment>
    )
}