import React from 'react'
import './preview.styles.scss'
import PreviewItem from '../preview-item/preview-item.component'

const Preview = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, id) => id < 4)
            .map((item) => (
                <PreviewItem key={item.id} {...item}/>
            ))}
        </div>
    </div>    
)

export default Preview








