import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import './basket.styles.scss'
import { setVisibility } from '../../../redux/basket/basket.actions'
import { connect } from 'react-redux';
import { BasketCounter, BasketWindow } from '../basket-index'

const isBasketEmpty = (hidden, items) => {
    if (!hidden) {
        return 'highlighted'
    } else if (hidden && items.length) {
        return 'itemsInBasket'
    } else {
        return null
    }
}

const Basket = ({toggleBasket, hidden, basketItems}) => {

    let basketCount = basketItems.reduce((acc, cur) => {
        return acc + cur.quantity
    }, 0)

    return (
        <div className='basket-container'>
            <FontAwesomeIcon
                className={`navItem ${isBasketEmpty(hidden, basketItems)}`}
                id='basket'
                icon={faShoppingBasket}
                onClick={toggleBasket}
            />

            
            <BasketCounter basketCount={basketCount}/>

            {hidden ? null: <BasketWindow/>  }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleBasket: () => dispatch(setVisibility())
})

const mapPropsToState = state => ({
    hidden: state.basket.hidden,
    basketItems: state.basket.basketItems
})


export default connect(mapPropsToState, mapDispatchToProps)(Basket)