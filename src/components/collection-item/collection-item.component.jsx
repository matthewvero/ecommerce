import React from 'react'
import { addBasketItem } from '../../redux/basket/basket.actions';
import CustomButton from '../button/button.component';
import './collection-item.styles.scss'

const CollectionItem = ({imageUrl, item, name, price}) => {
      return (
            <div className="item-tile">
                  <div
                        className="item-background"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <CustomButton
                        inverted
                        cartButton
                        addToCart
                        onClick={() => addBasketItem(item)}
                        >
                        {" "}
                        Add To Cart{" "}
                  </CustomButton>
                  <div className="collection-item-info">
                        <h4> {name} </h4>
                        <h4> {price} </h4>
                  </div>
            </div>
      );
};
      


export default CollectionItem
