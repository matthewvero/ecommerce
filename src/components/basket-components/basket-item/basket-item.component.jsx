import React from 'react'

import './basket-item.styles.scss'

export const BasketItem = ({imageUrl, name, quantity, price}) => {
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
