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
        let matchIndex = state.basketItems.findIndex(element => element.id === payload.id)
    
        const newArr = (state) => {
            if(matchIndex !== -1) {
             return state.basketItems.map(el => {
                if (el.id === payload.id) {
                    let newEl = {
                        ...el,
                        quantity: el.quantity + payload.quantity
                    }
                    return newEl
                } else {
                    return el
                }
            })
            } else {
                return [...state.basketItems, 
                        {
                            ...payload,
                            key: state.basketItems.length + 1
                        }
                    ]
            }
        }
        return {
            ...state,
            basketItems: newArr(state)
        }

    default:
        return state
    }
}
