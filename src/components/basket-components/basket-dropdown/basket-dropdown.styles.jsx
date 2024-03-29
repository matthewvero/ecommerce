import styled from 'styled-components'

export const BasketDropdownContainer = styled.div`
      width: 300px;
      height: 400px;
      box-shadow: slategrey 0px 0px 10px;
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 80px;
      z-index: 1;
      background-color: white;
      &.basket-dropdown-appear {
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
      }
      &.basket-dropdown-appear.basket-dropdown-appear-active {
            opacity: 1;
            transform: scaleY(1);
            transition: transform 0.1s ease-in;
      }
`