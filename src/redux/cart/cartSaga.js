import { takeLatest, call, all, put } from 'redux-saga/effects';
import { UserActionTypes } from '../user/userActionTypes';
import { clearCart } from './cartActions';

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ]);
}

export function* onSignOutSuccess(){
    yield takeLatest(
        UserActionTypes.SIGN_OUT_SUCCESS, 
        onSignOut
    );
}

export function* onSignOut(){
    
    yield put(clearCart());
}