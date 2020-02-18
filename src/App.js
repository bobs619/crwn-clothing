import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { auth, createUserProfDoc/*, addCollection*/ } from './firebase/firebaseUtils';
import { connect } from 'react-redux';

import Header from './components/header/header';

import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignIn from './pages/signIn/signIn';
import Checkout from './pages/checkout/checkout';

import { setCurrentUser } from './redux/user/userActions';
import { selectCurrentUser } from './redux/user/userSelectors';
//import { selectCollectionsForPreview } from './redux/shop/shopSelectors';

import './App.css';

class App extends React.Component {
  
  unsubFromAuth = null;

  componentDidMount(){

    const {setCurrentUser/*, collections*/} = this.props;

    this.unsubFromAuth = auth.onAuthStateChanged(async x=>{
      
      if(x){
        const userRef = await createUserProfDoc(x);

        userRef.onSnapshot(d=>{
          setCurrentUser({
              id: d.id,
              ...d.data()
          });
        });

        return;
      }

      setCurrentUser(x);
      //addCollection('collections', collections.map(({title,items}) => ({title, items})));

    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render(){

    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
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
  currentUser: selectCurrentUser,
 // collections: selectCollectionsForPreview
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
