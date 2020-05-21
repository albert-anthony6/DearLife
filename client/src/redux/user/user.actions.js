import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const setUserStatus = (status) => ({
    type: UserActionTypes.SET_USER_STATUS,
    payload: status
});