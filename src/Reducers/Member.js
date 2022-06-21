



const Member = (state = {}, action) => {
    switch (action.type) {
        case 'SetMemberStore':
            return action.Data;

        default:
            return state
    }
}
export default Member;