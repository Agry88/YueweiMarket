import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";

import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SetMemberStore } from "../Actions/index"


const theme = createTheme();

export default function Login() {
    const dispatch = useDispatch();
    const Params = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState("");
    const Member = useSelector(state => state.Member);

    useEffect(() => {
        const WarningMessage = Params.Messege
        setStatus(WarningMessage);
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus("");
        const data = new FormData(event.currentTarget);
        if (!data.get("Account")) {
            setStatus("請輸入使用者代號");
            return;
        }
        if (!data.get("password")) {
            setStatus("請輸入密碼");
            return;
        }

        dispatch(SetMemberStore("member", "登入", data.get("Account"), data.get("password")));

    };

    useEffect(() => {
        if (JSON.stringify(Member) != '{}') {
            navigate("/");
        } else {
            setStatus("帳號密碼有誤");
        }
    }, [Member])


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        登入
                    </Typography>
                    <Typography
                        component="p"
                        variant="p"
                        color="#e00"
                        sx={{ mt: 1 }}
                    >
                        {status}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            fullWidth
                            id="Account"
                            label="會員帳號"
                            name="Account"
                            autoComplete="username"
                            required
                            sx={{ backgroundColor: "#fff" }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="會員密碼"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            required
                            sx={{ backgroundColor: "#fff" }}

                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            登入
                        </Button>
                        <Button
                            component={Link}
                            fullWidth
                            variant="outlined"
                            endIcon={<PersonAddAltIcon />}
                            sx={{ mb: 2, backgroundColor: "#fff" }}
                            to="/Register"
                        >
                            還沒有帳號嗎? 註冊
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
