import React from 'react'
import { selectBasketItems } from "../../../redux/basket/basket.reducer";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import './basket-list.component.scss';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp,  faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { BasketItem } from '../basket-index';

class BasketList extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {scrollTop: 0}
      }
      
      onScroll = () => {
        const scrollTop = this.myRef.current.scrollTop
        this.setState({
            scrollTop: scrollTop
        })
      }

      checkoutify = (basketItemList, checkout) => {
          if (checkout) {
              return basketItemList.map(el => {
                el.props.checkout = 'true'
          })
        }
          
      }

    render() {
        const { basketItems, checkout} = this.props
        return (
                <div className={`basket-list ${checkout ? 'checkout' : null}`} onScroll={this.onScroll} ref={this.myRef}>
                {
                    basketItems.length ? 
                    basketItems.map(el => (
                        <BasketItem key={el.key} checkout={checkout} {...el}/>
                        )) 
                        : 'Basket Empty'
                }
                </div>
            )
        }
}

const mapStateToProps = createStructuredSelector({
    basketItems: selectBasketItems
});

export default connect(mapStateToProps)(BasketList)

//{this.state.scrollTop === 0 ? <div className='scrollIndicatorDown'><FontAwesomeIcon className='icon' icon={faChevronDown}/></div> : null }
            // {this.state.scrollTop > 0 ? <div className='scrollIndicatorUp'><FontAwesomeIcon className='icon' icon={faChevronUp}/> </div>: null }
