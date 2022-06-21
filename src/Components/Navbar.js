import { useNavigate, Link } from 'react-router-dom'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SetMemberStoreEmpty } from './../Actions/index';

function Navbar() {

    const navigation = useNavigate();
    const dispatch = useDispatch();
    const Member = useSelector(state => state.Member);

    const ReturnToIndex = () => {
        navigation("/IndexPage");
    }
    const handleSearch = () => {
        console.log("Search");
    }
    const [SelectProd, setSelectProd] = useState("");

    const handleLogout = () => {
        dispatch(SetMemberStoreEmpty())
    }


    return (
        <AppBar position="fixed" color="primary">
            <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                    <IconButton onClick={ReturnToIndex}>
                        <HomeIcon sx={{ color: "#fff" }} />
                        <Typography variant="h6" sx={{ color: "#fff" }}>
                            燕巢超級超市
                        </Typography>
                    </IconButton>
                </Stack>
                <Paper sx={{ width: "20rem", height: "2rem", borderRadius: 5, display: "flex" }}>
                    <InputBase
                        label="請輸入關鍵字或品牌名稱"
                        value={SelectProd}
                        onChange={e => setSelectProd(e.target.value)}
                        sx={{ borderRadius: 5, height: "2rem", width: "83%", pl: 2 }}
                    />
                    <IconButton onClick={handleSearch}>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Stack direction={"row"} sx={{ alignItems: "center" }}>
                    <Button variant="text" sx={{ color: "#fff" }} component={Link} to="/IndexPage">
                        首頁
                    </Button>
                    {JSON.stringify(Member) != '{}' &&
                        <Button variant="text" sx={{ color: "#fff" }} component={Link} to="/ShopCar">
                            檢視購物車
                        </Button>}
                    {JSON.stringify(Member) != '{}' &&
                        <Button variant="text" sx={{ color: "#fff" }} component={Link} to="/SailTitle">
                            檢視訂單明細
                        </Button>}
                    {JSON.stringify(Member) === '{}' ?
                        <Button variant="text" sx={{ color: "#fff" }} component={Link} to="/Login">
                            登入
                        </Button>
                        :
                        <Button variant="text" sx={{ color: "#fff" }} onClick={handleLogout}>
                            登出
                        </Button>
                    }

                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;