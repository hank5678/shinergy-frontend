import React, { useState } from "react"
import * as Styled from "./styled"
import Link from "next/link"
import Image from "next/image"
import logoImg from "./logo.svg"

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <Styled.Container>
      <Styled.PrimaryWrapper>
        <Styled.Logo>
          <Image loading="eager" src={logoImg} alt="" width="103" height="93" layout="responsive" />
        </Styled.Logo>
        <Styled.Menu visible={menuVisible}>
          <Styled.MenuItem>
            <Link href="/">伏魔英雄帖</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/merchandise">週邊商品</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/news">最新消息</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/history">過往演出</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/about">關於新勝景</Link>
          </Styled.MenuItem>
          <Styled.MenuItem>
            <Link href="/contact">聯絡我們</Link>
          </Styled.MenuItem>
          <Styled.MenuCloseIcon
            onClick={() => {
              setMenuVisible(false)
            }}
          />
        </Styled.Menu>
      </Styled.PrimaryWrapper>

      <Styled.SecondaryWrapper>
        <a href="https://www.instagram.com/shinergypuppet/" target="_blank" rel="noreferrer">
          <Styled.InstagramIcon />
        </a>
        <a href="https://www.facebook.com/shinergypuppetshow/" target="_blank" rel="noreferrer">
          <Styled.FacebookIcon />
        </a>
        <a href="https://www.youtube.com/channel/UC978fGHTdoAm4kOcSwDaiiA" target="_blank" rel="noreferrer">
          <Styled.YoutubeIcon />
        </a>

        <Styled.SquareBtn bg="#FFCE00" fontSize="20px" display={["flex", "none", "flex"]}>
          11月6日伏魔英雄帖開放售票
        </Styled.SquareBtn>
        {/* <Styled.SquareBtn className="lang" bg="#FFFFFF" fontSize="16px" href="http://www.google.com.tw" target="_blank" rel="noreferrer">
          EN
        </Styled.SquareBtn> */}
      </Styled.SecondaryWrapper>
      <Styled.SquareBtn
        className="menu"
        bg="#FFFFFF"
        fontSize="16px"
        onClick={() => {
          setMenuVisible(true)
        }}
      >
        <Styled.MenuIcon />
      </Styled.SquareBtn>
    </Styled.Container>
  )
}
