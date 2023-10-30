'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem, IconButton, Divider, Checkbox, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



// material UI icons
import * as MuiIcons from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//Axios
import Axios from 'axios';

export default function Filter(props:any) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [filtersData, setFiltersData] = useState<any>([]);
    const [categoriesId, SetCategoriesId] = useState<any>([]);
    const [colorId, SetColorId] = useState<any>([]);
    const [date, setDate] = useState<boolean>(false);
    const [onlyFewLeft, setOnlyFewLeft] = useState<boolean>(false);
    const [prices, setPrices] = useState<boolean>(false);
    const [isDecending, setIsDecending] = useState<boolean>(false);
    const Icons: any = MuiIcons;

    const fetchFilter = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/DropDownListsDetials`);
        // Update the state with the response data
        setFiltersData(response.data);
    };

    useEffect(()=>{
        fetchFilter();
    },[])

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

    const concateNewIn = (event: any) => {
        if (event.target.checked) {
            setDate(true)
        } else {
            setDate(false)
        }
    }



    const concateOnlyFewLeft = (event: any) => {
        if (event.target.checked) {
            setOnlyFewLeft(true);
        } else {
            setOnlyFewLeft(false)
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
    
    useEffect(()=>{
       props?.sendCategories(categoriesId);
       props?.sendColors(colorId);
       props?.sendDate(date);
       props?.sendOnlyFewLeft(onlyFewLeft);
       props?.sendIsDescending(prices,isDecending);
       props?.sendIsAcending(prices, isDecending);
    },[categoriesId, colorId,date,onlyFewLeft,prices,isDecending])
    
    return (
        <React.Fragment>
            <IconButton onClick={() => { setIsDrawerOpen(true) }}>
                <Icons.FilterList></Icons.FilterList>
            </IconButton>
            <Drawer anchor='right' open={isDrawerOpen} onClose={() => { setIsDrawerOpen(false) }}>
                <Box p={2} width='250px' role='presentation'>
                    <List>
                        <Typography style={{fontWeight:'bold', fontSize:'18px', marginTop:10, marginBottom:5}} > Catergories </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        {filtersData?.categories?.map((item: any, index: number)=>{
                        return(
                        <ListItem key={index}>
                            <Checkbox {...label} checked={categoriesId?.includes(item.categoryId)} onClick={(e) => concateCategoryId(item.categoryId, e)}/>
                            <Typography>{item.name}</Typography>
                        </ListItem>
                        )
                    })}
                        <Divider />
                        <Typography style={{fontWeight:'bold', fontSize:'18px', marginTop:10, marginBottom:5}}> Color </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        {
                        filtersData?.colors?.map((item: any, index: number)=>{
                            return(
                                <ListItem  key={index}>
                                <Checkbox {...label} checked={colorId?.includes(item.colorId)} onClick={(e) => concateColorId(item.colorId, e)} />
                                <Typography>{item.name}</Typography>
                            </ListItem>
                            )
                        })
                    }
                        <Divider/>
                        <Typography style={{fontWeight:'bold', fontSize:'18px',marginTop:10, marginBottom:5}}> Sort By </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} checked={date}  onClick={(e) => concateNewIn(e)} />
                            New In
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} checked={onlyFewLeft} onClick={(e) => concateOnlyFewLeft(e)} />
                            Only Few Left
                        </ListItem>
                        <Typography style={{ fontSize:'16px',marginTop:10, marginBottom:5}}> Prices </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group">
                        <ListItem>
                            <FormControlLabel value="low" control={<Radio />} label="Low to High" onClick={IsAscending} sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />
                        </ListItem>
                        <ListItem>
                            <FormControlLabel value="High" control={<Radio />} label="High to Low"   onClick={IsDecending} sx={{ '& .MuiFormControlLabel-label': { fontSize: '12px' } }} />

                        </ListItem>
                    </RadioGroup>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}