import React from 'react';
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cartItemStyles';

const CartItem = ({item}) => (
    <CartItemContainer>
        <CartItemImage src={item.imageUrl} alt='item'/>

        <ItemDetailsContainer>
            <span className='name'>{item.name}</span>
            <span className='price'>{item.quantity} x {item.price}</span>
        </ItemDetailsContainer>
        
            
    </CartItemContainer>
);

export default CartItem;