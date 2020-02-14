import React from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { cartToggle } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import './cartIcon.scss';


const CartIcon = (props) => (
    <div className='cart-icon' onClick={props.cartToggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{props.itemCount}</span>
    </div>
);


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);