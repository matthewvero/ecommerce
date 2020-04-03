import React from "react";
import "./button.styles.scss";

const CustomButton = ({ children, classes, isGoogleSignIn, ...otherProps }) => {
    // Destructure various props that tell the button how it should behave and look. 
    return (
        <button className={`${isGoogleSignIn ? 'googlesigninbutton' : ''} custom-button ${classes}`} {...otherProps}>
            {children}
        </button>
    );
};



export default CustomButton