import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
// Logger logs the state to the console in each
// stage so that we can see what is going on

import rootReducer from "./root-reducer";
// Import our root reducer so that it can interact with our store

const middlewares = [];
// Create an array of any middlewares that we want to run
// These can then be spread in to applyMiddleware from redux

if (process.env.NODE_ENV === 'development') {
      middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// Creates a store and passes in the root reducer
//  and the middleware we want to use on it

export const persistor = persistStore(store);

export default { store, persistor };
