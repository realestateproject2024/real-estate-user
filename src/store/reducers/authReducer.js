import { AUTHCHECK } from "../types/actionType";

const initialAuthState = {
    loginAuth: false,
    token: null,
    userData: []
}

const userAuthReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTHCHECK:
            return {
                ...state,
                loginAuth: action.data.loginAuth,
                token: action.data.token,
                userData: action.data.userData
            }
        default:
            return state;
    }
}

export default userAuthReducer;