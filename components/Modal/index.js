import React from "react"
import * as Styled from "./styled"
import { MdClose } from "react-icons/md"

export default function Modal({ visible, onClose, title, social, fullHeight, width, children }) {
  if (visible) {
    return (
      <Styled.Container>
        <Styled.Bg onClick={onClose} />
        <Styled.Wrapper>
          <Styled.Top width={width}>
            <MdClose fontSize="32px" color="#FFFFFF" onClick={onClose} style={{ cursor: "pointer" }} />
          </Styled.Top>
          <Styled.Content width={width} fullHeight={fullHeight}>
            {children}
          </Styled.Content>
        </Styled.Wrapper>
      </Styled.Container>
    )
  } else {
    return null
  }
}
