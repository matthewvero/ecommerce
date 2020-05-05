import { combineReducers } from "redux";
// Method that combines all of the reducers for export as the root reducer
import { persistReducer } from "redux-persist";
// allows us to use the redux persist library to persist data using the browser's local storage
import storage from "redux-persist/lib/storage";
// This imports the browsers local storage so that we can interact with it.

import { userReducer } from "./user/user.reducer";
import { basketReducer } from "./basket/basket.reducer";
import { directoryReducer } from "./directory/directory.reducer";
import { ShopReducer } from "./shop/shop.reducer";
// Import the redcuers that comprise the root reducer
// There can be multiple of these

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["basket"],
};
// configers the name of the folder within the local storage
// and which reducers we want to save in there

const rootReducer = combineReducers({
    user: userReducer,
    basket: basketReducer,
    directory: directoryReducer,
    shop: ShopReducer,
    // Assign all of the reducers to a key inside the root reducer
});

export default persistReducer(persistConfig, rootReducer);

// If not using the persist library then the reducer is created like this.
// export default combineReducers({
//     user: userReducer,
//     basket: basketReducer
//     // Assign all of the reducers to a key inside the root reducer
// });
