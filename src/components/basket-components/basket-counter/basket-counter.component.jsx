// Utilities
import React from 'react'

// Components
import {BasketCounterContainer} from './basket-counter.styles'

export const BasketCounter = ({basketCount}) => {
    return (
        <BasketCounterContainer hidden={basketCount > 0 ? false : true}>
                {basketCount}
        </BasketCounterContainer>
    )
}
