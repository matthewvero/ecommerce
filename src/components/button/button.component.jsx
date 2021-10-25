import React from "react";
import { ButtonContainer } from "./button.styles";

const CustomButton = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    );
};



export default CustomButton