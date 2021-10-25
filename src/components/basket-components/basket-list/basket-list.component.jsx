// Utilities
import React                          from 'react'
import { useSelector }                    from 'react-redux';
import { selectBasketItems }          from "../../../redux/basket/basket.reducer";
// Components
import { BasketItem }                 from '../basket-index';
import { BasketListContainer }        from './basket-list.styles'

const BasketList = ({checkout}) => {
    const basketItems = useSelector(selectBasketItems);

    return (
        <BasketListContainer checkout={checkout ? true : false}>
            {
                basketItems.length ? 
                basketItems.map(el => (
                    <BasketItem key={el.key} checkout={checkout} {...el}/>
                    )) 
                    : 'Basket Empty'
            }
        </BasketListContainer>
    )
};

export default BasketList;

//{this.state.scrollTop === 0 ? <div className='scrollIndicatorDown'><FontAwesomeIcon className='icon' icon={faChevronDown}/></div> : null }
            // {this.state.scrollTop > 0 ? <div className='scrollIndicatorUp'><FontAwesomeIcon className='icon' icon={faChevronUp}/> </div>: null }
