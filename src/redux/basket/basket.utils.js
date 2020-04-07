export const createBasketArr = (basketItems, itemToAdd) => {

    let matchIndex = basketItems.find(element => element.id === itemToAdd.id)

    if(matchIndex) {
        return basketItems.map(cartItem =>
        cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + cartItem.quantity} 
        : cartItem
        )
    } else {
        return [...basketItems, {  ...itemToAdd, key: basketItems.length + 1 } ]
    }
}
