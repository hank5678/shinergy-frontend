import styled from "styled-components"
import { Box } from "@rebass/grid"
import { position, border, system } from "styled-system"
const MyBox = styled(Box)`
  ${position}
  ${border}
  ${system({
    transition: true,
    outline: {
      property: "outline",
    },
    cursor: {
      property: "cursor",
    },
    transform: {
      property: "transform",
    },
  })}
`

export default MyBox
