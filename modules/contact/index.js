import Head from "next/head"
import Header from "components/Header"
import Footer from "components/Footer"
import { Flex, Box, Text } from "rebass"
import * as Styled from "./styled"
// import Image from "next/image"
// import exampleImg from "./images/example.jpg"

export default function Contact({ data }) {
  return (
    <>
      <Head>
        <title>新勝景掌中劇</title>
        <meta name="description" content={data.seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box mt="64px" mb="64px">
        <Text fontSize="46px" color="#FFFFFF" textAlign="center" mb="24px">
          聯絡我們
        </Text>
        <Text fontSize="24px" color="#FFFFFF" textAlign="center" mb="64px">
          聯絡我們 若有合作商演或相關諮詢，都非常歡迎與我們聯繫!
        </Text>
        <Styled.Form maxWidth="400px" margin="0 auto" pb="24px">
          <Styled.Label htmlFor="name" display="block" color="#FFFFFF" fontSize="22px" mb="32px">
            您的姓名*
          </Styled.Label>

          <Styled.Input id="name" />
          <Styled.Label htmlFor="tel" display="block" color="#FFFFFF" fontSize="22px" mb="32px">
            聯絡電話*
          </Styled.Label>

          <Styled.Input id="tel" />
          <Styled.Label htmlFor="email" display="block" color="#FFFFFF" fontSize="22px" mb="32px">
            您的E-Mail*
          </Styled.Label>
          <Styled.Input id="email" />

          <Styled.Label htmlFor="teamwork" display="block" color="#FFFFFF" fontSize="22px" mb="32px">
            您希望與我們合作的項目？*
          </Styled.Label>
          <Styled.Select id="teamwork">
            <Styled.Option value=""></Styled.Option>
            <Styled.Option value="媒體採訪">媒體採訪</Styled.Option>
          </Styled.Select>

          <Styled.Label htmlFor="talk" display="block" color="#FFFFFF" fontSize="22px" mb="32px">
            其他您想與我們說的話
          </Styled.Label>
          <Styled.TextArea id="talk" />
          <Styled.Button>送出</Styled.Button>
        </Styled.Form>
      </Box>
      <Footer simplify />
    </>
  )
}
