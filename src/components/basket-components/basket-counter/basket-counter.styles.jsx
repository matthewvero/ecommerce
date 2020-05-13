import styled from 'styled-components'

export const BasketCounterContainer = styled.div`
      position: absolute;
      bottom: 30px;
      left: 12px;
      font-size: 0.9rem;
      ${props => props.hidden ? 'display: block' : 'null'}
`