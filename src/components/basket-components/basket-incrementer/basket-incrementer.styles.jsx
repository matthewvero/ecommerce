import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const QuantityContainer = styled.div`
      flex-direction: row;
      align-items: center;
      width: 150px;
      position: relative;

`

export const QuantityIcon = styled(FontAwesomeIcon)`
      display: inline-block;
      vertical-align: middle;
      padding: 15px 15px;
      cursor: pointer;
      z-index: 1;
      &:hover {
            background-color: rgb(220, 220, 220);
      }
`

export const QuantityNumber = styled.div`
      display: inline-block;
      margin: 0 10px;
      vertical-align: middle;
      font-size: 1.2rem;
      pointer-events: none;
`