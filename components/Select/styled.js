import styled from "styled-components"
import { color, space, layout, typography } from "styled-system"

export const Label = styled.label`
  ${space}
  ${layout}
  ${color}
  ${typography}
`

export const Select = styled.select`
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({color}) => (color)};
  font-size: 24px;
  color: ${({color}) => (color)};
  margin-bottom: 32px;
  padding-bottom: 16px;
`

export const ErrorMessage = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  color: #FF8484;
`
