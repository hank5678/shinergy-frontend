import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import { Flex } from "@rebass/grid"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const containerVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.2,
      // delayChildren: 1,
    },
  },
}

const variants = {
  initial: { opacity: 0, x: 120, y: 120 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
}

const shadowVariants = {
  initial: { x: -10, y: -10 },
  inView: {
    x: 0,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: "backOut",
    },
  },
}

const MotionFlex = motion(Flex)

export default function History() {
  const { ref, entry } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <Styled.Container ref={ref}>
      <Styled.Slogan>還記得那年的感動嗎？</Styled.Slogan>
      <MotionFlex
        flexWrap="wrap"
        maxWidth="1060px"
        margin="0 auto"
        initial="initial"
        animate={entry?.isIntersecting ? "inView" : "initial"}
        variants={containerVariants}
      >
        <Styled.GalleryBox width={1 / 2} padding="25px" variants={variants}>
          <Styled.ImageWrapper>
            <Styled.ImageShadow bg="#FFFFFF" variants={shadowVariants} />
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#FFFFFF">白晝之夜</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryBox>
        <Styled.GalleryBox width={1 / 2} padding="25px" variants={variants}>
          <Styled.ImageWrapper>
            <Styled.ImageShadow bg="#ff006c" variants={shadowVariants} />
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#ff006c">雲林國際偶戲節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryBox>
        <Styled.GalleryBox width={1 / 2} padding="25px" variants={variants}>
          <Styled.ImageWrapper>
            <Styled.ImageShadow bg="#00c4ff" variants={shadowVariants} />
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#00c4ff">桃園科技藝術節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryBox>
        <Styled.GalleryBox width={1 / 2} padding="25px" variants={variants}>
          <Styled.ImageWrapper>
            <Styled.ImageShadow bg="#80ff00" variants={shadowVariants} />
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#80ff00">台灣文化博覽會</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryBox>
      </MotionFlex>
      {/* <Styled.GalleryList>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#FFFFFF">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#FFFFFF">白晝之夜</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#ff006c">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#ff006c">雲林國際偶戲節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#00c4ff">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#00c4ff">桃園科技藝術節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#80ff00">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#80ff00">台灣文化博覽會</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
      </Styled.GalleryList> */}
    </Styled.Container>
  )
}
