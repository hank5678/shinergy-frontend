import React from "react"
import * as Styled from "./styled"
import { Flex } from "@rebass/grid"

export default function Character() {
  return (
    <Styled.Container>
      <Styled.Slogan>紅羅剎 x 幽幻女 x 鷹爪王 x 羅燕飛 x 白袍少爺 x 六羽逍遙</Styled.Slogan>
      <Flex>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
        <Styled.CharacterBox flex={1}></Styled.CharacterBox>
      </Flex>
    </Styled.Container>
  )
}
