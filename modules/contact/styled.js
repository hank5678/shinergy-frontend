import styled from "styled-components"
import { color, space, layout, typography } from "styled-system"

export const Form = styled.form`
  ${space}
  ${layout}
`

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
  border-bottom: 1px solid #ffffff;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  padding-bottom: 16px;
`

export const Select = styled.select`
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  padding-bottom: 16px;
`

export const Option = styled.option`
  color: #000000;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid #ffffff;
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  resize: none;
  height: 200px;
  overflow: hidden;
`

export const Button = styled.input.attrs({type: "submit"})`
  display: block;
  width: 100%;
  padding: 16px;
  background: #ffffff;
  border: none;
  outline: none;
  font-size: 26px;
  font-weight: 700;
`
