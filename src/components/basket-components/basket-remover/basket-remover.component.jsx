// Utilities
import React                        from 'react'
import { connect }                  from 'react-redux';
import { removeItem }               from '../../../redux/basket/basket.actions';
// Components
import { FontAwesomeIcon }          from "@fortawesome/react-fontawesome";
import { faTimes }                  from "@fortawesome/free-solid-svg-icons";
import { BasketRemoverContainer }   from './basket-remover.styles'


const BasketRemover = ({id, removeItem}) => {
    return (
        <BasketRemoverContainer onClick={() => removeItem(id)}>
            <FontAwesomeIcon icon={faTimes}/>
        </BasketRemoverContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(BasketRemover) 
