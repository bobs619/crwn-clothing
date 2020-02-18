import { ShopActionTypes } from './shopActionTypes';
//import ShopData from '../../redux/shop/shop.data';

const INIT_STATE = {
  collections: []//ShopData
}

const shopReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case ShopActionTypes.SET_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;

    }
}

export default shopReducer;