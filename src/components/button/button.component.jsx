import React from "react";
import { ButtonContainer } from "./button.styles";

const CustomButton = ({ children, ...props }) => {
    // Destructure various props that tell the button how it should behave and look.
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    );
};



export default CustomButton