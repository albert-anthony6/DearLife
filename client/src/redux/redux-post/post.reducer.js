import { PostActionTypes } from "./post.types";

const INITIAL_STATE = {
    postId: null
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PostActionTypes.SET_POST_ID:
            return {
                ...state,
                postId: action.payload
            }

        default:
            return state;
    }
};

export default postReducer;