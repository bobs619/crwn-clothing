import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem  from '../../components/checkoutItem/checkoutItem';
import StripeButton from '../../components/stripeButton/stripeButton';


import './checkout.scss';


const Checkout = ({cartItems,cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Desc</span>
            </div>
            <div className='header-block'>
                <span>Qty</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(x=>(
                <CheckoutItem item={x} key={x.id} />
            ))
        }
        <div className='total'>
            <span>TOT: ${cartTotal}</span>
        </div>

        <h1>4242424242424242</h1>

        <StripeButton price={cartTotal} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);