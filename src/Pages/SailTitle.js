import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { GetsailTitle, APIURL } from '../Actions/index'
import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'


import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 10,
    p: 4,
};

function SailTitle() {
    const dispatch = useDispatch();
    const [Car, setCar] = useState();
    const [ModalStatus, setModalStatus] = useState(false);
    const [AllProducts, setAllProducts] = useState();

    useEffect(() => {
        dispatch(GetsailTitle());

        const newApiurl = APIURL + "?sheetName=car&ways=檢視商品"
        fetch(newApiurl, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                setCar(datas);
            })
            .catch(e => {
                console.log("error occured");
            });

        const newApiurl2 = APIURL + "?sheetName=commodity&ways=檢視商品"
        fetch(newApiurl2, { method: 'POST' })
            .then(response => response.json())
            .then(datas => {
                setAllProducts(datas);
            })
            .catch(e => {
                console.log("error occured");
            });

    }, []);
    const Member = useSelector(state => state.Member);
    const SailTitleStore = useSelector(state => state.SailTitle);
    const [sailTitle, setsailTitle] = useState(SailTitleStore);

    const [UserSailTitle, setUserSailTitle] = useState();

    useEffect(() => {
        const Temp = sailTitle.filter((data) =>
            data.會員帳號 == Member.會員帳號
        )

        setUserSailTitle(Temp);
    }, [sailTitle])

    const [SelectedCar, setSelectedCar] = useState("");

    const handleModalOpen = (CarID) => {
        setModalStatus(true)
        setSelectedCar(CarID)
    }


    return (
        <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Paper sx={{ minHeight: "20rem", minWidth: "60rem", p: 10, boxShadow: 5 }}>
                <Stack spacing={5}>
                    {UserSailTitle &&
                        UserSailTitle.map(data => {
                            return (
                                <Box key={data.ID} sx={{ boxShadow: 3, minHeight: "10rem", display: "flex", alignitems: "center", p: 2 }}>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 5 }}>購物車編號:{data.購物車ID}</Typography>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 8 }}>訂單時間:{(data.訂單時間).substr(0, 10)}</Typography>
                                    <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 8 }}>付款方式:{data.付款方式}</Typography>
                                    <Button variant="contained" color="primary" onClick={() => handleModalOpen(data.購物車ID)}
                                    >
                                        點擊查看詳細
                                    </Button>
                                </Box>
                            )
                        })}
                </Stack>
            </Paper>
            <Modal
                open={ModalStatus}
                onClose={() => setModalStatus(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <SailTitleModal SelectedCar={SelectedCar} Car={Car} AllProducts={AllProducts} />
                </div>
            </Modal>
        </Box >
    );
}

export default SailTitle;

function SailTitleModal(props) {

    const { SelectedCar, Car, AllProducts } = props;
    const [ShowDatas, setShowDatas] = useState();

    const [UserCardDatas, setUserCardDatas] = useState();
    let UserProductDatas = new Array();
    // const [UserProductDatas, setUserProductDatas] = useState([]);
    useEffect(() => {
        const temp = Car.filter((data) => (
            data.購物車ID == SelectedCar
        ));
        setUserCardDatas(temp); //取得該購物車有的商品
    }, [])

    useEffect(() => {
        if (UserCardDatas != null) {
            UserCardDatas.map((data) => 
                AllProducts.map((Prod) => {
                    if (Prod.ID == data.商品ID) {
                        console.log({ ...Prod, ...data });
                        UserProductDatas = [...UserProductDatas,{ ...Prod, ...data }];
                        // setUserProductDatas([...UserProductDatas, { ...Prod, ...data }]);
                        setShowDatas(UserProductDatas);
                    }
                }),
                
            )
        }
    }, [UserCardDatas])


    return (
        <Box sx={style}>
            {ShowDatas &&
            ShowDatas.map((data) => {
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
                        <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 4 }}>${data.商品價格}</Typography>
                        <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 4 }}>數量{data.商品價格}</Typography>
                        <Typography variant="h5" color="initial" sx={{ alignSelf: "center", ml: 8 }}>總價格${(data.數量) * data.商品價格}</Typography>
                    </Box>
                )
            })}
        </Box>
    );
}
