import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Header from './components/header/header';

import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignIn from './pages/signIn/signIn';
import Checkout from './pages/checkout/checkout';
import { selectCurrentUser } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';

import './App.css';

class App extends React.Component {
  
  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
   
  }

  render(){
    const { currentUser } = this.props;

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
              currentUser ? 
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
