import styled from 'styled-components'

export const SignInPageContainer = styled.div`
      display: flex;
      flex-direction: row;
      padding: 0 80px;
      justify-content: space-between;

      &.signin-appear {
            opacity: 0;
      }
      
      &.signin-appear.signin-appear-active {
            opacity: 1;
            transition: opacity 0.1s ease-in;
      }
`