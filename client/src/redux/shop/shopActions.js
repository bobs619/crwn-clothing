import { ShopActionTypes } from './shopActionTypes';
import { fireStore, convertCollectionToSnapShop } from '../../firebase/firebaseUtils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
    
});

export const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
    
});

export const fetchCollectionsError = errorMsg => ({
    type: ShopActionTypes.FECTH_COLLECTIONS_ERROR,
    payload: errorMsg
    
});

export const fetchCollectionsAsync = () => {
    return dispatch => {
        const collectionRef = fireStore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then(async d =>  {
            dispatch(fetchCollectionsSuccess(convertCollectionToSnapShop(d)))
        }).catch(err=>dispatch(fetchCollectionsError(err.message)));

    }
}