import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Allows us to connect to the root reducer
import "./header.styles.scss";
import { ReactComponent as Logo } from "./crown.svg";
// Allows us to use an svg
import { auth } from "../../firebase/firebase.utils";
// Gives access to the auth utilities.
import { Basket } from "../basket-components/basket-index";
import { selectCurrentUser } from "../../redux/user/user.reducer";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="navi">
                <Link to="/shop" className="shop navItem">
                    SHOP
                </Link>
                <Link to="/contact" className="contact navItem">
                    CONTACT
                </Link>

                {currentUser !== null ? (
                    <div onClick={() => auth.signOut()} className=" navItem">
                        SIGN OUT
                    </div>
                ) : (
                    <Link to="/signin" className=" navItem">
                        SIGN IN
                    </Link>
                )}
                <Basket />
            </div>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
// This tells connect which data it needs to retrieve
// and return from the root reducer
export default connect(mapStateToProps)(Header);
// This uses the mapStateToProps to find which data is needed.
// It then retrieves it from the root reducer and then it then maps it to the
// props of the component passed as the second argument
// The component then receives the props as normal
