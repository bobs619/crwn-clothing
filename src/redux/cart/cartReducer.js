import { CartActionTypes } from './cartActionTypes';

const INIT_STATE = {
    hidden: true
}

const cartReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case CartActionTypes.CART_TOGGLE:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;

    }
}

export default cartReducer;