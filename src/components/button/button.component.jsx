import React from "react";
import "./button.styles.scss";

export const CustomButton = ({ children, classes, isGoogleSignIn, ...otherProps }) => {
    // Destructure various props that tell the button how it should behave and look. 
    return (
        <button className={`${isGoogleSignIn ? 'googlesigninbutton' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};
