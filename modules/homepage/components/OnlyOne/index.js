import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import Box from "components/Box"
import { Flex } from "@rebass/grid"
import img01 from "./images/01.jpg"
import img02 from "./images/02.jpg"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const leftBoxVariants = {
  initial: {
    x: "-100%",
  },
  inView: {
    x: 0,
    transition: {
      duration: 0.5,
      // ease: "backOut",
    },
  },
}

const rightBoxVariants = {
  initial: {
    x: "100%",
  },
  inView: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const sloganVariants = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function OnlyOne() {
  const { ref, entry } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <Styled.Container ref={ref}>
      <Flex flexWrap="wrap">
        <MotionBox width={[1, 1, 1 / 2]} variants={leftBoxVariants} initial="initial" animate={entry?.isIntersecting && "inView"}>
          <Image loading="eager" src={img01} alt="" width="680" height="450" layout="responsive" />
        </MotionBox>
        <MotionBox width={[1, 1, 1 / 2]} variants={rightBoxVariants} initial="initial" animate={entry?.isIntersecting && "inView"}>
          <Image loading="eager" src={img02} alt="" width="1366" height="912" layout="responsive" />
        </MotionBox>
      </Flex>
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        variants={sloganVariants}
        initial="initial"
        animate={entry?.isIntersecting && "inView"}
      >
        <Styled.Slogan>
          2021跨年表演場
          <br />
          全新劇本
          <br />
          視覺 X 聽覺
        </Styled.Slogan>
      </MotionBox>
    </Styled.Container>
  )
}
