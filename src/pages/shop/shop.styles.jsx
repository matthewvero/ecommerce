import styled from 'styled-components'

export const ShopPageContainer = styled.div`
      &.shop-appear {
            opacity: 0;
            transform-origin: top;
      }
  
      &.shop-appear.shop-appear-active {
            opacity: 1;
            transition: opacity 0.1s ease-in;
      }
`