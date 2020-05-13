import styled                 from 'styled-components'
import { FontAwesomeIcon }    from "@fortawesome/react-fontawesome";

export const BasketContainer = styled.div`
      position: relative;
`

export const BasketIcon = styled(FontAwesomeIcon)`
      ${props => {
            switch(props.hidden) {
                  case 'highlighted': 
                        return 'color: grey;'
                  case 'itemsInBasket':
                        return 'color: orange;'
                  default:
                        return null
            }
      }}
      padding: 10px 15px;
      cursor: pointer;
      &:hover {
            background-color: #aaaaaa;
      }
`
