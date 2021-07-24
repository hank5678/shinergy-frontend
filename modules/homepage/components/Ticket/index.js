import React from "react"
import * as Styled from "./styled"
import Image from "next/image"

export default function Ticket() {
  return (
    <Styled.Container>
      <Styled.Title>早鳥與套票優惠方案</Styled.Title>
      <Styled.CardList>
        <Styled.CardItem>
          <Styled.CardTitle>獨行俠限定價</Styled.CardTitle>
          <Styled.CardImageWrapper>
            <Image src="https://fakeimg.pl/210x210/282828/eae0d0/" alt="" width="210" height="210" layout="responsive" />
          </Styled.CardImageWrapper>
          <Styled.PriceWrapper>
            <Styled.CardOriginalPrice>$2,800</Styled.CardOriginalPrice>
            <Styled.CardSpecialPrice>$1,920</Styled.CardSpecialPrice>
          </Styled.PriceWrapper>
          <Styled.CardButton>立即搶票</Styled.CardButton>
        </Styled.CardItem>
        <Styled.CardItem>
          <Styled.CardTitle>雙俠同遊限定</Styled.CardTitle>
          <Styled.CardImageWrapper>
            <Image src="https://fakeimg.pl/210x210/282828/eae0d0/" alt="" width="210" height="210" layout="responsive" />
          </Styled.CardImageWrapper>
          <Styled.PriceWrapper>
            <Styled.CardOriginalPrice>$5,600</Styled.CardOriginalPrice>
            <Styled.CardSpecialPrice>$1,960 / 人</Styled.CardSpecialPrice>
          </Styled.PriceWrapper>
          <Styled.CardButton>立即搶票</Styled.CardButton>
        </Styled.CardItem>
        <Styled.CardItem>
          <Styled.CardTitle>四俠結盟限定</Styled.CardTitle>
          <Styled.CardImageWrapper>
            <Image src="https://fakeimg.pl/210x210/282828/eae0d0/" alt="" width="210" height="210" layout="responsive" />
          </Styled.CardImageWrapper>
          <Styled.PriceWrapper>
            <Styled.CardOriginalPrice>$11,200</Styled.CardOriginalPrice>
            <Styled.CardSpecialPrice>$1,960 / 人</Styled.CardSpecialPrice>
          </Styled.PriceWrapper>
          <Styled.CardButton>立即搶票</Styled.CardButton>
        </Styled.CardItem>
        <Styled.CardItem>
          <Styled.CardTitle>英雄聯盟10人限定</Styled.CardTitle>
          <Styled.CardImageWrapper>
            <Image src="https://fakeimg.pl/210x210/282828/eae0d0/" alt="" width="210" height="210" layout="responsive" />
          </Styled.CardImageWrapper>
          <Styled.PriceWrapper>
            <Styled.CardOriginalPrice>$28,000</Styled.CardOriginalPrice>
            <Styled.CardSpecialPrice>$1,920 / 人</Styled.CardSpecialPrice>
          </Styled.PriceWrapper>
          <Styled.CardButton>立即搶票</Styled.CardButton>
        </Styled.CardItem>
      </Styled.CardList>
    </Styled.Container>
  )
}
