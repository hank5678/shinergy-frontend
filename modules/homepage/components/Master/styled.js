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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 130px;
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
    font-weight: 700;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 210px;
    right: 75px;
    width: 190px;
    height: 1px;
    background: #ffffff;
    transform: rotate(-45deg);
    z-index: 10;
  }
  &:nth-child(2n) {
    transform: translateY(130px);
  }
  &:nth-child(8) {
    padding: 60px 20px;
    &::after,
    &::before {
      content: none;
    }
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
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  font-weight: 100;
  font-size: 18px;
  box-sizing: border-box;
  padding: 6px;
`

export const ArrowIcon = styled(FaChevronRight).attrs({ size: 20 })`
  margin-left: 6px;
`

export const SpecialTeamText = styled.p`
  font-size: 72px;
  font-weight: 700;
  font-style: italic;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #ffffff;
  text-shadow: 0px 3px 6px #000000;
  text-align: right;
  margin-bottom: 24px;
`

export const SpecialTeamNameText = styled.p`
  font-size: 92px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #000000;
  text-align: right;
  font-weight: 700;
  margin-bottom: 32px;
`

export const BehindScene = styled.div`
  position: relative;
  background: rgba(34, 34, 34, 0.9);
  padding: 36px 0;
  box-sizing: border-box;
  text-align: center;
`

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: -1;
`
