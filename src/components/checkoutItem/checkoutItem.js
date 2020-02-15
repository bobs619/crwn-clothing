import React from 'react';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import { addItem, removeItem } from '../../redux/cart/cartActions'

import { CheckoutItemContainer, ImageContainer, QuantityContainer, RemoveButtonContainer, TextContainer } from './checkoutItemStyles';

const CheckoutItem = ({item, dispatch }) => (
    <CheckoutItemContainer>
        <ImageContainer>
            <img alt='item' src={item.imageUrl} />
        </ImageContainer>
        <TextContainer>{item.name}</TextContainer>
        <QuantityContainer> 
            <div onClick={() => dispatch(removeItem({...item, quantity: 1}))}>&#10094;</div>
            <span>{item.quantity}</span>
            <div onClick={() => dispatch(addItem({...item, quantity: 1}))}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>${item.price * item.quantity} @ ${item.price}/ea. </TextContainer>
        <RemoveButtonContainer><span onClick={() => dispatch(removeItem(item))}>&#10005;</span></RemoveButtonContainer>
    </CheckoutItemContainer>
);




export default withRouter(connect(null)(CheckoutItem));