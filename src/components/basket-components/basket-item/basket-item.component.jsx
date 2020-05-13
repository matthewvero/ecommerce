// Utilities
import React                from 'react'

// Components
import { 
    BasketQuantity, 
    BasketRemover 
}                           from '../basket-index'
import { 
    BasketItemContainer, 
    BasketItemImage,
    BasketItemContent,
    CheckoutItemContainer,
    CheckoutItemImage,
    CheckoutItemComponent
}                           from './basket-item.styles'

export const BasketItem = ({id, imageUrl, name, quantity, price, checkout}) => {
    if (checkout) {
        return (
            <CheckoutItemContainer>
                <CheckoutItemImage 
                    style={{backgroundImage: `url(${imageUrl})`}}
                />

                <CheckoutItemComponent>
                    <span className='checkout-title'> {name} </span> 
                </CheckoutItemComponent>

                <CheckoutItemComponent>
                    <BasketQuantity id={id} quantity={quantity}/>
                </CheckoutItemComponent>

                <CheckoutItemComponent>
                    <span>£{price}</span>
                </CheckoutItemComponent>

                <CheckoutItemComponent>
                    <BasketRemover  id={id}/> 
                </CheckoutItemComponent>

            </CheckoutItemContainer>
            )
    } else {
        return (
            <BasketItemContainer>
                <BasketItemImage
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
                <BasketItemContent>
                    <span className='title'> {name} </span> 
                    <span className='price'>{quantity} X £{price} </span>
                </BasketItemContent>
            </BasketItemContainer>
        )
    }
}
