import styled from "styled-components"
import { Box } from "@rebass/grid"
import { position, system } from "styled-system"
const MyBox = styled(Box)`
  ${position}
  ${system({ transition: true })}
`

export default MyBox
