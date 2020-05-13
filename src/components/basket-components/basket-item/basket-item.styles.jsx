import styled from 'styled-components'

export const BasketItemContainer = styled.div`
      display: flex;
      flex-direction: row;
      padding: 10px 0;
`


export const BasketItemImage = styled.div`
      width: 100px;
      height: 100px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
`
export const BasketItemContent = styled.div`
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      .title {
            text-transform: uppercase;
      }
      text-align: start;
`


export const CheckoutItemContainer = styled.div`
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      padding: 10px 0;
      border-top: grey 1px solid;
      border-bottom: grey 1px solid;
`
export const CheckoutItemImage = styled.div`
      width: 150px;
      height: 180px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
`
export const CheckoutItemComponent = styled.div`
            width: 150px;
            height: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            font-weight: 500;
`