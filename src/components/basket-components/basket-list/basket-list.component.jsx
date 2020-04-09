import React from 'react'
import { BasketItem } from '../../basket-components/basket-index'
import { selectBasketItems } from "../../../redux/basket/basket.reducer";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import './basket-list.component.scss';

const BasketList = ({basketItems, checkout}) => {
        return <div className={`basket-list ${checkout ? 'checkout' : null}`}>
            {basketItems.length ? 
                    basketItems.map(el => (
                        <BasketItem key={el.key} {...el} checkout={checkout}/>
                    )) 
                : 'Basket Empty'
            } 
        </div>
}

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems
});

export default connect(mapStateToProps)(BasketList)