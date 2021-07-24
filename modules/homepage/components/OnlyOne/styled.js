import styled from "styled-components"

export const Container = styled.section`
  position: relative;
  display: flex;
`

export const Wrapper = styled.div`
  flex: 1;
`

export const Slogan = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-align: center;
  font-size: 48px;
  font-weight: 100;
  letter-spacing: 0.2em;
  line-height: 2.5em;
  text-shadow: 0px 3px 6px #000000;
`
