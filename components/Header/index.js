import React from "react"
import * as Styled from "./styled"

export default function Header() {
  return (
    <Styled.Container>
      <Styled.PrimaryWrapper>
        <Styled.Logo />
        <Styled.Menu>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              伏魔英雄帖
            </a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              週邊商品
            </a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              新勝景掌中劇團
            </a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              過往演出
            </a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              關於我們
            </a>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
              聯絡我們
            </a>
          </Styled.MenuItem>
        </Styled.Menu>
      </Styled.PrimaryWrapper>

      <Styled.SecondaryWrapper>
        <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          <Styled.InstagramIcon />
        </a>
        <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          <Styled.FacebookIcon />
        </a>
        <a href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          <Styled.YoutubeIcon />
        </a>

        <Styled.SquareBtn bg="#FFCE00" fontSize="20px" href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          立刻購票
        </Styled.SquareBtn>
        <Styled.SquareBtn bg="#FFFFFF" fontSize="16px" href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          EN
        </Styled.SquareBtn>
      </Styled.SecondaryWrapper>
    </Styled.Container>
  )
}
