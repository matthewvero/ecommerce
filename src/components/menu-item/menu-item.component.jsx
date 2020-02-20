import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({id, title, imageUrl, size}) => (
    <div key={id} className={`menu-item ${size}`}>
        <div className={'background'} style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='sub-title'>Shop Now</span>
        </div>
    </div>
)

export default MenuItem