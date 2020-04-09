import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import './basket-item.styles.scss'

export const BasketItem = ({imageUrl, name, quantity, price, checkout}) => {

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
                <div className='checkout-item-component quantity'>
                    <FontAwesomeIcon icon={faChevronLeft} className='icon'/>
                    <span>{quantity}</span>
                    <FontAwesomeIcon icon={faChevronRight} className='icon'/>
                </div>
                <div className='checkout-item-component'>
                    <span>£{price}</span>
                </div>
                <div className='checkout-item-component'>
                    <span>X</span>
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
