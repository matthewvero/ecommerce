import React from "react";
import ReactDOM from "react-dom";
// Allows react to interface with the DOM
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// Allows the app to access the browser history api
// This allows us to use back/forward on single page apps etc
import { Provider } from "react-redux";
// Allows our components to access the store anywhere in the app.

import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
// Allows us to access redux-persist which will allow us to cache the state 
// On the local storage

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
    // Places the app at the root div within the HTML

);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
