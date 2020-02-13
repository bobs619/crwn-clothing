import React from 'react';
import './customButton.scss';


const CustomButton = ({isGoogleSignIn, ...props}) => (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...props}>
            {props.children}
        </button>
    );


export default CustomButton;