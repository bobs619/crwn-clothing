import { ShopActionTypes } from './shopActionTypes';

export const setCollections = collections => ({
    type: ShopActionTypes.SET_COLLECTIONS,
    payload: collections
});