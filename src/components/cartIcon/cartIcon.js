import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartToggle } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { CartContainer, ShoppingIcon, ItemCountContainer} from './cartIconStyle';


const CartIcon = (props) => (
    <CartContainer onClick={props.cartToggle}>
        <ShoppingIcon />
        <ItemCountContainer>{props.itemCount}</ItemCountContainer>
    </CartContainer>
);


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);