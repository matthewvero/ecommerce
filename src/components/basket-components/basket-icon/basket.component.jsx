// Utilities
import React  , {useEffect}                              from "react";
import { useDispatch, useSelector }             from "react-redux";
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

const Basket = () => {
    const dispatch = useDispatch();
    const hidden = useSelector(selectBasketHidden);
    const basketItems = useSelector(selectBasketItems);
    const itemCount = useSelector(getBasketItemCount);
    useEffect(() => {
        console.log(itemCount)
    }, [itemCount])
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


export default Basket;