import React from 'react'


import './basket-item.styles.scss'
import { BasketQuantity, BasketRemover } from '../basket-index'

export const BasketItem = ({id, imageUrl, name, quantity, price, checkout}) => {
    if (checkout) {
        return (
            <div className='checkout-item'>
                <div 
                    className='checkout-item-image' 
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
                <div className='checkout-item-component'>
                    <span className='checkout-title'> {name} </span> 
                </div>
                <BasketQuantity className='checkout-item-component' id={id} quantity={quantity}/>
                <div className='checkout-item-component'>
                    <span>£{price}</span>
                </div>
                <div className='checkout-item-component'>
                    <BasketRemover  id={id}/> 
                </div>
            </div>
            )
    } else {
        return (
            <div className='basket-item'>
                <div 
                    className='basket-item-image' 
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
                <div className='basket-item-content'>
                    <span className='title'> {name} </span> 
                    <span className='price'>{quantity} X £{price} </span>
                </div>
            </div>
        )
    }
}
