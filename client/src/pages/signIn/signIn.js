import React from 'react';

import { SignInAndSignUpContainer } from  './signInStyles';
import SignInForm from '../../components/signInForm/signInForm';
import SignUpForm from '../../components/signUpForm/signUpForm';


const SignIn = () => (
    <SignInAndSignUpContainer>
        <SignInForm />
        <SignUpForm />
    </SignInAndSignUpContainer>
);

export default SignIn;