import React from 'react';
import './cartDropDown.scss';
import CustomButton from '../customButton/customButton';
import CartItem from '../cartItem/cartItem';
import { connect } from 'react-redux';



const CartDropDown = (props) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {props.cartItems.map(x=>(
                <CartItem key={x.id} item={x}/> 
            ))}
               
        </div>
        <CustomButton>Checkout yo</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems} }) =>({
    cartItems
});

export default connect(mapStateToProps)(CartDropDown);