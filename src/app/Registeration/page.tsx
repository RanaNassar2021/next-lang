'use client'
import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { FormControl, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

// styles
import useStyles from './SignUp.Styles';
import Link from 'next/link';

// material UI icons
import * as MuiIcons from '@mui/icons-material';

// Form validation
import { useFormik, validateYupSchema } from 'formik';
import * as yup from 'yup';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


// validation 
const validationSchema = yup.object({
    firstName: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First Name is required'),
    lastName: yup
        .string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last Name is required'),
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
        .required('Please enter valid password. between 8 to 20 character, One uppercase, one lowercase, one special character and no spaces'),
    confirmPassword: yup
        .string()
        .required('Required')
        .test(
            'password-match',
            'Password must match',
            function (value) {
                return this.parent.password === value
            }
        ),
    phone: yup
        .string()
        .min(10, 'Mobile number must be 10 digits')
        .max(10, "Mobile number can't be more than 10 digits")
        .required('Phone is required'),
    address: yup
        .string()
        .required('Address is required'),

});

const validationsData = [
  { id: 1, content: "Upper case later", isValid: false },
  { id: 2, content: "Lower case later", isValid: false },
  { id: 3, content: "Number", isValid: false },
  { id: 4, content: "Special Characters", isValid: false },
  { id: 5, content: "Length between 8 ~ 20", isValid: false },
]

export default function SignUp() {
    const { classes } = useStyles();
    const Icons: any = MuiIcons;
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [mobile, setMobile] = React.useState('');
    const handleNumberChange = (event: SelectChangeEvent) => {
        setMobile(event.target.value);
    };

    const [country, setCountry] = React.useState('');
    const handleCountryChange = (event: { target: { value: string } }) => {
        setCountry(event.target.value);
    };

    const [city, setCity] = React.useState('');
    const handleCityChange = (event: { target: { value: string } }) => {
        setCity(event.target.value);
    };

    const [validations, setValidation] = useState(validationsData)
    const [showPassowrdValidation, setShowPasswordValidation] = useState(false);
    const [gender, setGender] = useState("");

    function updateValidation(id: number, isValid: boolean) {
        setValidation(
        validations.map(x => {
            if (x.id == id) x.isValid = isValid;
            return x;
        })
        )
    }

    function handleValidation(e: any) {
        const value = e.target.value
        formik.values.password = value;
        // Regular expressions for each condition
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /\d/;
        const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/;
        const lengthRegex = /^.{8,20}$/;
        // Check each condition
        if (uppercaseRegex.test(value)) updateValidation(1, true)
        else updateValidation(1, false)
        if (lowercaseRegex.test(value)) updateValidation(2, true)
        else updateValidation(2, false)
        if (numberRegex.test(value)) updateValidation(3, true)
        else updateValidation(3, false)
        if (specialCharRegex.test(value)) updateValidation(4, true)
        else updateValidation(4, false)
        if (lengthRegex.test(value)) updateValidation(5, true)
        else updateValidation(5, false)
    }

    function handlePasswordFoucs(e: any){
        setShowPasswordValidation(true);
    }

    function handleGenderSelect(e: any){
        const value = e.target.value;
        setGender(value);
        console.log(value);
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            address: '',
            gender: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            values.gender = gender;
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <React.Fragment>
            <Box>
                <Header />
                <Box className="flex min-h-screen flex-col items-center justify-between">
                    <Box className={classes.container}>
                        <Box>
                            <Typography variant='h6'>create your account</Typography>
                            <Typography>please fill all form fields</Typography>
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl fullWidth className={classes.textField}>
                                    <TextField label="First Name *" size='small' type="text" id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    ></TextField>
                                </FormControl>
                                <FormControl fullWidth className={classes.textField}>
                                    <TextField label="Last Name *" size='small' id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName} ></TextField>
                                </FormControl>
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
                                        onChange={handleValidation}
                                        onBlur={formik.handleBlur}
                                        onFocus={handlePasswordFoucs}
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
                                <ul style={{
                                    color: "black",
                                    display: showPassowrdValidation ? "block" : "none",
                                    margin: "10px 0 0 15px",
                                    listStyle: "circle"
                                }}>
                                    {validations.map(x => (<li style={{ color: x.isValid ? "green" : "red" }} key={x.id}>{x.content}</li>))}
                                </ul>
                                <FormControl fullWidth size='small' className={classes.textField} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password" >Confirm Password *</InputLabel>
                                    <OutlinedInput
                                        name="confirmPassword"
                                        value={formik.values.confirmPassword}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                        id="confirmPassword"
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
                                <p className={classes.passwordError}>{formik.touched.confirmPassword && formik.errors.confirmPassword}</p>

                                <Box className={classes.mobile}>
                                    <Box className={classes.options}>
                                        <FormControl sx={{ minWidth: 120 }} size="small" >
                                            <InputLabel id="demo-select-small-label">Country</InputLabel>
                                            <Select className={classes.options} required
                                                labelId="demo-select-small-label"
                                                id="demo-select-small"
                                                value={mobile}
                                                label="Mobile Number"
                                                onChange={handleNumberChange}
                                            >
                                                <MenuItem value={10}>+20</MenuItem>
                                                <MenuItem value={20}>+965</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box className={classes.mobField}>
                                        <FormControl variant="standard" >
                                            <TextField label="Mobile Number *" size='small' type='number' id="phone"
                                                name="phone"
                                                value={formik.values.phone}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                                helperText={formik.touched.phone && formik.errors.phone}
                                            ></TextField>
                                        </FormControl>
                                    </Box>
                                </Box>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name='gender'

                                    >
                                        <FormControlLabel onChange={handleGenderSelect} value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel onChange={handleGenderSelect} value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <Box className={classes.address}>
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
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.address && Boolean(formik.errors.address)}
                                            helperText={formik.touched.address && formik.errors.address}
                                        ></TextField>
                                    </FormControl>
                                </Box>
                                <Box className={classes.terms}>
                                    <Checkbox {...label} sx={{ pl: 0 }} required />
                                    <Typography>by signing up you agree to Terms & conditions </Typography>
                                </Box>
                                <Box className={classes.btn}>
                                    <Button className={classes.btn1} color="primary" variant="contained" type="submit">Create An Account</Button>
                                    <Button className={classes.btn2} onClick={() => formik.resetForm()}
                                        type="reset">Reset</Button>
                                </Box>
                                <Divider>Or</Divider>
                            </form>
                            <Box>
                                <Button className={classes.btn3}>
                                    <Icons.FacebookRounded ></Icons.FacebookRounded> Continue with facebook</Button>
                                <Button className={classes.btn4}> <Icons.Google ></Icons.Google>Continue with Google</Button>
                            </Box>
                            <Box className={classes.logIn}>
                                <Typography>Already have an account?<Link href='/LogIn'> LogIn</Link></Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Footer />
            </Box>
        </React.Fragment>
    )
}