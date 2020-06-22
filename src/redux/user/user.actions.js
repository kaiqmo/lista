import {UserActionTypes} from './user.types';

export const setCurrentUser = user =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const AddItem = user =>({
    type: UserActionTypes.ADD_USER_ITEM,
    payload: user
});

export const AlterItem = user =>({
    type: UserActionTypes.ALTER_USER_ITEM,
    payload: user
});


export const DeleteItem = user =>({
    type: UserActionTypes.DELETE_USER_ITEM,
    payload: user
});


//praticamente um json