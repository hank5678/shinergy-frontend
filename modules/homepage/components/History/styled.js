import styled from "styled-components"
import { color } from "styled-system"
import { Box } from "@rebass/grid"
import bgImg from "./bg.jpg"
import { motion } from "framer-motion"

export const Container = styled.section`
  position: relative;
  background-image: url(${bgImg.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;
  padding-top: 64px;
  padding-bottom: 64px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const Slogan = styled.p`
  position: relative;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
  @media ${({ theme }) => theme.device.xs} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.sm} {
    font-size: 32px;
  }
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
  @media ${({ theme }) => theme.device.xs} {
    top: 4px;
    left: 4px;
  }

  @media ${({ theme }) => theme.device.sm} {
    top: 10px;
    left: 10px;
  }
`

export const ImageText = styled.p`
  position: absolute;
  bottom: -1px;
  right: -3px;
  font-size: 32px;
  font-weight: 700;
  ${color}

  @media ${({ theme }) => theme.device.xs} {
    font-size: 16px;
    font-weight: 400;
  }

  @media ${({ theme }) => theme.device.sm} {
    font-size: 32px;
    font-weight: 700;
  }
`
