import styled, { keyframes } from "styled-components"
import bgImg from "./bg.jpg"
import { motion } from "framer-motion"

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
`

export const Bg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${bgImg.src});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 880px;
`

const moving = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(15px);
  }
`

export const ArrowWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  animation: ${moving} 0.5s ease-in infinite;
  animation-direction: alternate;
`
