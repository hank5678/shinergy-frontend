import Head from "next/head"
import Header from "components/Header"
import Footer from "components/Footer"
import { Flex, Box, Text } from "rebass"
import * as Styled from "./styled"
import Image from "next/image"
import exampleImg from "./images/example.jpg"

const Button = ({ children }) => (
  <Styled.Button href="http://www.google.com.tw" target="_blank" rel="noreferrer">
    {children}
    <Styled.ArrowIcon />
  </Styled.Button>
)

const Commodity = ({ name, oldPrize, newPrize }) => (
  <Box width={1 / 4} padding="25px">
    <Styled.ImageWrapper>
      <Styled.ImageShadow />
      <Image src={exampleImg} alt="" width="500" height="500" layout="responsive" />
    </Styled.ImageWrapper>
    <Text fontSize="24px" color="#FFFFFF" textAlign="center" mt="32px" mb="24px">
      {name}
    </Text>
    <Box textAlign="center" mb="24px">
      <Text
        as="span"
        fontSize="16px"
        fontWeight="100"
        color="#FFFFFF"
        textAlign="center"
        verticalAlign="middle"
        style={{ textDecoration: "line-through", marginRight: 16 }}
      >
        ${oldPrize}
      </Text>
      <Text as="span" fontSize="32px" fontWeight="700" color="#FFFFFF" textAlign="center" verticalAlign="middle">
        ${newPrize}
      </Text>
    </Box>
    <Box textAlign="center">
      <Button>我要訂購</Button>
    </Box>
  </Box>
)

export default function Merchandise({ data }) {
  return (
    <>
      <Head>
        <title>新勝景掌中劇</title>
        <meta name="description" content={data.seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box pt="64px" mb="32px">
        <Text fontSize="46px" color="#FFFFFF" textAlign="center" mb="32px">
          限量周邊商品
        </Text>
        <Text fontSize="24px" color="#FFFFFF" textAlign="center" mb="64px">
          只在2021年伏魔英雄帖．再現白光劍
        </Text>

        <Flex flexWrap="wrap" maxWidth="1200px" margin="0 auto">
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
          <Commodity name="杯墊" oldPrize="120" newPrize="99" />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
