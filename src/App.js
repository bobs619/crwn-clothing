import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route, Switch } from 'react-router-dom';
import Header from '../src/components/header/header';
import SignIn from './pages/signIn/signIn.js'
import { auth, createUserProfDoc } from './firebase/firebaseUtils';


class App extends React.Component {
  constructor(){

    super();

    this.state = {currentUser: null};


  }


  unsubFromAuth = null;

  componentDidMount(){
    this.unsubFromAuth = auth.onAuthStateChanged(async x=>{
      
      //this.setState({currentUser: x});
      this.setState({currentUser: x})
      
      if(x){
        const userRef = await createUserProfDoc(x);

        userRef.onSnapshot(d=>{
          this.setState({
            currentUser: {
              id: d.id,
              ...d.data()
            }
          }, ()=>{console.log(this.state);});
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
        <Header  currentUser={this.state.currentUser}/>
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
