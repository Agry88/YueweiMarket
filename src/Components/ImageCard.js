
import { Link } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


function ImageCard(props) {
    const { Data } = props; 
    return (
        <ImageListItem
            sx={{
                width: 350,
                p: 3,
                border: 1,
                borderColor: "#fff",
                borderRadius: 5,
                ":hover": {
                    borderColor: "#eee",
                },
            }}
        >
            <Link to={`/ProductDetail/${Data.ID}`}>
                <img
                    alt={"123"}
                    style={{ width: 350, height: 200 }}
                    src={Data.src}
                    loading="lazy"
                />
            </Link>
            <ImageListItemBar
                title={"名稱:"}
                subtitle={<span>{Data.商品名稱}</span>}
                position="below"
            />
        </ImageListItem>
    );
}

export default ImageCard;