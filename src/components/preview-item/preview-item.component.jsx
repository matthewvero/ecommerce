import React from 'react'


import './preview-item.styles.scss'
import { addBasketItem } from '../../redux/basket/basket.actions'
import { connect } from 'react-redux'
import { prettyDOM } from '@testing-library/react'
import Preview from '../preview/preview.component'

const PreviewItem = ({id, imageUrl, name, price, addBasketItem}) => {
    const item = {
        id,
        imageUrl,
        name,
        price,
        quantity: 1
    }
    return (
        <div className='preview-tile'> 
            <div 
                className='preview-background' 
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='add-cart' onClick={() =>addBasketItem(item)}>
                <h3>Add To Cart</h3> 
            </div>
            <div className='info'>
                <h4> {name} </h4>
                <h4> {price} </h4>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addBasketItem: item => dispatch(addBasketItem(item))
})

export default connect(null, mapDispatchToProps)(PreviewItem)