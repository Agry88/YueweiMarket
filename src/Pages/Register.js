import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AddMember } from './../Actions/index';

const theme = createTheme();


export default function Register() {
    const dispatch = useDispatch();
    const [status, setStatus] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus("");
        const data = new FormData(event.currentTarget);
        if (data.get("password") !== data.get("passwordConfirm")) {
            setStatus("密碼互不相符");
            return;
        }
        if (data.get("isAllowPrivacy") !== "yes") {
            setStatus("未同意隱私權政策");
            return;
        }
        AddMember("member", "註冊", data.get("Account"),data.get("Address"),data.get("Phone"), data.get("password"));
        navigate("/Login");
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{height:"100vh"}}>
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
                        <GroupAddIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        註冊
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
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    id="Account"
                                    name="Account"
                                    label="會員帳號"
                                    autoComplete="username"
                                    fullWidth
                                    required
                                    sx={{backgroundColor:"#fff"}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Address"
                                    name="Address"
                                    label="會員地址"
                                    autoComplete="address"
                                    fullWidth
                                    required
                                    sx={{backgroundColor:"#fff"}}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="Phone"
                                    name="Phone"
                                    label="會員電話"
                                    autoComplete="phone"
                                    fullWidth
                                    required
                                    sx={{backgroundColor:"#fff"}}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    name="password"
                                    label="密碼"
                                    type="password"
                                    fullWidth
                                    required
                                    sx={{backgroundColor:"#fff"}}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                    label="再次確認會員密碼"
                                    type="password"
                                    fullWidth
                                    required
                                    sx={{backgroundColor:"#fff"}}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="isAllowPrivacy"
                                            color="primary"
                                            value="yes"
                                            
                                        />
                                    }
                                    label="我同意隱私權政策"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            endIcon={<SendIcon />}
                        >
                            註冊
                        </Button>
                        <Button
                            component={Link}
                            fullWidth
                            variant="outlined"
                            endIcon={<LoginIcon />}
                            sx={{ mb: 2 , backgroundColor:"#fff"}}
                            to="/Login"                                
                        >
                            已經有帳號了嗎? 來登入吧
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
