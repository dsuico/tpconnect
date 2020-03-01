import {updateObject} from "../utility";
const initState = {
    username: null
};

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SIGN_IN': 
            console.log('SIGN_IN',action);
            break;
        case 'LOGIN_SUCCESS':
            return updateObject(state, {
                username: action.username.username
            });
        default:
            return state;
    }
};

export default authReducer;