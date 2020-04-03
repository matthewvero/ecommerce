import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
// Import component
import ShopPage from "./pages/shop/shop.component";
// Import component
import { Route, Switch, Redirect } from "react-router-dom";
// Gives us access to routing components from react router
import Header from "./components/header/header.component";
// Import Header component
import { SignInPage } from "./pages/signin/sign-in-page.component";
// Import sign in page component
import { auth, createUserDocument } from "../src/firebase/firebase.utils";
// Gives us access to the firebase auth, which controls auth and auth methods
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props
        // Destructuring setCurrentUser from props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // Listens for change in auth state
            if (userAuth) {
                const userRef = await createUserDocument(userAuth);
                // If a new user has been created adds it to database
                // Once complete or if user exists, returns userRef
                userRef.onSnapshot(snapShot => {
                    // Listens for change in user data
                    setCurrentUser({
                                id: snapShot.id,
                                ...snapShot.data()
                            },
                        // Sets current user information
                        // Using data from firestore
                        () => console.log(this.state)
                    );
                });
            } else {
                setCurrentUser(userAuth);
                // If no user then sets user to null
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
        // Ensures no memory leaks
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop/" component={ShopPage} />
                    <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/'/> : <SignInPage/>} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
}) // Here we are creating a function that dispatches 
// The value returned from our setCurrentUser action 
// To the reducers and by extension the store.

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);

