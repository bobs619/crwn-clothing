import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
