// Utilities
import React from "react";
import { connect } from "react-redux";
import { addBasketItem } from "../../../redux/basket/basket.actions";

// Components
import CustomButton from "../../button/button.component";
import { 
    PreviewItemContainer,
    PreviewItemInfoContent,
    PreviewItemInfo,
    PreviewItemBackground    
} from './preview-item.styles'

const PreviewItem = ({ id, imageUrl, name, price, addBasketItem }) => {
    const item = {
        id,
        imageUrl,
        name,
        price,
        quantity: 1
    };
    return (
        <PreviewItemContainer>
            <PreviewItemBackground
                backgroundImage={`url(${imageUrl})`}
            />
            <CustomButton
                inverted
                cartButton
                addToCart
                onClick={() => addBasketItem(item)}
            >
                {" "}
                Add To Cart
                {" "}
            </CustomButton>
            <PreviewItemInfo>
                <PreviewItemInfoContent> {name} </PreviewItemInfoContent>
                <PreviewItemInfoContent> {price} </PreviewItemInfoContent>
            </PreviewItemInfo>
        </PreviewItemContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    addBasketItem: item => dispatch(addBasketItem(item))
});

export default connect(null, mapDispatchToProps)(PreviewItem);
