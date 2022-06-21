import { combineReducers } from "redux";
import ProductsReducer from "./Products";
import MemberReducer from "./Member";
import ShopCarReducer from "./ShopCar";
import SailTitleReducer from "./SailTitle";

const allReducers = combineReducers({
    Products:ProductsReducer,
    Member:MemberReducer,
    ShopCar:ShopCarReducer,
    SailTitle:SailTitleReducer,
})

export default allReducers;