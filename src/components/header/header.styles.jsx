import styled, { css } from 'styled-components'
import { Link }                     from "react-router-dom";
import { ReactComponent as Logo }   from "./crown.svg";
// Allows us to use an svg in react

const HeaderNavItemStyles = css`
      padding: 5px 20px;
      cursor: pointer;
      transition: ease 100ms all;
      &:hover {
            background-color: #aaaaaa;
      }

`

export const HeaderContainer = styled.div`
      box-sizing: border-box;
      padding: 0 80px;
      display: flex;
      width: 100%;
      height: 100px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 1.5em;
`

export const HeaderNavContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
`



export const HeaderLogo = styled(Logo)`
      padding: 5px;
      &:hover {
            background-color: #aaaaaa;
      }
`

export const HeaderNavLink = styled(Link)`
      ${HeaderNavItemStyles}

`
export const HeaderNavItem = styled.div`
      ${HeaderNavItemStyles}  
`