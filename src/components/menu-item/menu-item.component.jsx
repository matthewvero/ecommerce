// Utilities
import React                    from 'react'
import {useHistory}             from 'react-router-dom';

// Components
import { 
    MenuItemContainer,
    MenuItemBackground, 
    MenuItemContent,
    MenuItemSubTitle,
    MenuItemTitle 
}                               from './menu-item.styles'

const MenuItem = ({title, imageUrl, size, linkUrl, match}) => {
    const history  = useHistory();
    return (
        <MenuItemContainer  
            className={`${size}`} 
            onClick={() => history.push(`/${linkUrl}`)}
        >
            <MenuItemBackground 
                background={`url(${imageUrl})`}
            ></MenuItemBackground>
            <MenuItemContent>
                <MenuItemTitle>{title}</MenuItemTitle>
                <MenuItemSubTitle>Shop Now</MenuItemSubTitle>
            </MenuItemContent>
        </MenuItemContainer>
    )
}

export default MenuItem;

