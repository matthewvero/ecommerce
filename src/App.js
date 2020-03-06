import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import {Route, Switch} from 'react-router-dom'
import { Header } from './components/header/header.component';
import { SignInPage } from './pages/signin/sign-in-page.component';
import { auth, createUserDocument } from '../src/firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
     }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })

      } else {

        this.setState({currentUser: userAuth});
        
      }
      
    }) 
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div className="App">
        <Header user={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/' component={ShopPage}/>
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
      </div>
    )
  }
}



export default App;
