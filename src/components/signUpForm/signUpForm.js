import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';


import { SignUpContainer, SignUpTitle } from './signUpFormStyles';
import { signUpStart } from '../../redux/user/userActions';


const SignUpForm = ({signUpStart}) => {
  
    const [signUpObj, setSignUpObj] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    const {displayName,email, password, confirmPassword} = signUpObj;

    const handleSubmit = async e => {
      e.preventDefault();
      
      if(password!==confirmPassword){
        alert('nope');
        return;
      }
      
      signUpStart(signUpObj);

      
    }

    const handleChange = e => {
      const {value, name} = e.target;

      setSignUpObj({
        ...signUpObj,
        [name]: 
        value
      });
    }

    return (
        <SignUpContainer>
          <SignUpTitle>I do not have an account</SignUpTitle>
          <span>create account</span>

          <form onSubmit={handleSubmit} className='sign-up-form'> 

            <FormInput name='displayName' label='Name' value={displayName} required type='text' onChange={handleChange} />  

            <FormInput name='email' label='Email' value={email} required type='email' onChange={handleChange} />
    
            <FormInput name='password' label='Password' value={password} required type='password' onChange={handleChange} />

            <FormInput name='confirmPassword' label='Confirm Password' value={confirmPassword} required type='password' onChange={handleChange} />

            <div className='buttons'>
              <CustomButton type='submit'>Sign up yo</CustomButton>
              
            </div>
          </form>
        </SignUpContainer>
    );
    
}


const mapDispatchToProps = dispatch => ({
  signUpStart: signUp => dispatch(signUpStart(signUp))
});
    

export default connect(null, mapDispatchToProps)(SignUpForm);