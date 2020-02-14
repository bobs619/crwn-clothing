import { CartActionTypes } from './cartActionTypes';
import { addItemToCart, removeItemFromCart } from './cartUtils';

const INIT_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case CartActionTypes.CART_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;

    }
}

export default cartReducer;