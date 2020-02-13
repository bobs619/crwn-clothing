import React from 'react';
import './signUpForm.scss';
import FormInput from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { auth, createUserProfDoc } from '../../firebase/firebaseUtils';


class SignUpForm extends React.Component{
    constructor(props){
        
        super(props);

        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }

       

    }

    handleSubmit = async e => {
      e.preventDefault();

      const {displayName,email,password,confirmPassword} = this.state;

      if(password!==confirmPassword){
        alert('nope');
        return;
      }

      try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfDoc(user, {displayName});

        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });

      }catch(err){
        console.log('err creating user', err.message)
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
            <div className='sign-in'>
              <h2>I do not have an account</h2>
              <span>create account</span>

              <form onSubmit={this.handleSubmit} className='sign-up-form'> 

                <FormInput name='displayName' label='Name' value={this.state.displayName} required type='text' onChange={this.handleChange} />  

                <FormInput name='email' label='Email' value={this.state.email} required type='email' onChange={this.handleChange} />
       
                <FormInput name='password' label='Password' value={this.state.password} required type='password' onChange={this.handleChange} />

                <FormInput name='confirmPassword' label='Confirm Password' value={this.state.confirmPassword} required type='password' onChange={this.handleChange} />

                <div className='buttons'>
                  <CustomButton type='submit'>Sign up yo</CustomButton>
                  
                </div>
              </form>
            </div>
        );
    }
}


    

export default SignUpForm;