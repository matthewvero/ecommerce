import React from 'react'

export const BasketCounter = ({basketCount}) => {
    return (
        <div className={`basket-counter ${basketCount > 0 ? null : 'hidden'}`}>
                {basketCount}
        </div>
    )
}
