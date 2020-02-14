import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfDoc } from './firebase/firebaseUtils';
import { connect } from 'react-redux';

import Header from './components/header/header';

import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignIn from './pages/signIn/signIn';
import Checkout from './pages/checkout/checkout';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';

import './App.css';

class App extends React.Component {
  
  unsubFromAuth = null;

  componentDidMount(){
    this.unsubFromAuth = auth.onAuthStateChanged(async x=>{
      
      const {setCurrentUser} = this.props;

      setCurrentUser(x)
      
      if(x){
        const userRef = await createUserProfDoc(x);

        userRef.onSnapshot(d=>{
          setCurrentUser({
            
              id: d.id,
              ...d.data()
            
          });
        });

        
      }
      
      

    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render(){
    console.log(this.props.currentUser);
    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signIn' 
            render={()=>(
              this.props.currentUser ? 
                <Redirect to='/' />
              :
                <SignIn />
            )} 
            />
            <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
