import React from 'react'
import { BasketList, BasketTotal } from '../../components/basket-components/basket-index'
import './checkout.styles.scss'

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='headings'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <BasketList checkout={true}/>
            <BasketTotal className='total'/>
        </div>
    )
}

export default Checkout