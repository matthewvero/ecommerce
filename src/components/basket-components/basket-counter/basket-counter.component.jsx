import React from 'react'
import './basket-counter.styles.scss'
export const BasketCounter = ({basketCount}) => {
    return (
        <div className={`basket-counter ${basketCount > 0 ? null : 'hidden'}`}>
                {basketCount}
        </div>
    )
}
