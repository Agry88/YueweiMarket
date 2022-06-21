
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import BreadCrumbs from './../Components/BreadCrumbs';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageCard from './../Components/ImageCard';
import Footer from './../Components/Footer';
import Paginations from './../Components/Paginations';
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { SetProductStore } from './../Actions/index';



function IndexPage() {
    const dispatch = useDispatch();
    const Datas = useSelector(state=>state.Products);

    useEffect(() => {
        dispatch(SetProductStore());
    }, [])
    

    return (
        <Box>
            <Box sx={{ minHeight: "200px", p: "5rem" }}>
                <Typography variant="h1" color="initial">高科超棒租屋網</Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 10 }}>
                <BreadCrumbs />
                <ImageList
                    cols={4}
                    rowHeight={250}
                    sx={{
                        width: "auto",
                        minHeight: 650,
                    }}
                >   
                    
                    {Datas&&
                    Datas.map((data) => {
                        return <ImageCard key={data.ID} Data={data} />
                    })}
                </ImageList>
                <Paginations />
            </Box>
            <Footer />
        </Box>
    );
}

export default IndexPage;