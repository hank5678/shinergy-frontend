import styled from "styled-components"
import { color, space, layout, typography } from "styled-system"

export const Label = styled.label`
  ${space}
  ${layout}
  ${color}
  ${typography}
`

export const Input = styled.input`
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #000000;
  font-size: 24px;
  color: #000000;
  margin-bottom: 32px;
  padding-bottom: 16px;
`
