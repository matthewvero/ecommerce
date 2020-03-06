import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from './crown.svg'
import {auth} from '../../firebase/firebase.utils'
export const Header = ({user}) => {
    return (
        <div className='header'>
        <Link to='/'>
            <Logo className='logo'></Logo>
        </Link>
            <div className='navi'>

                <Link to='/shop' className='shop navItem'>SHOP</Link>
                <Link to='/contact' className='contact navItem'>CONTACT</Link>
                
                {user ? <div onClick={() => auth.signOut()} className=' navItem'>SIGN OUT</div> : <Link to='/signin' className='signin navItem'>SIGN IN</Link>}
                
                <Link to='/basket' className='basket navItem'>Basket</Link>
            </div>
        </div>
    )
}
