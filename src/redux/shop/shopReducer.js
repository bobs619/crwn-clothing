import { ShopActionTypes } from './shopActionTypes';
//import ShopData from '../../redux/shop/shop.data';

const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMsg: undefined
}

const shopReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            }
        default:
            return state;

    }
}

export default shopReducer;