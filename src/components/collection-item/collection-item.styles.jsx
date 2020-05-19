import styled from 'styled-components'
import { ButtonContainer } from '../button/button.styles'
export const CollectionItemContainer = styled.div`

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    position: relative;
    width: 20vw;
    height: 25vw;

    &:hover ${ButtonContainer} {
        display: block;
    }
    &:hover {
        opacity: 0.8;
    }

    h4 {
        margin: 0;
    }
`


export const CollectionItemInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0;
`

export const CollectionItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    box-shadow: slategrey 0px 0px 10px;
`