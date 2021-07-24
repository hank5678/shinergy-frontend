import React from "react"
import * as Styled from "./styled"
import Image from "next/image"

const ReadMore = () => (
  <Styled.ReadMore href="http://www.google.com.tw" target="_blank" rel="noreferrer">
    Read More
    <Styled.ArrowIcon />
  </Styled.ReadMore>
)

export default function Master() {
  return (
    <Styled.Container>
      <Styled.Slogan>七團英雄好漢 X 共同聯手</Styled.Slogan>
      <Styled.Grid>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>陳錫煌掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>新西園掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>聲五洲掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>真吉祥掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>蕭孟然掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>彰藝園掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem>
          <Styled.ImageWrapper>
            <Image src="https://fakeimg.pl/400x260/282828/eae0d0/" alt="" width="400" height="260" layout="responsive" />
            <Styled.ImageText>新勝景掌中劇團</Styled.ImageText>
            <ReadMore />
          </Styled.ImageWrapper>
        </Styled.GridItem>
      </Styled.Grid>
    </Styled.Container>
  )
}
