import { PostActionTypes } from "./post.types";

const INITIAL_STATE = {
    postId: null,
    postDetails: null
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PostActionTypes.SET_POST_ID:
            return {
                ...state,
                postId: action.payload
            }

            case PostActionTypes.SET_CURRENT_POST:
                return {
                    ...state,
                    postDetails: action.payload
                }

        default:
            return state;
    }
};

export default postReducer;