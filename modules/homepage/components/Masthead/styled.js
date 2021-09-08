import styled from "styled-components"
import bgImg from "./bg.jpg"

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background-image: url(${bgImg.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 880px;
`
