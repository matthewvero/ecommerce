import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import './basket.styles.scss'
import BasketWindow from '../basket-window/basket-dropdown.component';
import { setVisibility } from '../../redux/basket/basket.actions'
import { connect } from 'react-redux';

const isBasketEmpty = (visible, items) => {
    if (visible) {
        return 'highlighted'
    } else if (!visible && items.length > 0) {
        return 'itemsInBasket'
    } else {
        return null
    }
}

const Basket = ({toggleBasket, isVisible, basketItems}) => {
    return (
        <div className='basket-container'>
            <FontAwesomeIcon
                className={`navItem ${isBasketEmpty(isVisible, basketItems)}`}
                id='basket'
                icon={faShoppingBasket}
                onClick={toggleBasket}
            />
            {isVisible ? <BasketWindow/> : null }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleBasket: () => dispatch(setVisibility())
})

const mapPropsToState = state => ({
    isVisible: state.basket.isVisible,
    basketItems: state.basket.basketItems
})


export default connect(mapPropsToState, mapDispatchToProps)(Basket)