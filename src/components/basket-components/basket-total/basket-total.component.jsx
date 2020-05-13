// Utilities
import React                    from 'react'
import { connect }              from 'react-redux'
import { getBasketTotal }       from '../../../redux/basket/basket.reducer'

// Components
import { 
    BasketTotalContainer,
    BasketTotalDigits 
}                               from './basket-total.styles'

const BasketTotal = ({basketTotal}) => {

    let total = (
        <BasketTotalContainer>
            <BasketTotalDigits>TOTAL: £{basketTotal}</BasketTotalDigits>
        </BasketTotalContainer>
    )

    return (basketTotal > 0 ? total : null)
}

const mapStateToProps = (state) => ({
    basketTotal: getBasketTotal(state)
})

export default connect(mapStateToProps)(BasketTotal) 
