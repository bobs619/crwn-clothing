import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import CheckoutItem  from '../../components/checkoutItem/checkoutItem';
import StripeButton from '../../components/stripeButton/stripeButton';


import { WarningContainer, TotalContainer, CheckoutHeaderContainer, HeaderBlockContainer, CheckoutPageContainer } from './checkoutStyles';


const Checkout = ({cartItems,cartTotal}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Desc</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Qty</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(x=>(
                <CheckoutItem item={x} key={x.id} />
            ))
        }
        <TotalContainer>
            <span>TOT: ${cartTotal}</span>
        </TotalContainer>

        <WarningContainer>4242424242424242</WarningContainer>

        <StripeButton price={cartTotal} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);