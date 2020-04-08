import { createBasketArr } from './basket.utils'

const initialState = {
    hidden: true,
    basketItems: []
}

export const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_VISIBLE_STATE':
        return { 
            ...state, 
            hidden: !state.hidden
        }
    
    case 'ADD_ITEM_TO_CART':
        return {
            ...state,
            basketItems: createBasketArr(state.basketItems, payload)
        }

    default:
        return state
    }
}
