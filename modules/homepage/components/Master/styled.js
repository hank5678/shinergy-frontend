import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"

export const Container = styled.section`
  box-sizing: border-box;
  padding-top: 64px;
`

export const Slogan = styled.p`
  font-size: 48px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 3px 6px #000000;
  margin-bottom: 64px;
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`

export const GridItem = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 50%;
  padding: 60px;
  box-sizing: border-box;
  counter-increment: my-awesome-counter;
  &::after {
    content: counter(my-awesome-counter);
    position: absolute;
    top: 32px;
    right: 20px;
    font-size: 110px;
    color: transparent;
    /* font-family */
    font-weight: 700;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
  }
  &:nth-child(2n) {
    transform: translateY(130px);
  }
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const ImageText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 32px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #000000;
  font-weight: 700;
`

export const ReadMore = styled.a`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #ffffff;
  font-weight: 100;
  font-size: 18px;
  box-sizing: border-box;
  padding: 6px;
`

export const ArrowIcon = styled(FaChevronRight).attrs({ size: 20 })`
  margin-left: 6px;
`
