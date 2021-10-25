// Utilties
import React                        from "react";
import { useHistory }               from "react-router-dom";
import { useDispatch }     from "react-redux";
import { setVisibility }            from "../../../redux/basket/basket.actions";

// Components
import { BasketDropdownContainer }  from './basket-dropdown.styles'
import CustomButton                 from "../../button/button.component";
import { BasketList }               from "../basket-index";
import { CSSTransitionGroup }       from "react-transition-group";

const BasketWindow = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        history.push('/checkout')
        dispatch(setVisibility(false));
    }
    return (
        <CSSTransitionGroup
            transitionName="basket-dropdown"
            transitionAppear={true}
            transitionAppearTimeout={200}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={100}
        >
            <BasketDropdownContainer>
                <BasketList />
                <CustomButton
                    inverted
                    cartButton
                    onClick={handleClick}
                >
                    Go To checkout
                </CustomButton>
            </BasketDropdownContainer>
        </CSSTransitionGroup>
    )
};

export default BasketWindow;
