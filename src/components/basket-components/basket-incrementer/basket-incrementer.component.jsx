import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './basket-incrementer.styles.scss'
import { connect } from 'react-redux';
import {incrementQuantity} from '../../../redux/basket/basket.actions'

const BasketQuantity = ({id, quantity, incrementQuantity}) => {
    return (
        <div className='quantity'>
            <FontAwesomeIcon icon={faChevronLeft} className='icon' onClick={() => incrementQuantity({id, operation: '-'})}/>
            <div className='number'>
                <span>{quantity}</span>
            </div>
            <FontAwesomeIcon icon={faChevronRight} className='icon' onClick={() => incrementQuantity({id, operation: '+'})}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    incrementQuantity: quantity => dispatch(incrementQuantity(quantity))
})


export default connect(null, mapDispatchToProps)(BasketQuantity);
