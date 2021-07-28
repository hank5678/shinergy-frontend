import styled from "styled-components"
import { typography, space } from "styled-system"

const Text = styled.p(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  typography,
  space
)

export default Text
