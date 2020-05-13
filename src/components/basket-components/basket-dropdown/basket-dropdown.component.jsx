// Utilties
import React                        from "react";
import { withRouter }               from "react-router-dom";
import { connect }                  from "react-redux";
import { setVisibility }            from "../../../redux/basket/basket.actions";

// Components
import { BasketDropdownContainer }  from './basket-dropdown.styles'
import CustomButton                 from "../../button/button.component";
import { BasketList }               from "../basket-index";
import { CSSTransitionGroup }       from "react-transition-group";


export class BasketWindow extends React.Component {
    handleClick = () => {
        this.props.dispatch(setVisibility());
        this.props.history.push("/checkout");
    };

    render() {
        return (
            <CSSTransitionGroup
                transitionName="example"
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
                        onClick={this.handleClick}
                    >
                        Go To checkout
                    </CustomButton>
                </BasketDropdownContainer>
            </CSSTransitionGroup>
        );
    }
}

export default withRouter(connect()(BasketWindow));
