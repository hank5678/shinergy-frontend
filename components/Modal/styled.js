import styled, { keyframes } from "styled-components"
import frameImg from "./images/frame.svg"

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  animation: ${animation} 0.25s ease-out 1;
`

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;

  width: 1000px;
  height: auto;
  box-sizing: border-box;
  padding: 20px;
`

export const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  background-image: url(${frameImg.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  &::before {
    content: "";
    display: block;
    padding-top: 60%;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 48.5px 64px 10px 64px;
`
