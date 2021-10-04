import React from "react"
import Header from "components/Header"
import Flex from "components/Flex"
import Box from "components/Box"
import Image from "next/image"
import Footer from "components/Footer"
import Text from "components/Text"
import * as Styled from "./styled"

import photo202001 from "./images/2020-1.jpg"
import photo202002 from "./images/2020-2.jpg"
import photo202003 from "./images/2020-3.jpg"
import photo202004 from "./images/2020-4.jpg"
import photo201901 from "./images/2019-1.jpg"
import photo201902 from "./images/2019-2.jpg"
import photo201903 from "./images/2019-3.jpg"
import photo201801 from "./images/2018-1.jpg"

const Item = ({ year, name, img, ...props }) => (
  <Box width={[1, 1, 1 / 2]} position="relative" mb="50px" mx="10px" {...props}>
    <Image loading="eager" src={img} alt="" layout="responsive" />
    <Flex position="absolute" top="0" left="0" alignItems="center">
      <Text fontSize={[0, "14px", "20px"]} bg="#FFFFFF" padding={[0, "8px", "12px"]} display="inline-block" mr="8px">
        {year}
      </Text>
      <Text color="#FFFFFF" fontSize={[0, "18px", "24px"]} as="span">
        {name}
      </Text>
    </Flex>
  </Box>
)

export default function History() {
  return (
    <>
      <Header />
      <Box pt={[0, "90px", "150px"]} mb="32px">
        <Text fontSize={[0, "36px", "46px"]} color="#FFFFFF" textAlign="center" mb="32px">
          過往演出
        </Text>
      </Box>
      <Styled.Wrapper>
        <Flex
          flexDirection="column"
          flexWrap="wrap"
          height={["auto", "auto", "2100px"]}
          width="100%"
          maxWidth="1100px"
          margin="60px auto 0 auto"
          position="relative"
        >
          <Item order={[0, 1, 0]} year="2020" name="雲林偶戲節" img={photo202001} />
          <Item order={[0, 3, 0]} year="2020" name="國泰人壽商演" img={photo202003} />
          <Item order={[0, 6, 0]} year="2019" name="富邦人壽商演" img={photo201901} />
          <Item order={[0, 7, 0]} year="2019" name="文博會" img={photo201903} />
          <Item order={[0, 8, 0]} year="2018" name="白晝之夜" img={photo201801} />
          <Item order={[0, 2, 0]} year="2020" name="澎湖文澳祖師爺元宵乞龜點燈儀式" img={photo202002} />
          <Item order={[0, 4, 0]} year="2020" name="白晝之夜" img={photo202004} />
          <Item order={[0, 5, 0]} year="2019" name="美加海外巡演" img={photo201902} />
          <Box
            order={[0, 9, 0]}
            position={["static", "static", "absolute"]}
            bottom="70px"
            right="0"
            px={[0, "16px", 0]}
            width="100%"
            height={[0, "140px", "auto"]}
          >
            <Text fontSize={[0, "38px", "64px"]} color="#FFFFFF" textAlign="right" fontStyle="italic" fontWeight="700">
              To be <br /> CONTINUED...
            </Text>
          </Box>
        </Flex>
      </Styled.Wrapper>
      <Footer simplify />
    </>
  )
}
