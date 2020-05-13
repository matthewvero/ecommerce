import styled from 'styled-components'

export const MenuItemBackground = styled.div`
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      transition: transform 3s ease-out;
      background-image: ${props => props.background}
`

export const MenuItemContainer = styled.div`
      min-width: 30%;
      height: 240px;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: slategrey 0px 0px 10px;
      margin: 0 7.5px 15px;
      overflow: hidden;

      &.large {
            height: 380px;
      }

      &:first-child {
            margin-right: 7.5px;
      }

      &:last-child {
            margin-left: 7.5px;
      }

      &:hover ${MenuItemBackground} {
            transform: scale(1.3);  
      }

      .content {
            height: 90px;
            padding: 5px 25px 20px 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;
            opacity: 0.3;
            position: absolute;
            text-transform: uppercase;

            &:hover {
                  opacity: 0.7;
                  cursor: pointer;
            }

            .title {
                  font-weight: bold;
                  margin-bottom: 6px;
                  font-size: 22px;
                  color: #4a4a4a;
            }

            .subtitle {
                  font-weight: lighter;
                  font-size: 16px;
            }
      }

`


export const MenuItemContent = styled.div`
      height: 90px;
      padding: 5px 25px 20px 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: white;
      opacity: 0.3;
      position: absolute;
      text-transform: uppercase;

      &:hover {
            opacity: 0.7;
            cursor: pointer;
      }

      .title {
            font-weight: bold;
            margin-bottom: 6px;
            font-size: 22px;
            color: #4a4a4a;
      }

      .subtitle {
            font-weight: lighter;
            font-size: 16px;
      }
`


export const MenuItemTitle = styled.div`
      font-weight: bold;
      margin-bottom: 6px;
      font-size: 22px;
      color: #4a4a4a;
`

export const MenuItemSubTitle = styled.div`
      font-weight: lighter;
      font-size: 16px;
`