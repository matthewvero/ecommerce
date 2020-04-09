export const createBasketArr = (basketItems, itemToAdd) => {
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
