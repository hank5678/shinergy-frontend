import styled from "styled-components"
import bgImg from "./bg.jpg"

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  background-image: url(${bgImg.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
