export const setVisibility = () => ({
    type: 'SET_VISIBLE_STATE'
})

export const addBasketItem = (payload) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: payload
})

export const adjustQuantity = (payload) => ({
    type: 'INCREMENT_QUANTITY',
    payload: payload 
})

export const removeItem = (payload) => ({
    type: 'REMOVE_BASKET_ITEM', 
    payload: payload
})
