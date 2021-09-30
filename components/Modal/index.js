import React from "react"
import * as Styled from "./styled"
import Text from "components/Text"
import Box from "components/Box"
import { FaInstagram, FaFacebookSquare, FaYoutube, FaGlobe } from "react-icons/fa"
import { MdClose } from "react-icons/md"

export default function Modal({ visible, onClose, title, social, children }) {
  if (visible) {
    return (
      <Styled.Container>
        <Styled.Bg onClick={onClose} />
        <Styled.Wrapper>
          <Box position="absolute" top="-36px" right="0" color="#CECECE" onClick={onClose}>
            <MdClose fontSize="28px" style={{ cursor: "pointer" }} />
          </Box>

          <Styled.Content>{children}</Styled.Content>
        </Styled.Wrapper>
      </Styled.Container>
    )
  } else {
    return null
  }
}
