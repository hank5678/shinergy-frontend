import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import img01 from "./images/01.jpg"
import img02 from "./images/02.jpg"
import img03 from "./images/03.jpg"
import img04 from "./images/04.jpg"
import img05 from "./images/05.jpg"
import img06 from "./images/06.jpg"
import img07 from "./images/07.jpg"
import img08 from "./images/08.jpg"
import img09 from "./images/09.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"
import img13 from "./images/13.jpg"
import img14 from "./images/14.jpg"
import bg from "./images/bg.svg"
import { Flex } from "rebass"
import Box from "components/Box"
import Text from "components/Text"
import { useInView } from "react-intersection-observer"

const gridVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const gridItemVariants = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // ease: "backOut",
    },
  },
}

const ReadMore = () => (
  <Styled.ReadMore href="http://www.google.com.tw" target="_blank" rel="noreferrer">
    Read More
    <Styled.ArrowIcon />
  </Styled.ReadMore>
)

export default function Master() {
  const { ref, entry } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Styled.Container ref={ref}>
      <Styled.Slogan>七團英雄好漢 X 共同聯手</Styled.Slogan>
      <Styled.Grid variants={gridVariants} initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"}>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img01} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>陳錫煌掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img02} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>新西園掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img03} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>聲五洲掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img04} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>真吉祥掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img05} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>蕭孟然掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img06} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>彰藝園掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image src={img07} alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>新勝景掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.SpecialTeamText>SPECIAL TEAM</Styled.SpecialTeamText>
          <Styled.SpecialTeamNameText>太日樂集</Styled.SpecialTeamNameText>
          <Image src={img08} alt="" width="400" height="260" layout="responsive" />
        </Styled.GridItem>
      </Styled.Grid>
      <Styled.BehindScene>
        <Styled.BgWrapper>
          <Image src={bg} alt="" width="400" height="260" layout="responsive" />
        </Styled.BgWrapper>
        <Text color="#FFFFFF" fontSize={[0, "18px", "32px", "48px"]} textAlign="center" as="p" mb={[0, "12px", "16px", "36px"]}>
          各路頂尖好漢一起打造全新世界
        </Text>
        <Text color="#FFFFFF" fontSize={[0, "16px", "24px"]} textAlign="center" as="p" mb="24px">
          有關我們的幕後製作
        </Text>
        <Flex maxWidth="1000px" margin="0 auto 36px auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 3]}>
            <Image src={img09} alt="" width="400" height="260" layout="responsive" />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Image src={img10} alt="" width="400" height="260" layout="responsive" />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Image src={img11} alt="" width="400" height="260" layout="responsive" />
          </Box>
        </Flex>
        <ReadMore />
      </Styled.BehindScene>
      <Box bg="#FFFFFF" py="64px">
        <Text color="#000000" fontSize="48px" textAlign="center" as="p" mb="64px">
          獨家課程．全新設計
        </Text>
        <Flex maxWidth="1200px" margin="0 auto 36px auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image src={img12} alt="" width="400" height="260" layout="responsive" />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                戲偶頭製作
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore />
              </Box>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image src={img13} alt="" width="400" height="260" layout="responsive" />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                金光佈景繪製
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore />
              </Box>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image src={img14} alt="" width="400" height="260" layout="responsive" />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                兵器道具製作
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Styled.Container>
  )
}
