import React from "react"
import Header from "components/Header"
import Flex from "components/Flex"
import Box from "components/Box"
import Text from "components/Text"
import Image from "next/image"
import * as Styled from "./styled"
import kvImg from "./images/kv.png"
import photoImg from "./images/photo.jpg"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import logo1Img from "./images/logo1.svg"
import logo2Img from "./images/logo2.svg"
import logo3Img from "./images/logo3.svg"
import logo4Img from "./images/logo4.svg"
import logo5Img from "./images/logo5.svg"
import logo6Img from "./images/logo6.svg"
import logo7Img from "./images/logo7.svg"
import logo8Img from "./images/logo8.svg"
import Footer from "components/Footer"

const recordData = [
  { year: "2018", text: "台北白晝之夜 演出" },
  { year: "2018", text: "血肉果汁機跨年演唱會 中場演出" },
  { year: "2019", text: "台灣文化博覽會 受邀演出" },
  { year: "2019", text: "台中葫蘆墩文化中心 演出" },
  { year: "2019", text: "屏東藝術館 演出" },
  { year: "2019", text: "「美國臺灣傳統週暨加拿大亞裔傳統月美加西團」北美巡迴演出" },
  { year: "2019", text: "富邦人壽TICC業務表揚大會 受邀演出" },
  { year: "2019", text: "外交部國情授權影片" },
  { year: "2019", text: "文化科技論壇" },
  { year: "2019", text: "桃園科技藝術節 演出" },
  { year: "2019", text: "文化策進院揭牌授權影片" },
  { year: "2020", text: "澎湖元宵乞龜演出" },
  { year: "2020", text: "國泰人壽TICC業務表揚大會 受邀演出" },
  { year: "2020", text: "台北燈節演出 (台北市政府觀傳局)" },
  { year: "2020", text: "新北三峽 客家文化園區 演出" },
  { year: "2020", text: "台北白晝之夜 演出" },
]

export default function News() {
  return (
    <>
      <Header />
      <Box mb="100px">
        <Styled.Video src="/news.mp4" autoPlay={true} loop muted />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" width="100%">
          <Text
            fontSize={[0, "36px", "80px"]}
            fontWeight="700"
            textAlign="center"
            color="#FFFFFF"
            textShadow="0px 3px 6px #000000"
            mb={[0, "20px", "46px"]}
            mt={[0, "120px", "200px"]}
          >
            新勝景掌中劇
          </Text>
          <Text fontSize={[0, "20px", "40px"]} fontWeight="700" textAlign="center" color="#FFFFFF" textShadow="0px 3px 6px #000000" mb={[0, "140px", "80px"]}>
            全台首創光雕布袋戲
          </Text>
          <Text
            fontSize={[0, "16px", "24px"]}
            fontWeight="400"
            textAlign="center"
            color="#FFFFFF"
            textShadow="0px 3px 6px #000000"
            mb={[0, "40px", "110px"]}
            lineHeight="1.5em"
          >
            讓你擁有截然不同
            <br />
            全新的感動
          </Text>
          <Styled.ArrowWrapper display="flex" flexDirection="column" alignItems="center">
            <IoIosArrowDown color="#FFFFFF" fontSize="24px" style={{ marginBottom: -12 }} />
            <IoIosArrowDown color="#FFFFFF" fontSize="24px" />
          </Styled.ArrowWrapper>
        </Box>
      </Box>
      <Box width="100%" maxWidth="1100px" margin="0 auto 100px auto">
        <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" mb="40px" textAlign={["center", "center", "left"]}>
          本期展出
        </Text>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} pr={[0, 0, "14px"]} mb={[0, "20px", 0]}>
            <Image loading="eager" src={kvImg} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1, 1 / 2]} pl={[0, 0, "14px"]}>
            <Text fontSize={[0, "16px", "24px"]} textAlign={["center", "center", "left"]} color="#FFFFFF" mb="16px">
              2021/12/31 - 2022/01/02
            </Text>
            <Text fontSize={[0, "28px", "48px"]} textAlign={["center", "center", "left"]} color="#FFFFFF" fontWeight="700" mb="24px">
              伏魔英雄帖再現白光劍
            </Text>
            <Text fontSize={[0, "14px", "20px"]} px={[0, "16px", 0]} color="#FFFFFF" fontWeight="300" lineHeight="1.8em" mb={[0, "30px", "60px"]}>
              我們首次推出的光雕布袋戲定目劇，集結北中南各家劇團演出精華，如傳統劍俠戲、廟口金光戲、電視木偶劇等特色，搭配全新光雕舞台設計及中英字幕，使國內外民眾方便理解劇情。
              <br />
              <br />
              這次更結合「太日樂集 」現場擊樂，會帶給觀眾震撼的感官體驗，除了表演外，還有每日限定偶藝相關體驗課程，期望帶給都市裡的民眾一場布袋戲文化之旅!
            </Text>
            <Box textAlign={["center", "center", "left"]}>
              <Box display="inline-block" padding={[0, "10px", "20px"]} bg="#FFFFFF">
                <Flex alignItems="center">
                  <Box mr={[0, "20px", "40px"]}>
                    <Text fontSize={[0, "16px", "24px"]} display="inline">
                      11月6日開放售票
                    </Text>
                  </Box>
                  <Box>
                    <IoIosArrowForward color="#000000" fontSize="24px" />
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Styled.Record>
        <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" mb="64px" textAlign="center">
          過往活動記錄
        </Text>
        <Box as="ul" width="100%" maxWidth="650px" margin="0 auto">
          {recordData.map((el, id) => (
            <Box as="li" key={id} mb="16px">
              <Text as="span" color="#FFFFFF" fontSize={[0, "14px", "20px"]} mr={[0, "16px", "36px"]}>
                {el.year}
              </Text>
              <Text as="span" color="#FFFFFF" fontSize={[0, "14px", "20px"]} fontWeight="300" lineHeight="1.5em">
                {el.text}
              </Text>
            </Box>
          ))}
        </Box>
      </Styled.Record>

      <Box padding="46px 0" textAlign="center">
        <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
          <Box width={[0, 1, "auto"]} mb={[0, "33px", 0]}>
            <Text
              color="#FFFFFF"
              textAlign={["center", "center", "left"]}
              width={[0, "100%", "auto"]}
              fontSize={[0, "36px", "46px"]}
              as="span"
              mr={[0, 0, "16px"]}
            >
              活動邀約
            </Text>
          </Box>
          <Box width={[0, 1, "auto"]} px={[0, "16px", 0]}>
            <Box
              display={["block", "block", "inline-block"]}
              bg="#FFFFFF"
              borderRadius="100px"
              padding={[0, "12px", "24px"]}
              fontWeight="700"
              fontSize={[0, "16px", "32px"]}
            >
              shinergypuppet@gmail.com
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box mb="100px">
        <Image loading="eager" src={photoImg} alt="" layout="responsive" />
      </Box>

      <Box mb="60px">
        <Text color="#FFFFFF" fontSize={[0, "36px", "46px"]} textAlign="center" mb="40px">
          我們的合作伙伴
        </Text>
        <Flex flexWrap="wrap" width="100%" maxWidth="1000px" margin="0 auto" px="16px">
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo1Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo2Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo3Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo4Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo5Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo6Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo7Img} alt="" layout="responsive" />
          </Box>
          <Box width={[1, 1 / 2, 1 / 5]}>
            <Image loading="eager" src={logo8Img} alt="" layout="responsive" />
          </Box>
        </Flex>
      </Box>
      <Footer simplify />
    </>
  )
}
