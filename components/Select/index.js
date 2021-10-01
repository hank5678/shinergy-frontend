import React, { forwardRef } from 'react'
import Box from "components/Box"
import * as Styled from "./styled"

export default forwardRef(function Select({id, label, error, color = "#000000", children, ...props}, ref) {
  return (
    <Box position="relative">
      <Styled.Label htmlFor={id} display="block" color={error ? "#B70000" : color} fontSize={[0, "16px", "22px"]} mb="32px">
        {label}
      </Styled.Label>
      <Styled.Select ref={ref} id={id} color={color} {...props}>
        {children}
      </Styled.Select>
      {error && <Styled.ErrorMessage>{error.message ? error.message : "輸入錯誤"}</Styled.ErrorMessage>}
    </Box>
  )
})
