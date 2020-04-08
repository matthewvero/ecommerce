import React from 'react'
import './basket-window.styles.scss';
import CustomButton from '../../button/button.component'
import { connect } from 'react-redux';
import { BasketItem } from '../basket-index'

const BasketWindow = ({basketItems}) => (
     
            <div className='basket-menu'>
            <div className='basket-list'>
                { basketItems.map(el => (
                    <BasketItem key={el.key} {...el}/>
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