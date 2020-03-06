import React from "react";
import "./button.styles.scss";

export const CustomButton = ({ children, classes, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`${isGoogleSignIn ? 'googlesigninbutton' : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};
