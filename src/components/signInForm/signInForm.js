import React from 'react';
import './signInForm.scss';
import FormInput from '../../components/formInput/formInput';
import CustomButton from '../../components/customButton/customButton';
import { signInWithGoogle } from '../../firebase/firebaseUtils'

class SignInForm extends React.Component{
    constructor(props){
        
        super(props);

        this.state = {
          email: '',
          password: ''
        }

       

    }

    handleSubmit = e => {
      e.preventDefault();

      this.setState({
        email: '',
        password: ''
      });
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
            <div className='sign-in'>
              <h2>I already have an account</h2>
              <span>sign in</span>

              <form onSubmit={this.handleSubmit}>
                <FormInput name='email' label='Email' value={this.state.email} required type='email' onChange={this.handleChange} />
       
                <FormInput name='password' label='Password' value={this.state.password} required type='password' onChange={this.handleChange} />

                <div className='buttons'>
                  <CustomButton type='submit'>Sign in yo</CustomButton>
                  <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google bro</CustomButton>
                </div>
              </form>
            </div>
        );
    }
}


    

export default SignInForm;