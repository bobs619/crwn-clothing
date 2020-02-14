import { CartActionTypes } from './cartActionTypes';

export const cartToggle = () => ({
    type: CartActionTypes.CART_TOGGLE
   
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
   
});