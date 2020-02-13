import React from 'react';
import './cartDropDown.scss';
import CustomButton from '../customButton/customButton';



const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Checkout yo</CustomButton>
    </div>
);


export default CartDropDown;