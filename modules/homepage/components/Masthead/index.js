import React from "react"
import * as Styled from "./styled"
import Box from "components/Box"
import Text from "components/Text"
import logoImg from "./logo.png"
import Image from "next/image"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const duration = 0.5
const delayCount = (count) => 0.5 * count

const bgVariants = {
  initial: { opacity: 0, scale: 1.2 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay: delayCount(1),
    },
  },
}

const text1Variants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: {
      duration,
      delay: delayCount(2),
    },
  },
}

const text2Variants = {
  initial: { opacity: 0, scale: 1.5 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay: delayCount(3),
    },
  },
}

const text3Variants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: {
      duration,
      delay: delayCount(4),
    },
  },
}

const arrowVariants = {
  initial: { opacity: 0 },
  inView: {
    opacity: 1,
    transition: {
      duration,
      delay: delayCount(5),
    },
  },
}

export default function Masthead() {
  const { ref, entry } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Styled.Container ref={ref}>
      <Styled.Bg initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={bgVariants} />
      <Styled.Wrapper>
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={text1Variants}>
          <Text color="#FFFFFF" fontSize="20px" textAlign="center" mb="24px">
            一年一度．限定展出
          </Text>
        </MotionBox>
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={text2Variants}>
          <Image loading="eager" src={logoImg} alt="" width="880" height="420" layout="responsive" />
        </MotionBox>
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={text3Variants}>
          <Text color="#FFFFFF" fontSize="32px" textAlign="center" mt="24px" fontWeight="700">
            眾團聯手．全新劇本設計．神秘嘉賓
          </Text>
        </MotionBox>

        <Styled.ArrowWrapper
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="24px"
          initial="initial"
          animate={entry?.isIntersecting ? "inView" : "initial"}
          variants={arrowVariants}
        >
          <IoIosArrowDown color="#FFFFFF" fontSize="24px" style={{ marginBottom: -12 }} />
          <IoIosArrowDown color="#FFFFFF" fontSize="24px" />
        </Styled.ArrowWrapper>
      </Styled.Wrapper>
      <Box
        as="a"
        display={["none", "none", "block"]}
        href="http://www.google.com.tw"
        target="_blank"
        position="absolute"
        bottom="100px"
        right="0px"
        bg="#FF0058"
        px="9px"
        py="14px"
      >
        <Text fontSize="18px" color="#FFFFFF" mb="8px">
          限定早鳥發售中
        </Text>
        <Box display="flex" alignItems="center">
          <Text fontSize="26px" color="#FFFFFF">
            立即搶票
          </Text>
          <IoIosArrowForward fontSize="24px" color="#FFFFFF" />
        </Box>
      </Box>
    </Styled.Container>
  )
}
