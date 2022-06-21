
const Product = (state = [], action) => {
    switch (action.type) {
        case 'SetProductStore':
            return action.Data;

        default:
            return state
    }
}
export default Product;