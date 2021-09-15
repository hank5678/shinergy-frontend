import React from "react"
import * as Styled from "./styled"
import Text from "components/Text"
import Box from "components/Box"
import { FaInstagram, FaFacebookSquare, FaYoutube } from "react-icons/fa"
import { MdClose } from "react-icons/md"

export default function Modal({ visible, onClose, title, children }) {
  if (visible) {
    return (
      <Styled.Container>
        <Styled.Bg onClick={onClose} />
        <Styled.Wrapper>
          <Box position="absolute" top="-36px" right="0" color="#CECECE" onClick={onClose}>
            <MdClose fontSize="28px" style={{ cursor: "pointer" }} />
          </Box>
          <Styled.Frame>
            <Styled.Content>
              <Box display="flex" flexDirection="column" height="100%">
                <Box flex="0 0 auto" width="100%" display="flex" justifyContent="space-between" alignItems="center" mb="24px">
                  <Box>
                    <Text fontSize={["18px", "18px", "36px"]} fontWeight="700" ml={["0px", "0px", "1em"]}>
                      {title}
                    </Text>
                  </Box>
                  <Box display={["none", "none", "block"]}>
                    <Box mx={["4px", "4px", "8px"]} display="inline-block">
                      <FaInstagram fontSize="20px" />
                    </Box>
                    <Box mx={["4px", "4px", "8px"]} display="inline-block">
                      <FaFacebookSquare fontSize="20px" />
                    </Box>
                    <Box mx={["4px", "4px", "8px"]} display="inline-block">
                      <FaYoutube fontSize="20px" />
                    </Box>
                  </Box>
                </Box>

                <Box overflow="auto" flex="1" pb="48px">
                  {children}
                </Box>

                <Box flex="0 0 auto" py="12px">
                  <Text textAlign="center" fontSize={["16px", "16px", "20px"]} onClick={onClose} style={{ cursor: "pointer" }}>
                    回到上頁
                  </Text>
                </Box>
              </Box>
            </Styled.Content>
          </Styled.Frame>
        </Styled.Wrapper>
      </Styled.Container>
    )
  } else {
    return null
  }
}
