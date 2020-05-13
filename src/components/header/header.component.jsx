// Uilities
import React                        from "react";
import { createStructuredSelector } from "reselect";
import { connect }                  from "react-redux";
// Allows us to connect to the root reducer
import { auth }                     from "../../firebase/firebase.utils";
// Gives access to the auth utilities.
import { selectCurrentUser }        from "../../redux/user/user.reducer";

// Components
import { 
    HeaderContainer,
    HeaderLogo,
    HeaderNavItem,
    HeaderNavContainer,
    HeaderNavLink 
}                                   from './header.styles'

import { Basket }                   from "../basket-components/basket-index";

const Header = ({ currentUser }) => {
    return (
        <HeaderContainer>
            <HeaderNavLink to="/">
                <HeaderLogo className="logo"></HeaderLogo>
            </HeaderNavLink>
            <HeaderNavContainer>
                <HeaderNavLink to="/shop" className="shop navItem">
                    SHOP
                </HeaderNavLink>
                <HeaderNavLink to="/contact" className="contact navItem">
                    CONTACT
                </HeaderNavLink>

                {currentUser !== null ? (
                    <HeaderNavItem onClick={() => auth.signOut()} >
                        SIGN OUT
                    </HeaderNavItem>
                ) : (
                    <HeaderNavLink to="/signin" className=" navItem">
                        SIGN IN
                    </HeaderNavLink>
                )}
                <Basket />
            </HeaderNavContainer>
        </HeaderContainer>
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
