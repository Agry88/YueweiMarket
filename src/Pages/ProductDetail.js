import React from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import { AddShopCar } from '../Actions';




function ProductDetail() {
    const Datas = useSelector(state => state.Products);
    const Member = useSelector(state => state.Member);
    const Params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ProdID = Params.ProdID;
    const [PageData, setPageData] = useState();
    const [ProdNumber, setProdNumber] = useState(0);

    useEffect(() => {
        const PageData = Datas.filter((data) => data.ID == ProdID);
        setPageData(PageData[0]);
    }, [])

    useEffect(() => {
        if (ProdNumber < 0) {
            setProdNumber(0);
        }
    }, [ProdNumber])

    const handleAddCard = () => {
        if (Member.ID == "") {
            navigate("/Login/想要新增購物車請先登入")
            return
        }
        dispatch(AddShopCar(PageData))
    }

    return (
        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ p: 2, width: "60%", height: "37%", boxShadow: 10 }}>
                <Stack direction={"row"} spacing={8} fullwidth={"true"}>
                    {PageData && <img src={PageData.src} style={{ maxWidth: "25rem" , maxHeight:"20rem" }} />}
                    <Box sx={{ width: "100%" }}>
                        {PageData &&
                            <Typography variant="h3">{PageData.商品名稱}</Typography>
                        }

                        <Divider sx={{ m: 2 }} />

                        <Stack direction={"row"} spacing={5} sx={{ alignItems: "center" }}>
                            <Typography variant="subtitle1" color="grey.500">促銷價</Typography>
                            <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                <Typography variant="h5" color="red" >$</Typography>
                                {PageData &&
                                    <Typography variant="h4" color="red" >{PageData.商品價格}</Typography>}
                            </Stack>
                        </Stack>

                        <Divider sx={{ m: 2 }} />

                        <Stack direction={"row"} sx={{ alignItems: "center" }} spacing={3}>
                            <Typography sx={{ mr: 10 }}>數量</Typography>
                            <IconButton sx={{ backgroundColor: "#83b2fc" }} onClick={() => setProdNumber(prevProdNumber => prevProdNumber - 1)}>
                                <RemoveIcon />
                            </IconButton>
                            <TextField
                                value={ProdNumber}
                                onChange={e => setProdNumber(e.target.value)}
                                sx={{ width: "100px" }}
                            />
                            <IconButton sx={{ backgroundColor: "#83b2fc" }} onClick={() => setProdNumber(prevProdNumber => prevProdNumber + 1)}>
                                <AddIcon />
                            </IconButton>
                        </Stack>

                        <Paper sx={{ m: 2, mt: 5, borderRadius: 5, border: 1, borderColor: "#ffafab" }}>
                            <Button variant="text" sx={{ width: "50%", color: "#ffafab", borderRightColor: "#ffafab" }}>
                                立即購買
                            </Button>
                            <Button variant="text" onClick={handleAddCard} sx={{
                                width: "50%", backgroundColor: "#ffafab", color: "#fff", borderTopRightRadius: 20, borderBottomRightRadius: 20,
                                "&:hover": {
                                    color: "blueviolet"
                                },
                            }}>
                                加入購物車
                            </Button>
                        </Paper>

                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}

export default ProductDetail;