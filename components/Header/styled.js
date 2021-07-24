import styled from "styled-components"
import { color, typography } from "styled-system"
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa"

export const Container = styled.header`
  display: flex;
  align-items: stretch;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #222222;
  color: #ffffff;
  z-index: 1000;
  /* background: ${({ theme }) => theme.colors.blue}; */
`

export const PrimaryWrapper = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding-left: 80px;
  display: flex;
  align-items: center;
`

export const SecondaryWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: 125px;
  height: 120px;
  background: #ffffff;
  align-self: flex-start;
`

export const Menu = styled.ul`
  display: flex;
  margin-left: 36px;
`

export const MenuItem = styled.li`
  margin: 0 32px;
  font-weight: 100;
  font-size: 16px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

export const SquareBtn = styled.a`
  padding: 0 20px;
  box-sizing: border-box;
  align-self: stretch;
  height: 100%;
  color: #000000;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${color}
  ${typography}
`

export const InstagramIcon = styled(FaInstagram).attrs({ size: 24 })`
  margin: 0 9px;
`

export const FacebookIcon = styled(FaFacebookSquare).attrs({ size: 24 })`
  margin: 0 9px;
`

export const YoutubeIcon = styled(FaYoutube).attrs({ size: 24 })`
  margin: 0 18px 0 9px;
`
