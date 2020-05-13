import styled from 'styled-components'
import { ButtonContainer } from '../../button/button.styles'
export const PreviewItemBackground = styled.div`
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      box-shadow: slategrey 0px 0px 10px;
      transition: ease 0.2s all;
      background-image: ${props => props.backgroundImage}
      
`

export const PreviewItemContainer = styled.div`
      display: flex;
      flex-direction: column;
      margin: 10px;
      position: relative;
      width: 30vw;
      height: 25vw;
      &:hover ${PreviewItemBackground} {
            opacity: 0.8;
      }
      &:hover ${ButtonContainer} {
            display: block;
      }
`


export const PreviewItemInfo = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
`


export const PreviewItemInfoContent = styled.div`
      margin: 5px 0;    
`