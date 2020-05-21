import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    globalUser: null,
    status: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                globalUser: action.payload
            }

            case UserActionTypes.SET_USER_STATUS:
                return {
                    ...state,
                    status: action.payload
                }

        default:
            return state;
    }
};

export default userReducer;