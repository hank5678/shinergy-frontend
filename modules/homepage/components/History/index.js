import React from "react"
import * as Styled from "./styled"
import Image from "next/image"

export default function History() {
  return (
    <Styled.Container>
      <Styled.Slogan>還記得那年的感動嗎？</Styled.Slogan>
      <Styled.GalleryList>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#FFFFFF">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#FFFFFF">白晝之夜</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#ff006c">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#ff006c">雲林國際偶戲節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#00c4ff">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#00c4ff">桃園科技藝術節</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
        <Styled.GalleryItem>
          <Styled.ImageWrapper bg="#80ff00">
            <Image src="https://fakeimg.pl/480x320/282828/eae0d0/" alt="" width="480" height="320" layout="responsive" />
            <Styled.ImageText color="#80ff00">台灣文化博覽會</Styled.ImageText>
          </Styled.ImageWrapper>
        </Styled.GalleryItem>
      </Styled.GalleryList>
    </Styled.Container>
  )
}
