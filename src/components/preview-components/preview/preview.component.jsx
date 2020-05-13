// Utilities
import React                    from 'react'
// Components
import { 
    PreviewContainer, 
    PreviewContainerContent,
    PreviewContainerTitle
}                               from './preview.styles'
import {PreviewItem}            from '../preview-index'

const Preview = ({title, items}) => (
    <PreviewContainer>
        <PreviewContainerTitle>{title.toUpperCase()}</PreviewContainerTitle>
        <PreviewContainerContent>
            {items
            .filter((item, id) => id < 4)
            .map((item) => (
                <PreviewItem key={item.id} {...item}/>
            ))}
        </PreviewContainerContent>
    </PreviewContainer>    
)

export default Preview








