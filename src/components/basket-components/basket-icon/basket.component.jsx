// Utilities
import React                                from "react";
import { connect }                          from "react-redux";
import { createStructuredSelector }         from "reselect";
// Actions
import { setVisibility }                    from "../../../redux/basket/basket.actions";
// Selectors
import {
    selectBasketHidden,
    selectBasketItems,
    getBasketItemCount
}                                           from "../../../redux/basket/basket.reducer";
// Components
import { BasketCounter, BasketWindow }      from "../basket-index";
import { faShoppingBasket }                 from "@fortawesome/free-solid-svg-icons";

//Styles
import { BasketContainer, BasketIcon }      from './basket-icon.styles'

const isBasketEmpty = (hidden, items) => {
    if (!hidden) {
        return "highlighted";
    } else if (hidden && items.length) {
        return "itemsInBasket";
    } else {
        return null;
    }
};

const Basket = ({ hidden, basketItems, itemCount, dispatch }) => {
    return (
        <BasketContainer>
            <BasketIcon
                hidden={isBasketEmpty(hidden, basketItems)}
                id="basket"
                icon={faShoppingBasket}
                onClick={() => dispatch(setVisibility())}
            />

            <BasketCounter basketCount={itemCount} />

            {hidden ? null : <BasketWindow />}
        </BasketContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectBasketHidden,
    basketItems: selectBasketItems,
    itemCount: getBasketItemCount
});

export default connect(mapStateToProps)(Basket);