import React from 'react'
import './button.styles.scss'


export const CustomButton = ({children, classes, ...otherProps}) => {
    return (
        <button className={`${classes} custom-button`} {...otherProps} >{children}</button>
    )
}


