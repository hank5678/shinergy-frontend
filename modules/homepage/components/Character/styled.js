import styled from "styled-components"
import { Box } from "@rebass/grid"
import { motion } from "framer-motion"

export const Container = styled.section`
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: #222222;
`

export const Slogan = styled.p`
  font-size: 24px;
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
    font-size: 24px;
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
