import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Components/Navbar';
import IndexPage from "./Pages/IndexPage";
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ShopCar from './Pages/ShopCar';
import Check from './Pages/Check';
import SailTitle from './Pages/SailTitle';

function App() {
  return (
    <Router basename={"/YueweiMarket"}>
      <Box sx={{ backgroundColor: "grey.100" }}>
        <Navbar />
        <Box sx={{ pt: "4rem" }}>
          <Routes>
            <Route path="/" element={<Navigate to="/IndexPage" replace={true} />} />
            <Route path="/IndexPage" element={<IndexPage />} />
            <Route path="/Login/:Messege" element={<Login />} />
            <Route path="/Login/" element={<Login />} />
            <Route path="/Check/" element={<Check />} />
            <Route path="/SailTitle/" element={<SailTitle />} />
            <Route path="/ShopCar" element={<ShopCar />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ProductDetail/:ProdID" element={<ProductDetail />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
