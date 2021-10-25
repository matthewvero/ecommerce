// Utilities
import React                          from 'react'
import { connect }                    from 'react-redux';
import { selectBasketItems }          from "../../../redux/basket/basket.reducer";
import { createStructuredSelector }   from "reselect";
// Components
import { BasketItem }                 from '../basket-index';
import { BasketListContainer }        from './basket-list.styles'


class BasketList extends React.Component {
    checkoutify = (basketItemList, checkout) => {
      if (checkout) {
            return basketItemList.forEach(el => {
              el.props.checkout = 'true'
        })
      } else {
        return null
      }
    }

    render() {
        const { basketItems, checkout } = this.props
        return (
                <BasketListContainer checkout={checkout ? true : false} onScroll={this.onScroll} ref={this.myRef}>
                {
                    basketItems.length ? 
                    basketItems.map(el => (
                        <BasketItem key={el.key} checkout={checkout} {...el}/>
                        )) 
                        : 'Basket Empty'
                }
                </BasketListContainer>
            )
        }
}

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems
});

export default connect(mapStateToProps)(BasketList)

// import React, { useEffect, useState } from "react";
// 
// const BasketList = ({checkout}) => {
//     
//     return (
//         <BasketListContainer checkout={checkout ? true : false} onScroll={this.onScroll} ref={this.myRef}>
//             {
//                 basketItems.length ? 
//                 basketItems.map(el => (
//                     <BasketItem key={el.key} checkout={checkout} {...el}/>
//                     )) 
//                     : 'Basket Empty'
//             }
//         </BasketListContainer>
//     )
// };
// 
// export default BasketList;

//{this.state.scrollTop === 0 ? <div className='scrollIndicatorDown'><FontAwesomeIcon className='icon' icon={faChevronDown}/></div> : null }
            // {this.state.scrollTop > 0 ? <div className='scrollIndicatorUp'><FontAwesomeIcon className='icon' icon={faChevronUp}/> </div>: null }
