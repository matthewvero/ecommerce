import { combineReducers } from "redux";
// Method that combines all of the reducers for export as the root reducer

import { userReducer } from "./user/user.reducer";
import {basketReducer} from './basket/basket.reducer'
// Import the redcuers that comprise the root reducer
// There can be multiple of these 

export default combineReducers({
    user: userReducer,
    basket: basketReducer
    // Assign all of the reducers to a key inside the root reducer
});
