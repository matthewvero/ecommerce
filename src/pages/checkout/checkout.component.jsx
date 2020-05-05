import React from 'react'
import { BasketList, BasketTotal } from '../../components/basket-components/basket-index'
import './checkout.styles.scss'
import StripeCheckOutButton from '../../components/stripe-button/stripe-button.component'
import { getBasketTotal } from '../../redux/basket/basket.reducer'
import { connect } from 'react-redux'


const Checkout = ({total}) => {
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
            <StripeCheckOutButton price={total}/>
        </div>
    )
}

const mapState = (state) => ({
    total: getBasketTotal(state)
})

export default connect(mapState)(Checkout)