import React from "react";
import { withRouter } from "react-router-dom";
import "./basket-window.styles.scss";
import CustomButton from "../../button/button.component";
import { BasketList } from "../basket-index";
import { connect } from "react-redux";
import { setVisibility } from "../../../redux/basket/basket.actions";
import { CSSTransitionGroup } from "react-transition-group";
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
                <div className="basket-menu">
                    <BasketList />
                    <CustomButton
                        inverted
                        cartButton
                        onClick={this.handleClick}
                    >
                        Go To checkout
                    </CustomButton>
                </div>
            </CSSTransitionGroup>
        );
    }
}

export default withRouter(connect()(BasketWindow));
