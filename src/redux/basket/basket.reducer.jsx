import { createBasketArr } from './basket.utils';
import { createSelector } from 'reselect';

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

// SELECTORS

const selectBasket = state => state.basket

// Top level selectors we keep as normal as shown above.

export const selectBasketItems = createSelector(
    [selectBasket],
    basket => basket.basketItems
)

// Nested selectors we use the createSelector function 

export const selectBasketHidden = createSelector (
    [selectBasket],
    basket => basket.hidden
)

export const getBasketItemCount = createSelector (
    [selectBasketItems],
    basketItems => basketItems.reduce((acc, cur) => acc += cur.quantity, 0
    )
)
