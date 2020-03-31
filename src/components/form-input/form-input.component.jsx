import React from 'react'
import './form-input.styles.scss'

export const FormInput = ({handleChange, label, ...otherProps}) => ( // destructure props that tell the form input how it should behave
    <div className='group'>
        <input 
            className='form-input'
            onChange={handleChange}
            {...otherProps}
            required
        /> 
        {label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''} form-input-label` } >
                {`${otherProps.value ? '' : label}`}    
            </label>
        ) : null}
    </div>
)

