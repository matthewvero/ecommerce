export const createBasketArr = ({basketItems}, itemToAdd) => {
    let matchIndex = basketItems.find(element => element.id === itemToAdd.id);
    // Checks if item already exists in basket
    if (matchIndex) {
        return basketItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? {
                      ...cartItem,
                      quantity: cartItem.quantity + itemToAdd.quantity
                  }
                : cartItem
        );
    } else {
        return [...basketItems, { ...itemToAdd, key: basketItems.length + 1 }];
    }
};

export const incrementer = (state, payload) => {
    return state.basketItems.map(item => {
        if (item.id === payload.id) {
            return {
                ...item,
                quantity: payload.operation === '+' ? item.quantity += 1 : item.quantity -= 1
            }
        } else {
            return item
        }
    }).filter(item => item.quantity > 0)
}

export const remover = ({basketItems}, id) => {
    const item = basketItems.find(el => el.id === id)
    if (item) {
        return basketItems.filter(el => el.id !== id)
    } else {
        return basketItems
    }
}
