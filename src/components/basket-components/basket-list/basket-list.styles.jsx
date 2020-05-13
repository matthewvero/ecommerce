import styled from 'styled-components'

export const BasketListContainer = styled.div`
      overflow: scroll;
      height: 70vh;
      margin: 20px 20px 0 20px;
      overflow: scroll;
      position: relative;
      .checkout {
            margin: 0;
            width: 100%;
      }
      ${props => props.checkout ? 'margin: 0; width: 100%;' : null}
`