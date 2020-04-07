import { createBasketArr } from './basket.utils'

const initialState = {
    isVisible: false,
    basketItems: []
}

export const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'SET_VISIBLE_STATE':
        return { 
            ...state, 
            isVisible: !state.isVisible
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
