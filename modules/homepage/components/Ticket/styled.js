import styled from "styled-components"
import frameImg from "./images/frame.svg"

export const Container = styled.section`
  box-sizing: border-box;
  background-color: #ffffff;
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 100;
  letter-spacing: 0.1em;
  text-align: center;
  color: #ffffff;
  margin-bottom: 32px;
`

export const CardTitle = styled.p`
  font-size: 24px;
  color: #222222;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 24px;
  @media ${({ theme }) => theme.device.md} {
    font-size: 18px;
  }
  @media ${({ theme }) => theme.device.lg} {
    font-size: 24px;
  }
`

export const CardImageWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-family: Arial;
`

export const CardOriginalPrice = styled.span`
  font-size: 20px;
  font-weight: 100;
  text-decoration: line-through;
  margin-right: 6px;
  @media ${({ theme }) => theme.device.md} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.device.lg} {
    font-size: 20px;
  }
`
export const CardSpecialPrice = styled.span`
  font-size: 28px;
  font-weight: 100;
  color: #d43e23;
  @media ${({ theme }) => theme.device.md} {
    font-size: 20px;
  }
  @media ${({ theme }) => theme.device.lg} {
    font-size: 28px;
  }
`

export const CardPrice = styled.span`
  font-size: 20px;
  text-decoration: line-through;
`

export const CardButton = styled.a`
  display: inline-block;
  padding: 10px 28px;
  background-color: #ff0058;
  font-size: 22px;
  font-weight: 100;
  color: #ffffff;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

export const MainButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 14px 36px;
  background-color: #ff0058;
  font-size: 22px;
  font-weight: 100;
  color: #ffffff;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`

export const Frame = styled.div`
  position: relative;
  width: 100%;
  margin: 32px auto 64px auto;
  max-width: 1200px;
  background-image: url(${frameImg.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;

  &::before {
    content: "";
    display: block;
    padding-top: 60%;
  }
`
