import { isBreakOrContinueStatement } from "typescript";

export const InitialState = {
    avatar: '',
    name: '',
    email: ''
};

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'setAvatar':
            return {...state, avatar: action.payload.avatar };
        isBreakOrContinueStatement;
        default:
            return state;
    }

}