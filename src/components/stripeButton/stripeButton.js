import React from 'react';

import StripCheckout from 'react-stripe-checkout';


const StripButton = ({price}) => {

    const newPrice = price * 100;
    const key = 'pk_test_GZQeTT5tVrCqC5V1djgruOjj00kW5bXozt';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }

    return (
        <StripCheckout
            label='Pay Me'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={newPrice}
            panelLabel='Pay'
            token={onToken}
            stripeKey={key}
        />
    );
};

export default StripButton;