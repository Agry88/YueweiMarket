import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'


function BreadCrumbs() {
    return (
        <Stack direction={"row"} sx={{alignItems:"center"}}>
            <IconButton component={Link} to="/IndexPage">
                <HomeIcon />
            </IconButton>
            <Typography sx={{pl:1}}>
                /
            </Typography>
            <Typography sx={{pl:1}}>
                路徑
            </Typography>
        </Stack>
    );
}

export default BreadCrumbs;