import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { SetShopCar } from '../Actions/index'
import { Link } from 'react-router-dom'


import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { AddCar } from './../Actions/index';


function Check() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            
        </Box >
    );
}

export default Check;