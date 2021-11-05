import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import coverImg from "./images/cover.jpg"
import Box from "components/Box"
import Text from "components/Text"
import { Flex } from "@rebass/grid"
import pattern01 from "./images/pattern01.png"
import pattern02 from "./images/pattern02.png"
import pattern03 from "./images/pattern03.png"
import pattern04 from "./images/pattern04.png"
import manImg from "./images/man.png"
import womanImg from "./images/woman.png"
import logoImg from "./images/logo.png"
import { IoIosArrowForward } from "react-icons/io"
import Cover from "./components/Cover"

import Frame from "components/Frame"

export default function Ticket() {
  return (
    <Styled.Container>
      {/* <Image loading="eager" src={coverImg} alt="" width="2732" height="1408" layout="responsive" /> */}
      <Cover />
      {/* <Frame></Frame> */}
      <Box maxWidth="1200px" margin="32px auto 64px auto" padding="0 27px">
        <Frame height={[0, "128%", "90%", "45%", "45%"]}>
          <Flex alignItems="center" height="100%">
            <Box width="100%">
              <Text fontSize={[0, "16px", "26px", "26px", "26px"]} textAlign="center" color="#d43e23" mb={[0, "16px", "16px", "16px", "15px"]}>
                2021/12/31 - 2022/01/02
              </Text>
              <Text fontSize={[0, "24px", "40px", "40px", "40px"]} textAlign="center" color="#d43e23" mb={[0, "30px", "30px", "30px", "30px"]}>
                西門紅樓
              </Text>
              <Box mb={[0, "30px", "30px", "30px", "40px"]} maxWidth={["none", "none", "none", "600px", "750px", "800px"]} margin="0 auto">
                <Image loading="eager" src={logoImg} alt="" width="600" height="304" layout="responsive" />
              </Box>

              <Text fontSize={[0, "20px", "40px", "40px", "40px"]} textAlign="center" color="#d43e23" mb={[0, "30px", "30px", "30px", "20px"]}>
                每日限定兩場
              </Text>
              <Box width="100%" textAlign="center">
                <Text
                  as="span"
                  href="https://www.opentix.life/event/1448953241868992514"
                  target="_blank"
                  fontSize={[0, "12px", "26px", "26px", "26px"]}
                  textAlign="center"
                  color="#FF0058"
                >
                  立即搶票
                </Text>
                {/*<Styled.MainButton>
              <Box ml="56px" as="span">
                <IoIosArrowForward fontSize="24px" color="#FFFFFF" />
              </Box>
            </Styled.MainButton>*/}
              </Box>
            </Box>
          </Flex>

          <Box
            position="absolute"
            bottom={[0, "-30px", "-30px", "-100px", "-120px", "-170px"]}
            left={[0, "-30px", "-30px", "-40px", "-80px", "-160px"]}
            width={[0, "110px", "210px", "300px", "400px"]}
          >
            <Image loading="eager" src={womanImg} alt="" width="400" height="545" layout="responsive" />
          </Box>
          <Box
            position="absolute"
            bottom={[0, "-30px", "-30px", "-100px", "-120px", "-170px"]}
            right={[0, "-30px", "-30px", "-40px", "-80px", "-160px"]}
            width={[0, "110px", "210px", "300px", "400px"]}
          >
            <Image loading="eager" src={manImg} alt="" width="400" height="545" layout="responsive" />
          </Box>
        </Frame>
      </Box>
      {/* <Box pt="64px" pb="64px" bg="#dcbedb">
        <Styled.Title>早鳥與套票優惠方案</Styled.Title>
        <Flex maxWidth={[0, "320px", "600px", "1200px"]} margin="0 auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 4]} textAlign="center" p="8px">
            <Box bg="#ffffff" p="24px">
              <Styled.CardTitle>獨行俠限定價</Styled.CardTitle>
              <Styled.CardImageWrapper>
                <Image loading="eager" src={pattern01} alt="" width="430" height="420" layout="responsive" />
                <Box width="100%" position="absolute" top="50%" left="50%" style={{ transform: "translate(-50%, -50%)" }}>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    英雄席x1
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    +
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="12px">
                    教學活動
                  </Text>
                  <Text fontSize="24px">限定保留席x1</Text>
                </Box>
              </Styled.CardImageWrapper>
              <Styled.PriceWrapper>
                <Styled.CardOriginalPrice>$2,800</Styled.CardOriginalPrice>
                <Styled.CardSpecialPrice>$1,920</Styled.CardSpecialPrice>
              </Styled.PriceWrapper>
              <Styled.CardButton>立即搶票</Styled.CardButton>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 4]} textAlign="center" p="8px">
            <Box bg="#ffffff" p="24px">
              <Styled.CardTitle>雙俠同遊限定</Styled.CardTitle>
              <Styled.CardImageWrapper>
                <Image loading="eager" src={pattern02} alt="" width="430" height="420" layout="responsive" />
                <Box width="100%" position="absolute" top="50%" left="50%" style={{ transform: "translate(-50%, -50%)" }}>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    英雄席x2
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    +
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="12px">
                    教學活動
                  </Text>
                  <Text fontSize="24px">限定保留席x2</Text>
                </Box>
              </Styled.CardImageWrapper>
              <Styled.PriceWrapper>
                <Styled.CardOriginalPrice>$5,600</Styled.CardOriginalPrice>
                <Styled.CardSpecialPrice>$1,960 / 人</Styled.CardSpecialPrice>
              </Styled.PriceWrapper>
              <Styled.CardButton>立即搶票</Styled.CardButton>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 4]} textAlign="center" p="8px">
            <Box bg="#ffffff" p="24px">
              <Styled.CardTitle>四俠結盟限定</Styled.CardTitle>
              <Styled.CardImageWrapper>
                <Image loading="eager" src={pattern03} alt="" width="430" height="420" layout="responsive" />
                <Box width="100%" position="absolute" top="50%" left="50%" style={{ transform: "translate(-50%, -50%)" }}>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    英雄席x4
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    +
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="12px">
                    教學活動
                  </Text>
                  <Text fontSize="24px">限定保留席x4</Text>
                </Box>
              </Styled.CardImageWrapper>
              <Styled.PriceWrapper>
                <Styled.CardOriginalPrice>$11,200</Styled.CardOriginalPrice>
                <Styled.CardSpecialPrice>$1,960 / 人</Styled.CardSpecialPrice>
              </Styled.PriceWrapper>
              <Styled.CardButton>立即搶票</Styled.CardButton>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 4]} textAlign="center" p="8px">
            <Box bg="#ffffff" p="24px">
              <Styled.CardTitle>英雄聯盟10人限定</Styled.CardTitle>
              <Styled.CardImageWrapper>
                <Image loading="eager" src={pattern04} alt="" width="430" height="420" layout="responsive" />
                <Box width="100%" position="absolute" top="50%" left="50%" style={{ transform: "translate(-50%, -50%)" }}>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    英雄席x10
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="6px">
                    +
                  </Text>
                  <Text fontSize="24px" fontWeight="700" mb="12px">
                    教學活動
                  </Text>
                  <Text fontSize="24px">限定保留席x10</Text>
                </Box>
              </Styled.CardImageWrapper>
              <Styled.PriceWrapper>
                <Styled.CardOriginalPrice>$28,000</Styled.CardOriginalPrice>
                <Styled.CardSpecialPrice>$1,920 / 人</Styled.CardSpecialPrice>
              </Styled.PriceWrapper>
              <Styled.CardButton>立即搶票</Styled.CardButton>
            </Box>
          </Box>
        </Flex>
      </Box> */}
    </Styled.Container>
  )
}
