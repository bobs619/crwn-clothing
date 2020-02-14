import React from 'react';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


import { addItem, removeItem } from '../../redux/cart/cartActions'

import './checkoutItem.scss';

const CheckoutItem = ({item, dispatch }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={item.imageUrl} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'> 
            <div className='arrow' onClick={() => dispatch(removeItem({...item, quantity: 1}))}>&#10094;</div>
            <span className='value'>{item.quantity}</span>
            <div className='arrow' onClick={() => dispatch(addItem({...item, quantity: 1}))}>&#10095;</div>
        </span>
        <span className='price'>${item.price * item.quantity} @ ${item.price}/ea. </span>
        <div className='remove-button'><span onClick={() => dispatch(removeItem(item))}>&#10005;</span></div>
       
    </div>
);




export default withRouter(connect(null)(CheckoutItem));