import styled, { keyframes } from "styled-components"
import recordBgImg from "./images/record-bg.png"

const moving = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(15px);
  }
`

export const Video = styled.video`
  object-fit: cover;
  width: 100%;
  /* height: calc(100vh - 64px); */
  height: 100vh;
`
export const ArrowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  animation: ${moving} 0.5s ease-in infinite;
  animation-direction: alternate;
`

export const Record = styled.div`
  background-image: url(${recordBgImg.src});
  background-size: cover;
  background-position: center center;
  box-sizing: border-box;
  padding: 32px;
`
