import React from "react"
import * as Styled from "./styled"
import Box from "components/Box"
import Text from "components/Text"
import logoImg from "./logo.png"
import Image from "next/image"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"

export default function Masthead() {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Text color="#FFFFFF" fontSize="20px" textAlign="center" mb="24px">
          一年一度．限定展出
        </Text>
        <Image src={logoImg} alt="" width="880" height="420" layout="responsive" />
        <Text color="#FFFFFF" fontSize="32px" textAlign="center" mt="24px" fontWeight="700">
          眾團聯手．全新劇本設計．神秘嘉賓
        </Text>
        <Box display="flex" flexDirection="column" alignItems="center" mt="24px">
          <IoIosArrowDown color="#FFFFFF" fontSize="24px" style={{ marginBottom: -12 }} />
          <IoIosArrowDown color="#FFFFFF" fontSize="24px" />
        </Box>
      </Styled.Wrapper>
      <Box
        as="a"
        display={["none", "none", "block"]}
        href="http://www.google.com.tw"
        target="_blank"
        position="absolute"
        bottom="100px"
        right="0px"
        bg="#FF0058"
        px="9px"
        py="14px"
      >
        <Text fontSize="18px" color="#FFFFFF" mb="8px">
          限定早鳥發售中
        </Text>
        <Box display="flex" alignItems="center">
          <Text fontSize="26px" color="#FFFFFF">
            立即搶票
          </Text>
          <IoIosArrowForward fontSize="24px" color="#FFFFFF" />
        </Box>
      </Box>
    </Styled.Container>
  )
}
