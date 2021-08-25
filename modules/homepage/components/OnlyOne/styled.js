import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.section`
  position: relative;
`

export const Slogan = motion(styled.p`
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
  width: 100%;
  @media ${({ theme }) => theme.device.xs} {
    font-size: 24px;
  }
  @media ${({ theme }) => theme.device.md} {
    font-size: 36px;
  }
  @media ${({ theme }) => theme.device.lg} {
    font-size: 48px;
  }
`)
