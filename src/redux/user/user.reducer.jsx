import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}; // Sets default state

export const userReducer = (state = INITIAL_STATE, action) => {
    //pass in default state or current state + action object
    switch (action.type) {
        // filter out state changes using the action.type
        case userActionTypes.SET_CURRENT_USER:
            //if type matches return a NEW object
            return {
                ...state,
                currentUser: action.payload
                //currentState spread in + any changes
            };
        default:
            //if no match return current state
            return state;
    }
};
