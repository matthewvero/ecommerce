// Utilities
import React                    from 'react'
import { useSelector }              from 'react-redux'
import { getBasketTotal }       from '../../../redux/basket/basket.reducer'

// Components
import { 
    BasketTotalContainer,
    BasketTotalDigits 
}                               from './basket-total.styles'

const BasketTotal = () => {
    const basketTotal = useSelector(getBasketTotal);
    let total = (
        <BasketTotalContainer>
            <BasketTotalDigits>TOTAL: £{basketTotal}</BasketTotalDigits>
        </BasketTotalContainer>
    )

    return (basketTotal > 0 ? total : null)
}

export default BasketTotal
