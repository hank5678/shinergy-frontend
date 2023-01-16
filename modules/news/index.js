import React, { useMemo } from "react"
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
import dayjs from "dayjs"

export default function News({ data, news }) {
  const videoURL = useMemo(() => {
    return data?.video.url ? data?.video.url : ""
  }, [data])

  const record = useMemo(() => {
    return data?.record ? data?.record : []
  }, [data])

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

      {news && (
        <Box width="100%" maxWidth="1100px" margin="0 auto 100px auto">
          <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" mb="40px" textAlign={["center", "center", "left"]}>
            {news.title}
          </Text>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1 / 2]} pr={[0, 0, "14px"]} mb={[0, "20px", 0]}>
              <Image loading="eager" src={news.image.url} alt="" width={news.image.width} height={news.image.height} layout="responsive" />
            </Box>
            <Box width={[1, 1, 1 / 2]} pl={[0, 0, "14px"]}>
              <Text fontSize={[0, "16px", "24px"]} textAlign={["center", "center", "left"]} color="#FFFFFF" mb="16px">
                {dayjs(news.startDate).format("YYYY/MM/DD")} - {dayjs(news.endDate).format("YYYY/MM/DD")}
              </Text>
              <Text fontSize={[0, "28px", "48px"]} textAlign={["center", "center", "left"]} color="#FFFFFF" fontWeight="700" mb="24px">
                {news.caption}
              </Text>
              <Text
                fontSize={[0, "14px", "20px"]}
                px={[0, "16px", 0]}
                color="#FFFFFF"
                fontWeight="300"
                lineHeight="1.8em"
                mb={[0, "30px", "60px"]}
                whiteSpace="pre-wrap"
              >
                {news.content}
              </Text>
              <Box textAlign={["center", "center", "left"]} as="a" href={news.btnLink} target="_blank">
                <Box display="inline-block" padding={[0, "10px", "20px"]} bg="#FFFFFF">
                  <Flex alignItems="center">
                    <Box mr={[0, "20px", "40px"]}>
                      <Text fontSize={[0, "16px", "24px"]} display="inline">
                        {news.btnText}
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
      )}

      {record.length > 0 && (
        <Styled.Record>
          <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" mb="64px" textAlign="center">
            過往活動記錄
          </Text>
          <Box as="ul" width="100%" maxWidth="650px" margin="0 auto">
            {record.map((el, id) => (
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
      )}

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
