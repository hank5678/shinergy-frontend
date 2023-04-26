import React from "react"
import * as Styled from "./styled"
import Image from "next/image"
// import coverImg from "./images/cover.jpg"
import Box from "components/Box"
import Text from "components/Text"
import { Flex } from "@rebass/grid"
// import pattern01 from "./images/pattern01.png"
// import pattern02 from "./images/pattern02.png"
// import pattern03 from "./images/pattern03.png"
// import pattern04 from "./images/pattern04.png"
import manImg from "./images/man.png"
import womanImg from "./images/woman.png"
import logoImg from "./images/logo.png"
import { IoIosArrowForward } from "react-icons/io"
import Cover from "./components/Cover"
import Frame from "components/Frame"
import showListImg from "./images/showlist.png"
import seatImg from "./images/seat.png"
import ticketsImg from "./images/tickets.png"
import bannerImg from "./images/banner.jpg"

import showListMobileImg1 from "./images/showlist1-m.png"
import showListMobileImg2 from "./images/showlist2-m.png"
import showListMobileImg3 from "./images/showlist3-m.png"

import ticketsMobileImg1 from "./images/tickets1-m.png"
import ticketsMobileImg2 from "./images/tickets2-m.png"
import ticketsMobileImg3 from "./images/tickets3-m.png"
import ticketsMobileImg4 from "./images/tickets4-m.png"
import ticketsMobileImg5 from "./images/tickets5-m.png"

export default function Ticket() {
  // return (
  //   <Styled.Container>
  //     <Image src={bannerImg} alt="" loading="eager" layout="responsive" />
  //   </Styled.Container>
  // )
  return (
    <Styled.Container>
      {/* <Image loading="eager" src={coverImg} alt="" width="2732" height="1408" layout="responsive" /> */}
      <Cover />
      <Image src={bannerImg} alt="" loading="eager" layout="responsive" />
    </Styled.Container>
  )
}
