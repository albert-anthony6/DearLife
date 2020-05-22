import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import postReducer from './redux-post/post.reducer';

export default combineReducers({
    user: userReducer,
    post: postReducer
});