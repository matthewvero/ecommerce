import { createBasketArr, incrementer } from './basket.utils';
import { createSelector } from 'reselect';

const initialState = {
    hidden: true,
    basketItems: []
}

const remover = ({basketItems}, id) => {
    const item = basketItems.find(el => el.id === id)
    if (item) {
        return basketItems.filter(el => el.id !== id)
    } else {
        return basketItems
    }
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
    case 'INCREMENT_QUANTITY':
        return {
            ...state,
            basketItems: incrementer(state, payload)
        }
    case 'REMOVE_BASKET_ITEM': 
        return {
            ...state, 
            basketItems: remover(state, payload)
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
    basketItems => {
        if (basketItems.length > 0){
            return basketItems.reduce((acc, cur) => acc += cur.quantity, 0)
        }
    }
)

export const getBasketTotal = createSelector(
    [selectBasketItems],
    basketItems => {
        return basketItems.reduce((acc, cur) => {
            return acc += (cur.price * cur.quantity)
        }, 0)
    }
)


