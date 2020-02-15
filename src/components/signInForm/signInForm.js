import React from 'react';

import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';
import { signInWithGoogle, auth } from '../../firebase/firebaseUtils'

import { SignInTitle, SignInContainer, ButtonsBarContainer } from './signInFormStyles';

class SignInForm extends React.Component{
    constructor(props){
        
        super(props);

        this.state = {
          email: '',
          password: ''
        }
    }

    handleSubmit = async e => {
      e.preventDefault();

      const { email, password } = this.state;

      try{

        console.log(password);

        await auth.signInWithEmailAndPassword(email, password);

        this.setState({
          email: '',
          password: ''
        });

      }catch(err){
        console.log('err authenticating user', err.message)
      }

    }

    handleChange = e => {
      //e.preventDefault();

      const {value, name} = e.target;

      this.setState({
        [name]: 
        value
      });
    }

    render(){
        return (
            <SignInContainer>
              <SignInTitle>I already have an account</SignInTitle>
              <span>sign in</span>

              <form onSubmit={this.handleSubmit}>
                <FormInput name='email' label='Email' value={this.state.email} required type='email' onChange={this.handleChange} />
       
                <FormInput name='password' label='Password' value={this.state.password} required type='password' onChange={this.handleChange} />

                <ButtonsBarContainer>
                  <CustomButton type='submit'>Sign in yo</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google bro</CustomButton>
                </ButtonsBarContainer>
              </form>
            </SignInContainer>
        );
    }
}


    

export default SignInForm;