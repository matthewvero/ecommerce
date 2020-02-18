import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './homepage.styles.scss'
const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <MenuItem title={'Jackets'}></MenuItem>
            <MenuItem title={'Hats'}></MenuItem>
            <MenuItem title={'Sneakers'}></MenuItem>
            <MenuItem title={'Men'}></MenuItem>
            <MenuItem title={'Women'}></MenuItem>
        </div>
    </div>
)

export default HomePage
