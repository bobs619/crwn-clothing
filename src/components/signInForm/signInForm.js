import React from 'react';

import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';
//import { signInWithGoogle, auth } from '../../firebase/firebaseUtils'
import { connect } from 'react-redux';

import { SignInTitle, SignInContainer, ButtonsBarContainer } from './signInFormStyles';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';

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

      const { emailSignInStart } = this.props;


      emailSignInStart(email, password);

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
      
      const { googleSignInStart } = this.props;

      return (
          <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>sign in</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput name='email' label='Email' value={this.state.email} required type='email' onChange={this.handleChange} />
      
              <FormInput name='password' label='Password' value={this.state.password} required type='password' onChange={this.handleChange} />

              <ButtonsBarContainer>
                <CustomButton type='submit'>Sign in yo</CustomButton>
                <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google bro</CustomButton>
              </ButtonsBarContainer>
            </form>
          </SignInContainer>
      );
    }
}


    
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email,password) =>  dispatch(emailSignInStart({email,password}))
});


export default connect(null, mapDispatchToProps)(SignInForm);