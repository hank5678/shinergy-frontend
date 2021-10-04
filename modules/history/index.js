import React from "react"
import Header from "components/Header"
import Flex from "components/Flex"
import Box from "components/Box"
import Image from "next/image"
import Footer from "components/Footer"
import Text from "components/Text"

import photo202001 from "./images/2020-1.png"
import photo202002 from "./images/2020-2.png"
import photo202003 from "./images/2020-3.png"
import photo202004 from "./images/2020-4.png"

import photo201901 from "./images/2019-1.png"
import photo201902 from "./images/2019-2.png"
import photo201903 from "./images/2019-3.png"

import photo201801 from "./images/2018-1.png"

const Item = ({ year, name, img }) => (
  <Box width={1 / 2} position="relative" mb="50px" mx="10px">
    <Image loading="eager" src={img} alt="" layout="responsive" />
    <Flex position="absolute" top="0" left="0" alignItems="center">
      <Text fontSize="20px" bg="#FFFFFF" padding="12px" display="inline-block" mr="8px">
        {year}
      </Text>
      <Text color="#FFFFFF" fontSize="24px" as="span">
        {name}
      </Text>
    </Flex>
  </Box>
)

export default function History() {
  return (
    <>
      <Header />
      <Box pt="150px" mb="32px">
        <Text fontSize="46px" color="#FFFFFF" textAlign="center" mb="32px">
          過往演出
        </Text>
      </Box>
      <Flex flexDirection="column" flexWrap="wrap" height="2100px" width="100%" maxWidth="1100px" margin="60px auto" position="relative">
        <Item year="2020" name="雲林偶戲節" img={photo202001} />
        <Item year="2020" name="國泰人壽商演" img={photo202003} />
        <Item year="2019" name="富邦人壽商演" img={photo201901} />
        <Item year="2019" name="文博會" img={photo201903} />
        <Item year="2018" name="白晝之夜" img={photo201801} />
        <Item year="2020" name="澎湖文澳祖師爺元宵乞龜點燈儀式" img={photo202002} />
        <Item year="2020" name="白晝之夜" img={photo202004} />
        <Item year="2019" name="美加海外巡演" img={photo201902} />
        <Box position="absolute" bottom="70px" right="0">
          <Text fontSize="64px" color="#FFFFFF" textAlign="right" fontStyle="italic" fontWeight="700">
            To be <br /> CONTINUED...
          </Text>
        </Box>
      </Flex>
      <Footer simplify />
    </>
  )
}
