import styled from "styled-components"
import { FaChevronRight } from "react-icons/fa"

export const ImageWrapper = styled.div`
  position: relative;
`

export const ImageShadow = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  background: #ffffff;
`

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  font-weight: 100;
  font-size: 18px;
  box-sizing: border-box;
  padding: 12px 24px;
  cursor: pointer;
`

export const ArrowIcon = styled(FaChevronRight).attrs({ size: 20 })`
  margin-left: 6px;
`
