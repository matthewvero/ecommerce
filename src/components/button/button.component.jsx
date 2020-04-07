import React from "react";
import "./button.styles.scss";

const CustomButton = ({ children, inverted, cartButton, addToCart, isGoogleSignIn, ...otherProps }) => {
    // Destructure various props that tell the button how it should behave and look. 
    return (
        <button 
        className={
                `
                    custom-button 
                    ${isGoogleSignIn ? 'googlesigninbutton' : ''} 
                    ${cartButton ? 'cartButton' : null}
                    ${inverted ? 'inverted' : null}
                    ${addToCart ? 'addToCart' : null}
                `
            }
        
        {...otherProps}>
            {children}
        </button>
    );
};



export default CustomButton