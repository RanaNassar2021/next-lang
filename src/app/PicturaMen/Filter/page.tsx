'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { Drawer, Box, List, ListItem, IconButton, Divider, Checkbox, Typography } from '@mui/material';



// material UI icons
import * as MuiIcons from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//Axios
import Axios from 'axios';

export default function Filter() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [filtersData, setFiltersData] = useState<any>([]);
    const [categoriesId, SetCategoriesId] = useState<any>([]);
    const [colorId, SetColorId] = useState<any>([]);
    const Icons: any = MuiIcons;

    const fetchFilter = async () => {
        // Make a GET request using axios
        const response = await Axios.get(`${process.env.apiUrl}` + `Product/DropDownListsDetials`);
        // Update the state with the response data
        setFiltersData(response.data);
    };


    useEffect(()=>{
        fetchFilter();
    },[categoriesId,colorId])

    const concateCategoryId = (Id:number, event:any)=>{
        if(event.target.checked){
            SetCategoriesId((categoriesId:any) => [...categoriesId, Id]);
        }else{
            SetCategoriesId((categoriesId:any) =>categoriesId.filter((id:any) => id !== Id));
        }
    }

    const concateColorId = (Id:number, event:any)=>{
        if(event.target.checked){
            SetColorId((colorId:any) => [...colorId, Id]);
        }else{
            SetColorId((colorId:any) =>colorId.filter((id:any) => id !== Id));
        }
    }

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
                            <Checkbox {...label}  onClick={(e)=>concateCategoryId(item.categoryId, e)}/>
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
                                <Checkbox {...label}  onClick={(e)=>concateColorId(item.colorId, e)}/>
                                <Typography>{item.name}</Typography>
                            </ListItem>
                            )
                        })
                    }
                        <Divider/>
                        <Typography style={{fontWeight:'bold', fontSize:'18px',marginTop:10, marginBottom:5}}> Sort By </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            New In
                        </ListItem>
                        <Typography style={{ fontSize:'16px',marginTop:10, marginBottom:5}}> Prices </Typography>
                        <Divider style={{ width: '40px' }}></Divider>
                        <ListItem>
                            <Checkbox {...label} />
                            Low to High
                        </ListItem>
                        <ListItem>
                            <Checkbox {...label} />
                            High to Low
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </React.Fragment>
    )
}