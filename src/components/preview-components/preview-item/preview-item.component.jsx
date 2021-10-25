// Utilities
import React from "react";
import { useDispatch } from "react-redux";
import { addBasketItem } from "../../../redux/basket/basket.actions";

// Components
import CustomButton from "../../button/button.component";
import { 
    PreviewItemContainer,
    PreviewItemInfoContent,
    PreviewItemInfo,
    PreviewItemBackground    
} from './preview-item.styles'

const PreviewItem = ({ id, imageUrl, name, price }) => {
    const item = {
        id,
        imageUrl,
        name,
        price,
        quantity: 1
    };
    const dispatch = useDispatch();

    return (
        <PreviewItemContainer>
            <PreviewItemBackground
                backgroundImage={`url(${imageUrl})`}
            />
            <CustomButton
                inverted
                cartButton
                addToCart
                onClick={() => dispatch(addBasketItem(item))}
            >
                {" "}
                Add To Cart
                {" "}
            </CustomButton>
            <PreviewItemInfo>
                <PreviewItemInfoContent> {name} </PreviewItemInfoContent>
                <PreviewItemInfoContent> £{price} </PreviewItemInfoContent>
            </PreviewItemInfo>
        </PreviewItemContainer>
    );
};



export default PreviewItem;
