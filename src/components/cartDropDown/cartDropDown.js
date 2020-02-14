import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { cartToggle } from '../../redux/cart/cartActions'

import './cartDropDown.scss';

const CartDropDown = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? 
                cartItems.map(x=>(
                    <CartItem key={x.id} item={x}/> 
                ))
            :
            <span className='empty-message'>Your cart is empty</span>
            
            }
               
        </div>
        <CustomButton onClick={() => {history.push('/checkout'); dispatch(cartToggle())}}>Checkout yo</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropDown));