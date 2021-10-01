import React, { forwardRef } from "react"
import * as Styled from "./styled"
import Box from "components/Box"

export default forwardRef(function Input({ id, label, error, color = "#000000", ...props }, ref) {
  return (
    <Box position="relative">
      <Styled.Label htmlFor={id} display="block" color={error ? "#B70000" : color} fontSize={[0, "16px", "22px"]} mb="32px">
        {label}
      </Styled.Label>
      <Styled.TextArea ref={ref} id={id} color={color} {...props} />
      {error && <Styled.ErrorMessage>{error.message ? error.message : "輸入錯誤"}</Styled.ErrorMessage>}
    </Box>
  )
})
