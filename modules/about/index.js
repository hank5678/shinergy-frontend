import React from "react"
import Text from "components/Text"
import Header from "components/Header"
import Flex from "components/Flex"
import Box from "components/Box"
import Image from "next/image"
import Footer from "components/Footer"

import coverImg from "./images/cover.png"
import coverMobileImg from "./images/cover-mobile.png"
import firstCapitalImg from "./images/first-capital.png"
import dramaImg from "./images/drama.png"
import capitalImg from "./images/capital.png"
import bottomImg from "./images/bottom.png"
import bottomMobileImg from "./images/bottom-mobile.png"

export default function About() {
  return (
    <>
      <Header />
      <Box pt={[0, "90px", "150px"]} mb="32px">
        <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" textAlign="center" mb="32px">
          關於新勝景
        </Text>
        <Box position="relative">
          <Box display={["none", "none", "block"]}>
            <Image loading="eager" src={coverImg} alt="" layout="responsive" />
          </Box>
          <Box display={["none", "block", "none"]}>
            <Image loading="eager" src={coverMobileImg} alt="" layout="responsive" />
          </Box>
          <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="100%">
            <Text fontSize={[0, "40px", "54px"]} color="#FFFFFF" textAlign="center" fontWeight="700" lineHeight="1.5em" textShadow="0px 5px 10px #2E2E2E">
              秉持實驗精神
              <br />
              發揚傳統文化
            </Text>
          </Box>
        </Box>

        <Flex flexDirection="column" flexWrap="wrap" height={["auto", "auto", "1040px"]} width="100%" maxWidth="1100px" margin="60px auto">
          <Box order={[0, 3, 0]} width={[0, 1, "536px"]} mb={[0, "60px", "33px"]}>
            <Image loading="eager" src={firstCapitalImg} alt="" layout="responsive" />
          </Box>
          <Box order={[0, 5, 0]} width={[0, "222px", "444px"]} textAlign="right" alignSelf="flex-end">
            <Image loading="eager" src={dramaImg} alt="" layout="responsive" />
          </Box>
          <Box order={[0, 6, 0]} width={[0, "283px", "352px"]} mt="-33px" mb={[0, "40px", 0]} zIndex="-1" position="relative">
            <Image loading="eager" src={capitalImg} alt="" layout="responsive" />
          </Box>
          <Box order={[0, 1, 0]} width={[0, 1, "416px"]} ml={[0, 0, "76px"]} mb={[0, "50px", "80px"]} px={[0, "36px", 0]}>
            <Text fontSize="16px" color="#FFFFFF" lineHeight="1.6em" fontWeight="300">
              新勝景掌中劇團1996年創團成立於臺中豐原， 前身為朱清貴掌中劇團，第一代團主為朱清貴先生，目前劇團由第二代團主朱勝珏接任。
            </Text>
          </Box>
          <Box order={[0, 2, 0]} width={[0, 1, "416px"]} ml={[0, 0, "76px"]} mb={[0, "60px", "140px"]} px={[0, "36px", 0]}>
            <Flex>
              <Box flex="0 0 auto">
                <Text color="#FFFFFF" fontSize="96px" fontFamily="Arial">
                  “
                </Text>
              </Box>
              <Box flex="1" mt="40px">
                <Text fontSize="20px" color="#FFFFFF" lineHeight="1.6em" mb="16px">
                  我們經營這個藝術的工作來說，我們也真心希望咱去重視台灣的文化，歌仔戲也好，布仔戲也好，我們所要求的也僅此而已。
                </Text>
                <Text fontSize="16px" color="#FFFFFF" textAlign="right" fontWeight="300">
                  - 第一代團主 朱清貴先生
                </Text>
              </Box>
              <Box flex="0 0 auto">
                <Text color="#FFFFFF" fontSize="96px" fontFamily="Arial">
                  ”
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box order={[0, 4, 0]} width={[0, 1, "416px"]} ml={[0, 0, "76px"]} mb={[0, "60px", "84px"]} px={[0, "36px", 0]}>
            <Text fontSize="16px" color="#FFFFFF" lineHeight="1.6em" fontWeight="300">
              2015年朱清貴團長過世，由長子朱勝珏接任團長，但傳統布袋戲市場越漸縮減，讓朱團長有了收團的念頭，但不願看著父親好不容易建立的劇團就此結束，決定與弟弟一同聯手，透過科技創新，傳承台灣布袋戲。
            </Text>
          </Box>

          <Box order={[0, 7, 0]} width={[0, 1, "416px"]} ml={[0, 0, "76px"]} px={[0, "36px", 0]}>
            <Text fontSize="16px" color="#FFFFFF" lineHeight="1.6em" fontWeight="300">
              新勝景的經營理念為「秉持實驗精神，發揚傳統文化」， 致力於將傳統戲曲結合新媒材，推出新形式的表演，
              並於2018年十月演出台灣前所未見的「光雕投影布袋戲」。 表演當中，3D動畫伴隨著劇情走勢會有不同的展演表現， 譬如雨天、下雪、飄花等等…
              透過精緻的光雕投影與戲偶演出相互配合， 各種武俠世界的刺激、震撼皆無所保留的爆發開來， 為了讓聽不懂台語的民眾都能夠享受戲劇，
              投影布幕甚至加入了中英字幕， 使得掌中劇跟觀眾之間更無距離。
              <br />
              <br />
              也希望能將布袋戲朝向國際化發展，讓世界看到台灣的布袋戲，使這項專屬台灣的傳統文化，發揚光大。
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width="100%" maxWidth="1366px" margin="0 auto">
        <Box display={["none", "none", "block"]}>
          <Image loading="eager" src={bottomImg} alt="" layout="responsive" />
        </Box>
        <Box display={["none", "block", "none"]}>
          <Image loading="eager" src={bottomMobileImg} alt="" layout="responsive" />
        </Box>
      </Box>
      <Footer simplify />
    </>
  )
}
