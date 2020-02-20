import React, { useState } from 'react';

import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';
import { connect } from 'react-redux';

import { SignInTitle, SignInContainer, ButtonsBarContainer } from './signInFormStyles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';

const SignInForm = ({googleSignInStart, emailSignInStart}) => {
    

    const [creds, setCreds] = useState({email: '', password: ''});
    
    const { email, password } = creds;

    const handleSubmit = async e => {
      e.preventDefault();

      emailSignInStart(email, password);

    }

    const handleChange = e => {
      //e.preventDefault();

      const {value, name} = e.target;

      setCreds({...creds,[name]:value});
    }

    return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>sign in</span>

          <form onSubmit={handleSubmit}>
            <FormInput name='email' label='Email' value={email} required type='email' onChange={handleChange} />
    
            <FormInput name='password' label='Password' value={password} required type='password' onChange={handleChange} />

            <ButtonsBarContainer>
              <CustomButton type='submit'>Sign in yo</CustomButton>
              <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google bro</CustomButton>
            </ButtonsBarContainer>
          </form>
        </SignInContainer>
    );
    
}


    
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) =>  dispatch(emailSignInStart({email,password}))
});


export default connect(null, mapDispatchToProps)(SignInForm);