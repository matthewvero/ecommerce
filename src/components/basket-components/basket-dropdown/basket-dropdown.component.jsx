import React from "react";
import {withRouter} from 'react-router-dom'
import "./basket-window.styles.scss";
import CustomButton from "../../button/button.component";
import { BasketList } from "../basket-index";
const BasketWindow = ({ history }) => (
    <div className="basket-menu">
        <BasketList/>
        <CustomButton inverted cartButton onClick={() => history.push('/checkout')}>
            Go To Checkout
        </CustomButton>
    </div>
);

export default withRouter(BasketWindow)
