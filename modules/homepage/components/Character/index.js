import React from "react"
import * as Styled from "./styled"
import { Flex } from "@rebass/grid"
import img01 from "./images/01.jpg"
import img02 from "./images/02.jpg"
import img03 from "./images/03.jpg"
import img04 from "./images/04.jpg"
import img05 from "./images/05.jpg"
import img06 from "./images/06.jpg"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Text from "components/Text"

const containerVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const variants = {
  initial: {
    rotateY: 180,
  },
  inView: {
    rotateY: 0,
    transition: {
      duration: 1,
      // ease: "backOut",
    },
  },
}

const MotionFlex = motion(Flex)

const CardBox = ({ img }) => (
  <Styled.CharacterBox width={[1, 1 / 3, 1 / 6]}>
    <Styled.Card variants={variants}>
      <Styled.CardBack />
      <Styled.CardFront>
        <Image loading="eager" src={img} alt="" width="450" height="668" layout="responsive" />
      </Styled.CardFront>
    </Styled.Card>
  </Styled.CharacterBox>
)

export default function Character() {
  const { ref, entry } = useInView({ threshold: 0.5, triggerOnce: true })
  return (
    <Styled.Container ref={ref}>
      <Text fontSize="32px" color="#FFFFFF" mb="20px" textAlign="center">
        各團英雄組隊打BOSS
      </Text>
      <Styled.Slogan>紅羅剎 x 幽幻女 x 鷹爪王 x 羅燕飛 x 白袍少爺 x 六羽逍遙</Styled.Slogan>
      <MotionFlex flexWrap="wrap" variants={containerVariants} initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"}>
        <CardBox img={img01} />
        <CardBox img={img02} />
        <CardBox img={img03} />
        <CardBox img={img04} />
        <CardBox img={img05} />
        <CardBox img={img06} />
      </MotionFlex>
    </Styled.Container>
  )
}
