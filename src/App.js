import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
// Import component
import ShopPage from "./pages/shop/shop.component";
import Checkout from './pages/checkout/checkout.component'
import { Route, Switch, Redirect } from "react-router-dom";
// Gives us access to routing components from react router
import Header from "./components/header/header.component";
// Import Header component
import { SignInPage } from "./pages/signin/sign-in-page.component";
// Import sign in page component

import { useSelector } from "react-redux";

import {useAuthListener} from './hooks/auth-hooks'

const App = () => {
    useAuthListener();
    const currentUser = useSelector(state => state.user.currentUser);
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <SignInPage />
                        )
                    }
                />
                <Route exact path="/checkout" component={Checkout}/>
            </Switch>
        </div>
    );
};

export default App;
