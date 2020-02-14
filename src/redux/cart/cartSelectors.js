import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartToggle = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((x,y)=>x+y.quantity,0)  
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((x,y)=>x + y.quantity * y.price,0)  
);