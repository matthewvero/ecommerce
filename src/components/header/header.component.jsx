import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg'
export const Header = () => {
    return (
        <div className='header'>
        <Link to='/'>
            <Logo className='logo'></Logo>
        </Link>
            <div className='navi'>
                <Link to='/shop' className='shop navItem'>SHOP</Link>
                <Link to='/contact' className='contact navItem'>CONTACT</Link>
                <Link to='/signin' className='signin navItem'>SIGN IN</Link>
                <Link to='/basket' className='basket navItem'>Basket</Link>
            </div>
        </div>
    )
}
