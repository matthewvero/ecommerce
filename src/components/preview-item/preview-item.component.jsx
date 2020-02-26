import React from 'react'

export const PreviewItem = ({imageUrl, name, price}) => {
    return (
        <div className='preview-tile'> 
            <div 
                className='preview-background' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='add-cart'>
                <h3>Add To Cart</h3> 
            </div>
            <div className='info'>
                <h4> {name} </h4>
                <h4> {price} </h4>
            </div>
        </div>
    )
}
