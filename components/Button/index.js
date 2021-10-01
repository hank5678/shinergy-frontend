import React from 'react'
import * as Styled from "./styled"

export default function Button({children, ...props}) {
  return (
    <Styled.Container {...props}>
      {children}
    </Styled.Container>
  )
}
