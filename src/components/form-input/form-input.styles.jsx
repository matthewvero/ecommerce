import styled from 'styled-components'

export const FormInputContainer = styled.div`
      width: 100%;
      position: relative;
`

export const FormInputLabel = styled.label`
      position: absolute;
      top: 23px;
      left: 5px;
      color: dimgrey;
      transition: ease 300ms all;
      pointer-events: none;
      
`

export const FormInputComponent = styled.input`
      margin: 20px 0;
      border: none;
      border-bottom: solid 1px black;
      padding: 10px 5px;
      width: 100%;
      box-sizing: border-box;
      
      &:focus {
            outline: none;
      }
      
      &:focus ~ ${FormInputLabel}{
            top: 0px;
            font-size: 0.9rem;
            color: black;
      }


`