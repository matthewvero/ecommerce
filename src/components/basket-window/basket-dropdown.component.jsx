import React from 'react'
import './basket-window.styles.scss';
import CustomButton from '../button/button.component'
import { connect } from 'react-redux';

const BasketWindow = ({basketItems}) => (
     
            <div className='basket-menu'>
            <div className='basket-list'>
                { basketItems.map(el => (
                    <div key={el.key} className='basket-item'>
                    <div 
                    className='basket-item-image' 
                    style={{backgroundImage: `url(${el.imageUrl})`}}
                    />
                    <div className='basket-item-content'>
                        <span className='title'> {el.name} </span> 
                        <span className='price'>{el.quantity} X £{el.price} </span>
                    </div>
                    </div>
                ))}
            </div>
            <CustomButton inverted cartButton >Go To Checkout</CustomButton>
            </div> 
    )

const mapPropsToState = (state) => {
    return {
        basketItems: state.basket.basketItems
    }
}

export default connect(mapPropsToState)(BasketWindow)