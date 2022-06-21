

const SailTitle = (state = [], action) => {
    switch (action.type) {
        case 'SetSailTitleStore':
            return action.Data;

        default:
            return state
    }
}
export default SailTitle;