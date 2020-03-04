import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'
import { Header } from './components/header/header.component';
import { SignInPage } from './pages/signin/sign-in-page.component';

function App() {
  return (
    <div className="App">

    <Header/>
    <Switch>
    
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/' component={ShopPage}/>
      <Route exact path='/signin' component={SignInPage}/>
    </Switch>
    </div>
  );
}



export default App;
