import { PostActionTypes } from './post.types';

export const setPostId = (id) => ({
    type: PostActionTypes.SET_POST_ID,
    payload: id
});