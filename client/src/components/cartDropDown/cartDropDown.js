import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { cartToggle } from '../../redux/cart/cartActions'

import { DropDownContainer, CartItems, EmptyMessage } from './cartDropDownStyles';

const CartDropDown = ({cartItems, history, dispatch }) => (
    <DropDownContainer>
        <CartItems>
            {cartItems.length ? 
                cartItems.map(x=>(
                    <CartItem key={x.id} item={x}/> 
                ))
            :
            <EmptyMessage>Your cart is empty</EmptyMessage>
            
            }
               
        </CartItems>
        <CustomButton onClick={() => {history.push('/checkout'); dispatch(cartToggle())}}>Checkout yo</CustomButton>
    </DropDownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});



export default withRouter(connect(mapStateToProps)(CartDropDown));