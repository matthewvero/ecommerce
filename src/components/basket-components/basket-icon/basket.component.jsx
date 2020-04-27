import React from "react";
import { connect } from "react-redux";
import "./basket.styles.scss";

import { setVisibility } from "../../../redux/basket/basket.actions";
import {
    selectBasketHidden,
    selectBasketItems,
    getBasketItemCount
} from "../../../redux/basket/basket.reducer";
import { BasketCounter, BasketWindow } from "../basket-index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { createStructuredSelector } from "reselect";

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
        <div className="basket-container">
            <FontAwesomeIcon
                className={`navItem ${isBasketEmpty(hidden, basketItems)}`}
                id="basket"
                icon={faShoppingBasket}
                onClick={() => dispatch(setVisibility())}
            />

            <BasketCounter basketCount={itemCount} />

            {hidden ? null : <BasketWindow />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    hidden: selectBasketHidden,
    basketItems: selectBasketItems,
    itemCount: getBasketItemCount
});

export default connect(mapStateToProps)(Basket);