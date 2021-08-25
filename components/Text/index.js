import styled from "styled-components"
import { typography, space, color, position, shadow } from "styled-system"

const Text = styled.p(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  typography,
  space,
  color,
  position,
  shadow
)

export default Text
