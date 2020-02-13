import React from 'react';

import './signIn.scss';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm/signUpForm';


const SignIn = () => (
    <div className='sign-in-and-sign-up'>
        <SignInForm />
        <SignUpForm />
    </div>
);

export default SignIn;