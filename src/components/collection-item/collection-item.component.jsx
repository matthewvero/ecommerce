// Utilities
import React                        from 'react'
import { addBasketItem }            from '../../redux/basket/basket.actions';
import {useDispatch}                from 'react-redux'
// Components
import CustomButton                 from '../button/button.component';
import { 
      CollectionItemContainer, 
      CollectionItemBackground, 
      CollectionItemInfo 
}                                   from './collection-item.styles';

const CollectionItem = (item) => {
      const {imageUrl, name, price} = item;
      const dispatch = useDispatch();
      return (
            <CollectionItemContainer>
                  <CollectionItemBackground
                        style={{ backgroundImage: `url(${imageUrl})` }}
                  />
                  <CustomButton
                        inverted
                        cartButton
                        addToCart
                        onClick={() => dispatch(addBasketItem(item))}
                        >
                        {" "}
                        Add To Cart{" "}
                  </CustomButton>
                  <CollectionItemInfo>
                        <h4> {name} </h4>
                        <h4> £{price} </h4>
                  </CollectionItemInfo>
            </CollectionItemContainer>
      );
};
      


export default CollectionItem;
