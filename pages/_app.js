import { ThemeProvider } from "styled-components"
import theme from "config/theme"
import GlobalStyle from "components/GlobalStyle"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
