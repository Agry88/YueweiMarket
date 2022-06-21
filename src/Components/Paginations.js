
import Pagination from "@mui/material/Pagination";
import Box from '@mui/material/Box';

function Paginations() {
    return (
        <Box sx={{display:"flex" ,justifyContent:"center"}}>
            <Pagination count={10} size="large"/>
        </Box>
    );
}

export default Paginations;