import styled from 'styled-components'

export const SpinnerContainer = styled.div`
      width: 100px;
      height: 100px;
      border: 3px solid rgba(195,195,195, 1);
      border-radius: 50%;
      border-top-color: #636767;
      animation: spin 1s ease-in-out infinite;

      @keyframes spin {
            to {
                  transform: rotate(360deg)
            }
      }
      z-index: 1;

`
export const SpinnerOverlay = styled.div`
      position: fixed;
      width: 100vw;
      height: 100vh;
      background-color: grey; 
      opacity: 0.4;
      display: flex;
      justify-content: center;
      align-items: center;
`