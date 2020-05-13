// Utilities
import React                    from 'react'
import {withRouter}             from 'react-router-dom';

// Components
import { 
    MenuItemContainer,
    MenuItemBackground, 
    MenuItemContent,
    MenuItemSubTitle,
    MenuItemTitle 
}                               from './menu-item.styles'

const Item = ({title, imageUrl, size, history, linkUrl, match}) => (
    <MenuItemContainer  
        className={`${size}`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export const MenuItem = withRouter(Item)

