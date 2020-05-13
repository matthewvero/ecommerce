// Utilities
import React                from 'react'
import { connect }          from 'react-redux';
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

const BasketQuantity = ({id, quantity, adjustQuantity}) => (
    <QuantityContainer>
        <QuantityIcon icon={faChevronLeft} onClick={() => adjustQuantity({id, operation: '-'})}/>
        <QuantityNumber>
            <span>{quantity}</span>
        </QuantityNumber>
        <QuantityIcon icon={faChevronRight} onClick={() => adjustQuantity({id, operation: '+'})}/>
    </QuantityContainer>
)


const mapDispatchToProps = dispatch => ({
    adjustQuantity: quantity => dispatch(adjustQuantity(quantity))
})


export default connect(null, mapDispatchToProps)(BasketQuantity);
