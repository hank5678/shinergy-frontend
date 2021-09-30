import React from "react"
import * as Styled from "./styled"

export default function Input({ id, label, ...props }) {
  return (
    <>
      <Styled.Label htmlFor={id} display="block" color="#000000" fontSize={[0, "16px", "22px"]} mb="32px">
        {label}
      </Styled.Label>
      <Styled.Input id={id} {...props} />
    </>
  )
}
