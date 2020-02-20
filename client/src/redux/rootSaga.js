import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shopSaga';
import { userSagas } from './user/userSaga';
import { cartSagas } from './cart/cartSaga';


export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart),
        call(userSagas),
        call(cartSagas)
    ])
}