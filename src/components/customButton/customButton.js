import React from 'react';
import './customButton.scss';


const CustomButton = ({isGoogleSignIn, inverted, ...props}) => (
        <button 
            className={`
                ${inverted ? 'inverted' : ''} 
                ${isGoogleSignIn ? 'google-sign-in' : ''} 
                custom-button
            `} 
            {...props}
        >
            {props.children}
        </button>
    );


export default CustomButton;