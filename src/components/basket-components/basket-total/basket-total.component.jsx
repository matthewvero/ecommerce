import React from 'react'
import { connect } from 'react-redux'
import { getBasketTotal } from '../../../redux/basket/basket.reducer'
import './basket-total.styles.scss'

const BasketTotal = ({basketTotal}) => {

    let total = (
        <div className='checkout-total'>
            <span className='total'>TOTAL: £{basketTotal}</span>
        </div>
    )

    return (basketTotal > 0 ? total : null)
}

const mapStateToProps = (state) => ({
    basketTotal: getBasketTotal(state)
})

export default connect(mapStateToProps)(BasketTotal) 
