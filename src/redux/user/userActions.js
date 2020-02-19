import { UserActionTypes } from './userActionTypes';


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
    //payload: emailPassword
    
});

export const emailSignInStart = emailPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailPassword
    
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
    
});

export const signInError = errorMsg => ({
    type: UserActionTypes.SIGN_IN_FAIL,
    payload: errorMsg
    
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
    
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
    
});

export const signOutError = errorMsg => ({
    type: UserActionTypes.SIGN_OUT_FAIL,
    payload: errorMsg
    
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
    
});

export const signUpStart = signUp => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: signUp
    
});

export const signUpError = errorMsg => ({
    type: UserActionTypes.SIGN_UP_FAIL,
    payload: errorMsg
    
});

export const signUpSuccess = user => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
    
});