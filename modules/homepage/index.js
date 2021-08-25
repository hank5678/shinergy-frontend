import Header from "components/Header"
import Masthead from "./components/Masthead"
import Character from "./components/Character"
import History from "./components/History"
import OnlyOne from "./components/OnlyOne"
import Master from "./components/Master"
import Ticket from "./components/Ticket"
import Footer from "components/Footer"
import { Box } from "rebass"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222222;
  }
`
export default function Home({ data }) {
  return (
    <Box overflow="hidden">
      <GlobalStyle />
      <Header />
      <Masthead />
      <Character />
      <History />
      <OnlyOne />
      <Master />
      <Ticket />
      <Footer />
    </Box>
  )
}
