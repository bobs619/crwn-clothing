import React from 'react';
import axios from 'axios';

import StripCheckout from 'react-stripe-checkout';


const StripButton = ({price}) => {

    const newPrice = price * 100;
    const key = 'pk_test_GZQeTT5tVrCqC5V1djgruOjj00kW5bXozt';

    const onToken = token => {
        console.log(token);
        //alert('Payment Succesful');

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: newPrice,
                token

            }
        }).then(res=>{
            alert('Payment Successful');
        }).catch(err=>{
            console.log('Payment Err: ', JSON.parse(err));
            alert('Payment Fail');
        });
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