import styled from "styled-components"
import { color, typography } from "styled-system"
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa"
import { MdMenu, MdClose } from "react-icons/md"

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
  @media ${({ theme }) => theme.device.xs} {
    height: 48px;
  }
  @media ${({ theme }) => theme.device.md} {
    height: 60px;
  }
`

export const PrimaryWrapper = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.xs} {
    padding-left: 16px;
  }
  @media ${({ theme }) => theme.device.md} {
    padding-left: 24px;
  }
  @media ${({ theme }) => theme.device.lg} {
    padding-left: 80px;
  }
`

export const SecondaryWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.sm} {
    /* display: none; */
  }
  @media ${({ theme }) => theme.device.md} {
    display: flex;
  }
`

export const Logo = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  box-sizing: border-box;
  padding: 6px;
  flex: 0 0 auto;
  background: #ffffff;
  align-self: flex-start;
  @media ${({ theme }) => theme.device.xs} {
    width: 80px;
    height: 80px;
  }
  @media ${({ theme }) => theme.device.md} {
    width: 120px;
    height: 120px;
  }
`

export const Menu = styled.ul`
  display: flex;
  width: 100%;
  margin: 0 36px;
  @media ${({ theme }) => theme.device.xs} {
    /* display: none; */
    display: ${({ visible }) => (visible ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 0;
  }

  @media ${({ theme }) => theme.device.md} {
    position: relative;
    width: 100%;
    height: auto;
    background-color: transparent;
    max-width: 768px;
    justify-content: space-between;
    flex-direction: row;

    display: flex;
    max-width: 470px;
    margin: 0 24px;
  }
  @media ${({ theme }) => theme.device.lg} {
    max-width: 768px;
    margin: 0 36px;
  }
`

export const MenuItem = styled.li`
  font-weight: 100;
  font-size: 16px;
  @media ${({ theme }) => theme.device.xs} {
    text-align: center;
    font-size: 24px;
    margin: 12px 0;
  }

  @media ${({ theme }) => theme.device.md} {
    font-size: 14px;
  }
  @media ${({ theme }) => theme.device.lg} {
    font-size: 16px;
  }
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

  @media ${({ theme }) => theme.device.xs} {
    height: 48px;
  }
  @media ${({ theme }) => theme.device.md} {
    height: 60px;
  }
  &.lang {
    @media ${({ theme }) => theme.device.xs} {
      display: none;
    }
    @media ${({ theme }) => theme.device.md} {
      display: flex;
    }
  }
  &.menu {
    @media ${({ theme }) => theme.device.xs} {
      display: flex;
    }
    @media ${({ theme }) => theme.device.md} {
      display: none;
    }
  }
`

export const InstagramIcon = styled(FaInstagram).attrs({ size: 24 })`
  margin: 0 9px;
  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.md} {
    display: block;
  }
`

export const FacebookIcon = styled(FaFacebookSquare).attrs({ size: 24 })`
  margin: 0 9px;
  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.md} {
    display: block;
  }
`

export const YoutubeIcon = styled(FaYoutube).attrs({ size: 24 })`
  margin: 0 18px 0 9px;
  @media ${({ theme }) => theme.device.xs} {
    display: none;
  }
  @media ${({ theme }) => theme.device.md} {
    display: block;
  }
`

export const MenuIcon = styled(MdMenu).attrs({ size: 24 })``

export const MenuCloseIcon = styled(MdClose).attrs({ size: 36 })`
  position: absolute;
  top: 16px;
  right: 16px;
  @media ${({ theme }) => theme.device.xs} {
    display: block;
  }
  @media ${({ theme }) => theme.device.md} {
    display: none;
  }
`
