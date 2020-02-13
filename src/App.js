import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route, Switch, Redirect } from 'react-router-dom';
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
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
