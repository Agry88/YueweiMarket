import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { SetShopCar } from '../Actions/index'
import * as React from 'react';

import Box from '@mui/material/Box';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { AddCar } from './../Actions/index';
import { AddSailTitle } from './../Actions/index';




const imgStyle = {
    width: "10rem",
    border: 5,
    borderColor: "#000",
}

function ShopCar() {
    const dispatch = useDispatch();
    const [CarID, setCarID] = useState(Math.random());
    const tempShopCar = useSelector(state => state.ShopCar);
    const Member = useSelector(state => state.Member);
    const [MemberID, setMemberID] = useState()


    useEffect(() => {
        if (Member != null) {
            setMemberID(Member[0].會員帳號);
        }
    }, [Member])

    const [ShopCar, setShopCars] = useState(tempShopCar)
    const NewData = ShopCar.map((data) => ({
        ID: data.ID,
        會員帳號: MemberID,
        商品ID: data.ID,
        數量: 0,
        Clicked: false,
    }))
    const [Data, setData] = useState(NewData);

    const handleChangeNumber = (ID, e) => {
        const number = e.target.value;
        setData(Data => Data.map((data) => ({
            ID: data.ID,
            會員帳號: data.會員帳號,
            商品ID: data.商品ID,
            數量: data.ID == ID ? number : data.數量,
        })))
    }

    const handleChangeNumberAmount = (ID, way) => {
        if (way == "plus") {
            setData(Data => Data.map((data) => ({
                ID: data.ID,
                會員帳號: data.會員帳號,
                商品ID: data.商品ID,
                數量: data.ID == ID ? Number(data.數量) + 1 : data.數量
            })))
        } else {
            setData(Data => Data.map((data) => ({
                ID: data.ID,
                會員帳號: data.會員帳號,
                商品ID: data.商品ID,
                數量: data.ID == ID ? Number(data.數量) - 1 : data.數量
            })))
        }

    }

    const handleDelete = (ID) => {
        setData(Data => Data.filter((data) => data.ID != ID))
        setShopCars(Data => Data.filter((data) => data.ID != ID))
        dispatch(SetShopCar(Data => Data.filter((data) => data.ID != ID)))
    }

    const [Radioz, setRadio] = useState("線上付款");

    const SendAPI = (ID) => {

        setShopCars(Data => Data.map((data) => ({
            ...data,
            Clicked: data.ID == ID ? true : data.Clicked
        })))

        let data = Data.filter((data) => data.ID == ID);
        AddCar(data[0].商品ID, MemberID, data[0].數量, CarID);

    }

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }

    const Sendsailtilte = () => {
        AddSailTitle(CarID, Radioz, MemberID);
    }

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ minHeight: "20rem", minWidth: "60rem", p: 10, boxShadow: 5 }}>
                {ShopCar.length != 0 &&
                    <Stack spacing={5}>
                        {ShopCar.map((data) => {
                            return (
                                <Box key={data.ID} sx={{ boxShadow: 3, minHeight: "10rem", display: "flex", alignitems: "center", p: 2 }}>
                                    <ImageListItem key={data.ID} sx={{
                                        width: "10rem",
                                        border: 5,
                                        borderColor: "#000",
                                    }}>
                                        <img src={data.src} />
                                    </ImageListItem>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 5 }}>{data.商品名稱}</Typography>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 8 }}>${data.商品價格}</Typography>
                                    <Paper sx={{ alignSelf: "center", display: "flex", alignItems: "center", ml: 5 }}>
                                        <IconButton sx={{ height: "100%", width: "2rem" }} onClick={() => handleChangeNumberAmount(data.ID, "minus")}>
                                            <RemoveIcon />
                                        </IconButton>

                                        <TextField
                                            value={Data.find(tempdata => tempdata.ID == data.ID).數量}
                                            sx={{ width: "100px", borderWidth: 0 }}
                                            onChange={(e) => handleChangeNumber(data.ID, e)}
                                        />
                                        <IconButton sx={{ height: "100%", width: "2rem" }} onClick={() => handleChangeNumberAmount(data.ID, "plus")}>
                                            <AddIcon />
                                        </IconButton>
                                    </Paper>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 8 }}>${(Data.find(tempdata => tempdata.ID == data.ID).數量) * data.商品價格}</Typography>
                                    <Button variant="text" color="primary" sx={{ ml: 5, justifySelf: "flex-end" }} onClick={() => handleDelete(data.ID)}>
                                        刪除
                                    </Button>
                                    {data.Clicked ?
                                        <Button variant="text" color="primary" sx={{ ml: 5, justifySelf: "flex-end" }} disabled>
                                            以確定購買
                                        </Button>
                                        :
                                        <Button variant="text" color="primary" sx={{ ml: 5, justifySelf: "flex-end" }} onClick={() => SendAPI(data.ID)}>
                                            確定購買
                                        </Button>
                                    }
                                </Box>
                            )
                        })}
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">付款方式</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={Radioz}
                                onChange={handleRadio}
                            >
                                <FormControlLabel
                                    value="線上付款"
                                    control={<Radio />}
                                    label="線上付款"
                                />
                                <FormControlLabel
                                    value="貨到付款"
                                    control={<Radio />}
                                    label="貨到付款"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" color="primary" sx={{ ml: 5, justifySelf: "flex-end" }} onClick={Sendsailtilte}>
                            結帳
                        </Button>
                    </Stack>
                }
                {ShopCar.length == 0 &&
                    <Box sx={{ display: "flex", justifyContent: "center", pt: 15 }}>
                        <Typography variant="h2" color="initial">請先新增購物車喔</Typography>
                    </Box>
                }
            </Paper>
        </Box >
    );
}

export default ShopCar;