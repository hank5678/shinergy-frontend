import styled from "styled-components"
import middle from "./middle.svg"
import { space } from "styled-system"

export const Container = styled.div`
  position: relative;
`

export const Middle = styled.div`
  width: 100%;
  background-image: url(${middle.src});
  background-size: 100% auto;
  margin-top: -2px;
  margin-bottom: -2px;
  &::before {
    content: "";
    display: block;
    /* padding-top: ${({ ratio }) => ratio}%; */
    ${space}
  }
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2% 6%;
  box-sizing: border-box;
`
