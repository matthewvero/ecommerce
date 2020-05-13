import styled from 'styled-components'
import {ButtonContainer} from '../button/button.styles'
export const SignInFormContainer = styled.div`
      width: 40%;
      text-align: left;
      box-shadow: slategrey 0px 0px 10px;
      padding: 20px 20px;

`

export const SignInFormComponent = styled.div`
      display: flex;
      flex-direction: column;
`

export const SignInFormButtonContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 20px 0;
      ${ButtonContainer} {
            &:first-child {
                  width: 20%
            }
      }
`