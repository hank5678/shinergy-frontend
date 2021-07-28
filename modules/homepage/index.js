import Head from "next/head"
import Header from "components/Header"
import Masthead from "./components/Masthead"
import Character from "./components/Character"
import History from "./components/History"
import OnlyOne from "./components/OnlyOne"
import Master from "./components/Master"
import Ticket from "./components/Ticket"
import Infomation from "./components/Infomation"
import Footer from "./components/Footer"

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>新勝景掌中劇</title>
        <meta name="description" content={data.seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Masthead />
      <Character />
      <History />
      <OnlyOne />
      <Master />
      <Ticket />
      <Infomation />
      <Footer />
      {/* <Image src={bgImg} alt="" width="100" height="100" /> */}
    </>
  )
}
