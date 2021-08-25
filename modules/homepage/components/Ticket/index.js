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

export default function Ticket() {
  return (
    <Styled.Container>
      <Image src={coverImg} alt="" width="2732" height="1408" layout="responsive" />
      <Box pt="64px" pb="64px" bg="#dcbedb">
        <Styled.Title>早鳥與套票優惠方案</Styled.Title>
        <Flex maxWidth={[0, "320px", "600px", "1200px"]} margin="0 auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 2, 1 / 4]} textAlign="center" p="8px">
            <Box bg="#ffffff" p="24px">
              <Styled.CardTitle>獨行俠限定價</Styled.CardTitle>
              <Styled.CardImageWrapper>
                <Image src={pattern01} alt="" width="430" height="420" layout="responsive" />
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
                <Image src={pattern02} alt="" width="430" height="420" layout="responsive" />
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
                <Image src={pattern03} alt="" width="430" height="420" layout="responsive" />
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
                <Image src={pattern04} alt="" width="430" height="420" layout="responsive" />
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
      </Box>
    </Styled.Container>
  )
}
