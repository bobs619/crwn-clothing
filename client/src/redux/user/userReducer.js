import { UserActionTypes } from './userActionTypes';

const INIT_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS:
        return {
            ...state,
            currentUser: action.payload,
            error: null
        }
        case UserActionTypes.GOOGLE_SIGN_IN_START:
        case UserActionTypes.EMAIL_SIGN_IN_START:
        return {
            ...state,
            error: null
        }
        case UserActionTypes.SIGN_UP_FAIL:
        case UserActionTypes.SIGN_OUT_FAIL:
        case UserActionTypes.SIGN_IN_FAIL:
        return {
            ...state,
            error: action.payload

        }
        case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
            ...state,
            currentUser: null,
            error: null
        }

        default:
            return state;

    }
}

export default userReducer;