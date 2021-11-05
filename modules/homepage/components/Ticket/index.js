import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
// import coverImg from "./images/cover.jpg"
import Box from "components/Box"
import Text from "components/Text"
import { Flex } from "@rebass/grid"
// import pattern01 from "./images/pattern01.png"
// import pattern02 from "./images/pattern02.png"
// import pattern03 from "./images/pattern03.png"
// import pattern04 from "./images/pattern04.png"
import manImg from "./images/man.png"
import womanImg from "./images/woman.png"
import logoImg from "./images/logo.png"
import { IoIosArrowForward } from "react-icons/io"
import Cover from "./components/Cover"
import Frame from "components/Frame"
import showListImg from "./images/showlist.png"
import seatImg from "./images/seat.png"
import ticketsImg from "./images/tickets.png"

import showListMobileImg1 from "./images/showlist1-m.png"
import showListMobileImg2 from "./images/showlist2-m.png"
import showListMobileImg3 from "./images/showlist3-m.png"

import ticketsMobileImg1 from "./images/tickets1-m.png"
import ticketsMobileImg2 from "./images/tickets2-m.png"
import ticketsMobileImg3 from "./images/tickets3-m.png"
import ticketsMobileImg4 from "./images/tickets4-m.png"
import ticketsMobileImg5 from "./images/tickets5-m.png"

export default function Ticket() {
  return (
    <Styled.Container>
      {/* <Image loading="eager" src={coverImg} alt="" width="2732" height="1408" layout="responsive" /> */}
      <Cover />
      {/* <Frame></Frame> */}
      <Box maxWidth="1200px" margin="32px auto 180px auto" mb={["64px", "64px", "64px", "110px", "180px"]} padding="0 27px">
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
              {/* <Box width="100%" textAlign="center" as="a" href="https://www.opentix.life/event/1448953241868992514" target="_blank"> */}
                {/* <Text
                  as="span"
                  fontSize={[0, "12px", "26px", "26px", "26px"]}
                  textAlign="center"
                  color="#FF0058"
                >
                  立即搶票
                </Text> */}
                {/*<Styled.MainButton>
              <Box ml="56px" as="span">
                <IoIosArrowForward fontSize="24px" color="#FFFFFF" />
              </Box>
            </Styled.MainButton>*/}
              {/* </Box> */}
              <Box textAlign="center">
                <Box as="a" href="https://www.opentix.life/event/1448953241868992514" target="_blank" display="inline-block" bg="#FF0058" px="16px" py="14px">
                  <Box display="flex" alignItems="center">
                    <Text fontSize="26px" color="#FFFFFF">
                      立即搶票
                    </Text>
                    <IoIosArrowForward fontSize="24px" color="#FFFFFF" />
                  </Box>
                </Box>
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
      <Box bg="#5D0B14" px="16px" py="44px">
        <Text color="#FFFFFF" fontSize="44px" textAlign="center" mb="44px" fontWeight="700">表演節目表</Text>
        <Box margin="0 auto" maxWidth="979px" mb="84px" display={["none", "none", "block"]}>
          <Image loading="eager" src={showListImg} alt="" width="979" height="707" layout="responsive" />
        </Box>
        <Box margin="0 auto" maxWidth="314px" mb="84px" display={["block", "block", "none"]}>
          <Box mb="24px">
            <Image  loading="eager" src={showListMobileImg1} alt="" width="314" height="707" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={showListMobileImg2} alt="" width="314" height="707" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={showListMobileImg3} alt="" width="314" height="707" layout="responsive" />
          </Box>
        </Box>


        <Text color="#FFFFFF" fontSize="44px" textAlign="center" mb="44px" fontWeight="700">節目座位表</Text>
        <Box margin="0 auto" maxWidth="980px" mb="84px">
          <Image  loading="eager" src={seatImg} alt="" width="980" height="757" layout="responsive" />
        </Box>

        



        <Text color="#FFFFFF" fontSize="44px" textAlign="center" mb="44px" fontWeight="700">票價資訊</Text>
        <Box margin="0 auto" maxWidth="980px" mb="39px" display={["none", "none", "block"]}>
          <Image loading="eager" src={ticketsImg} alt="" width="980" height="400" layout="responsive" />
        </Box>

        <Box margin="0 auto" maxWidth="200px" mb="39px" display={["block", "block", "none"]}>
          <Box mb="24px">
            <Image  loading="eager" src={ticketsMobileImg1} alt="" width="394" height="784" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={ticketsMobileImg2} alt="" width="402" height="568" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={ticketsMobileImg3} alt="" width="402" height="566" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={ticketsMobileImg4} alt="" width="400" height="562" layout="responsive" />
          </Box>
          <Box mb="24px">
            <Image  loading="eager" src={ticketsMobileImg5} alt="" width="398" height="704" layout="responsive" />
          </Box>
        </Box>

        <Box textAlign="center">
          <Box as="a" href="https://www.opentix.life/event/1448953241868992514" target="_blank" display="inline-block" bg="#FFCE00" px="30px" py="14px">
            <Box display="flex" alignItems="center">
              <Text fontSize="26px" color="#000000">
                立即購票
              </Text>
              <IoIosArrowForward fontSize="24px" color="#000000" />
            </Box>
          </Box>
        </Box>
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
