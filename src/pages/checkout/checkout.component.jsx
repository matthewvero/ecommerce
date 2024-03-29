// Utilities
import React                        from 'react'
import { useSelector }                  from 'react-redux'
import { getBasketTotal }           from '../../redux/basket/basket.reducer'

// Components
import { BasketList, BasketTotal }  from '../../components/basket-components/basket-index'
import {CheckoutContainer}          from './checkout.styles'
import StripeCheckOutButton         from '../../components/stripe-button/stripe-button.component'


const Checkout = () => {
    const total = useSelector(getBasketTotal);
    return (
        <CheckoutContainer>
            <div className='headings'>
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            <BasketList checkout={true}/>
            <BasketTotal className='total'/>
            <StripeCheckOutButton price={total}/>
        </CheckoutContainer>
    )
}



export default Checkout;