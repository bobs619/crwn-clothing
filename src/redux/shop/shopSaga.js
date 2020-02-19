import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopActionTypes } from './shopActionTypes';
import { fireStore, convertCollectionToSnapShop } from '../../firebase/firebaseUtils';
import { fetchCollectionsError, fetchCollectionsSuccess } from './shopActions';



export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}


export function* fetchCollectionsAsync(){
    //yield console.log('yo');

    try{
        const collectionRef = fireStore.collection('collections');

        const snapShot = yield collectionRef.get();

        const collectionMap = yield call(
            convertCollectionToSnapShop,
            snapShot
        );

        //console.log(collectionMap);

       yield put(fetchCollectionsSuccess(collectionMap));
    }catch(e){
       yield put(fetchCollectionsError(e.message));
    }

    
}
