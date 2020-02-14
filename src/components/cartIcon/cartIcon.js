import React from 'react';
import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux'
import { cartToggle } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';


const CartIcon = (props) => (
    <div className='cart-icon' onClick={props.cartToggle}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{props.itemCount}</span>
    </div>
);


const mapStateToProps = state =>({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    cartToggle: () => dispatch(cartToggle())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);