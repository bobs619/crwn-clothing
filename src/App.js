import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/header/header';
import SignIn from './pages/signIn/signIn.js'
import { auth, createUserProfDoc } from './firebase/firebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

class App extends React.Component {
  
  unsubFromAuth = null;

  componentDidMount(){
    this.unsubFromAuth = auth.onAuthStateChanged(async x=>{
      
      const {setCurrentUser} = this.props;

      //this.setState({currentUser: x});
      setCurrentUser({currentUser: x})
      
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

    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
