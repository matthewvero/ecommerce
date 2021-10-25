// Utilities
import React                from 'react'
import { useDispatch }          from 'react-redux';
import {adjustQuantity}     from '../../../redux/basket/basket.actions'

// Components
import { 
    QuantityNumber, 
    QuantityIcon, 
    QuantityContainer 
}                           from './basket-incrementer.styles'
import { 
    faChevronLeft, 
    faChevronRight 
}                           from "@fortawesome/free-solid-svg-icons";

const BasketQuantity = ({id, quantity}) => {
    const dispatch = useDispatch();
    return (
    <QuantityContainer>
        <QuantityIcon icon={faChevronLeft} onClick={() => dispatch(adjustQuantity({id, operation: '-'}))}/>
        <QuantityNumber>
            <span>{quantity}</span>
        </QuantityNumber>
        <QuantityIcon icon={faChevronRight} onClick={() => dispatch(adjustQuantity({id, operation: '+'}))}/>
    </QuantityContainer>
)}



export default BasketQuantity;
