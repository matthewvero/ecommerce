// Utilities
import React                        from 'react'
import { useDispatch }                  from 'react-redux';
import { removeItem }               from '../../../redux/basket/basket.actions';
// Components
import { FontAwesomeIcon }          from "@fortawesome/react-fontawesome";
import { faTimes }                  from "@fortawesome/free-solid-svg-icons";
import { BasketRemoverContainer }   from './basket-remover.styles'


const BasketRemover = ({id}) => {
    const dispatch = useDispatch();

    return (
        <BasketRemoverContainer onClick={() => dispatch(removeItem(id))}>
            <FontAwesomeIcon icon={faTimes}/>
        </BasketRemoverContainer>
    )
}


export default BasketRemover;
