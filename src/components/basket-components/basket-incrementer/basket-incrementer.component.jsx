import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './basket-incrementer.styles.scss'
import { connect } from 'react-redux';
import {adjustQuantity} from '../../../redux/basket/basket.actions'

const BasketQuantity = ({id, quantity, adjustQuantity}) => {
    return (
        <div className='quantity'>
            <FontAwesomeIcon icon={faChevronLeft} className='icon' onClick={() => adjustQuantity({id, operation: '-'})}/>
            <div className='number'>
                <span>{quantity}</span>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='icon' onClick={() => adjustQuantity({id, operation: '+'})}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    adjustQuantity: quantity => dispatch(adjustQuantity(quantity))
})


export default connect(null, mapDispatchToProps)(BasketQuantity);
