export const setVisibility = () => ({
    type: 'SET_VISIBLE_STATE'
})

export const addBasketItem = (payload) => ({
    type: 'ADD_ITEM_TO_CART',
    payload: payload
})
