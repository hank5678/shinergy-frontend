import { ThemeProvider } from "styled-components"
import theme from "config/theme"
import GlobalStyle from "components/GlobalStyle"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>新勝景掌中劇</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
