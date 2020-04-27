import React from 'react'
import "./basket-remover.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { connect } from 'react-redux';
import { removeItem } from '../../../redux/basket/basket.actions';


const BasketRemover = ({id, removeItem}) => {
    return (
        <div className='remover' onClick={() => removeItem(id)}>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(BasketRemover) 
