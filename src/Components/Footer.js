
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

function Footer() {
    return (
        <Box sx={{ backgroundColor: "rgb(0,0,0)", minHeight: "20rem" }} fullwidth>
            <Stack direction={"row"} spacing={10} sx={{p:10,display:"flex",alignItems:"center" , justifyContent:"center"}}>
                <Stack sx={{width:"10rem"}}>
                    <Button variant="text" sx={{color:"#fff"}}>
                        客服中心
                    </Button>
                    <Divider sx={{backgroundColor:"#fff"}}/>
                    <Button variant="text" sx={{color:"#fff"}}>
                        幫助
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        隱私
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        聯繫
                    </Button>
                </Stack>
                <Stack sx={{width:"10rem"}}>
                    <Button variant="text" sx={{color:"#fff"}}>
                        使用者中心
                    </Button>
                    <Divider sx={{backgroundColor:"#fff"}}/>
                    <Button variant="text" sx={{color:"#fff"}}>
                        登入
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        註冊
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        聯繫
                    </Button>
                </Stack>
                <Stack sx={{width:"10rem"}}>
                    <Button variant="text" sx={{color:"#fff"}}>
                        關注我們
                    </Button>
                    <Divider sx={{backgroundColor:"#fff"}}/>
                    <Button variant="text" sx={{color:"#fff"}}>
                        幫助
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        隱私
                    </Button>
                    <Button variant="text" sx={{color:"#fff"}}>
                        聯繫
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Footer;