// Utilities
import React                    from 'react'

// Components
import { FormInputContainer, FormInputComponent, FormInputLabel }   from './form-input.styles'

export const FormInput = ({handleChange, label, ...otherProps}) => ( // destructure props that tell the form input how it should behave
    <FormInputContainer>
        <FormInputComponent
            onChange={handleChange}
            {...otherProps}
            required
        /> 
        {label ? (
            <FormInputLabel >
                {`${otherProps.value ? '' : label}`}    
            </FormInputLabel>
        ) : null}
    </FormInputContainer>
)

