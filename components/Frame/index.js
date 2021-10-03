import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
import top from "./top.svg"
import bottom from "./bottom.svg"
export default function Frame({ height, children }) {
  return (
    <Styled.Container>
      <Image loading="eager" src={top} alt="" layout="responsive" />
      <Styled.Middle pt={height}></Styled.Middle>
      <Image loading="eager" src={bottom} alt="" layout="responsive" />
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  )
}
