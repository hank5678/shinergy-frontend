import styled from "styled-components"
import { color } from "styled-system"
import { Box } from "@rebass/grid"
import bgImg from "./bg.jpg"
import { motion } from "framer-motion"

export const Container = styled.section`
  background-image: url(${bgImg.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;
  padding-top: 32px;
  padding-bottom: 64px;
`

export const Slogan = styled.p`
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
`

export const GalleryBox = styled(motion(Box))`
  &:nth-child(2n) {
    transform: translateY(32px);
  }
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const ImageShadow = styled(motion.div)`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  ${color}
`

export const ImageText = styled.p`
  position: absolute;
  bottom: -1px;
  right: -3px;
  font-size: 32px;
  font-weight: 700;
  ${color}
`
