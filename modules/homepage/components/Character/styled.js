import styled from "styled-components"
import { Box } from "@rebass/grid"
import { motion } from "framer-motion"
// import img01 from "./images/01.jpg"
// import img02 from "./images/02.jpg"
// import img03 from "./images/03.jpg"
// import img04 from "./images/04.jpg"
// import img05 from "./images/05.jpg"
// import img06 from "./images/06.jpg"

export const Container = styled.section`
  box-sizing: border-box;
  padding-top: 32px;
`

export const Slogan = styled.p`
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
  line-height: 1.6em;
  box-sizing: border-box;
  padding: 0 16px;
  @media ${({ theme }) => theme.device.xs} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.sm} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.md} {
    font-size: 32px;
  }
`

export const CharacterBox = styled(Box)`
  position: relative;
  background-size: cover;
  background-position: center center;
  perspective: 2000px;
  &::before {
    content: "";
    display: block;
    padding-top: 148.44%;
  }
  /* &:nth-child(1) {
    background-image: url(${img01.src});
  }
  &:nth-child(2) {
    background-image: url(${img02.src});
  }
  &:nth-child(3) {
    background-image: url(${img03.src});
  }
  &:nth-child(4) {
    background-image: url(${img04.src});
  }
  &:nth-child(5) {
    background-image: url(${img05.src});
  }
  &:nth-child(6) {
    background-image: url(${img06.src});
  } */
`

export const Card = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
`

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top right, #333333, #666666);
`

export const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`
