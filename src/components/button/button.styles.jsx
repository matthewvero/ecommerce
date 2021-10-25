import styled, {css} from 'styled-components'


const styleSheets = {
    cartButton: css`
        margin: 20px 20px 20px 20px;
        font-size: 1.1rem;
        text-transform: uppercase;
    `,
    addToCart: css`
        position: absolute;
        font-size: 0.9rem;
        opacity: 0.7;
        border: none;
        width: 60%;
        margin: 5% 15%;
        padding: 5% 5%;
        bottom: 15%;
        display: none;
        background-color: white;
        box-shadow: none;
    `,
    isGoogleSignIn: css`
        background-color: cornflowerblue;
        padding: 15px 15px; 
        width: 30%;
    `
}


const customButtonStyle = css`
    background-color: black;
    color: white;
    padding: 5% 10%;
    vertical-align: middle;
    box-sizing: content-box;
    min-height: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    outline: none;
    box-shadow: none;
    border-radius: 6px;
    &:hover {
        background-color: #00000000;
        color: black;
    }
`

const invertedButtonStyle = css`
    background-color: #00000000;
    color: black;
    padding: 5% 10%;
    vertical-align: middle;
    box-sizing: content-box;
    min-height: 20px;
    cursor: pointer;
    font-size: 0.9rem;
    outline: none;
    border-radius: 6px;
    border: none;
    box-shadow: 0px 0px 2px 1px #333333;
    &:hover {
        background-color: black;
        color: white;
    }
    transition: ease 0.1s all;
`

const getButtonStyle = props => {
    let buttonStyles = `${props.inverted ? invertedButtonStyle : customButtonStyle}`
        Object.keys(props).forEach(style => 
            (styleSheets[style] ? buttonStyles += styleSheets[style] : '')
            
        )
    return buttonStyles
}
// Checks if each prop matches a style in the style sheet
// Matching styles will be appended

export const ButtonContainer = styled.button`
    ${props => getButtonStyle(props)}
`