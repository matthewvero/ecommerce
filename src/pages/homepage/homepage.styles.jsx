import styled from 'styled-components'

export const HomepageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 80px;
  
      &.homepage-appear {
            opacity: 0;
            transform-origin: top;
      }
      
      &.homepage-appear.homepage-appear-active {
            opacity: 1;
            transition: opacity 0.1s ease-in;
      }
`