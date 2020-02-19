import { CartActionTypes } from './cartActionTypes';

export const cartToggle = () => ({
    type: CartActionTypes.CART_TOGGLE
   
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
   
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
   
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
   
});