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
                    {social.ig && (
                      <Box mx={["4px", "4px", "8px"]} display="inline-block" as="a" href={social.ig} target="_blank">
                        <FaInstagram fontSize="20px" />
                      </Box>
                    )}
                    {social.fb && (
                      <Box mx={["4px", "4px", "8px"]} display="inline-block" as="a" href={social.fb} target="_blank">
                        <FaFacebookSquare fontSize="20px" />
                      </Box>
                    )}
                    {social.yt && (
                      <Box mx={["4px", "4px", "8px"]} display="inline-block" as="a" href={social.yt} target="_blank">
                        <FaYoutube fontSize="20px" />
                      </Box>
                    )}
                    {social.official && (
                      <Box mx={["4px", "4px", "8px"]} display="inline-block" as="a" href={social.official} target="_blank">
                        <FaGlobe fontSize="20px" />
                      </Box>
                    )}
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
