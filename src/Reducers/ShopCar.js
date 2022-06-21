
const ShopCar = (state = [], action) => {
    switch (action.type) {
        case 'SetShopCar':
            return action.Data;
        case "AddShopCar":
            const data = action.Data;
            return [...state, { ...data }]

        default:
            return state
    }
}
export default ShopCar;