import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import { Flex, Box } from "@rebass/grid"

export default function OnlyOne() {
  return (
    <Styled.Container>
      <Flex>
        <Box width={1 / 2}>
          <Image src="https://fakeimg.pl/680x450/" alt="" width="680" height="450" layout="responsive" />
        </Box>
        <Box width={1 / 2}>
          <Image src="https://fakeimg.pl/680x450/282828/eae0d0/" alt="" width="680" height="450" layout="responsive" />
        </Box>
      </Flex>
      <Styled.Slogan>
        今年唯一一場
        <br />
        全新劇本
        <br />
        視覺 X 聽覺
      </Styled.Slogan>
    </Styled.Container>
  )
}
