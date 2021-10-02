import React, { useState } from "react"
import * as Styled from "./styled"
import Image from "next/image"
import img01 from "./images/01.jpg"
import img02 from "./images/02.jpg"
import img03 from "./images/03.jpg"
import img04 from "./images/04.jpg"
import img05 from "./images/05.jpg"
import img06 from "./images/06.jpg"
import img07 from "./images/07.jpg"
import img08 from "./images/08.jpg"
import img09 from "./images/09.jpg"
import img10 from "./images/10.jpg"
import img11 from "./images/11.jpg"
import img12 from "./images/12.jpg"
import img13 from "./images/13.jpg"
import img14 from "./images/14.jpg"
import bg from "./images/bg.svg"
import { Flex } from "rebass"
import Box from "components/Box"
import Text from "components/Text"
import { useInView } from "react-intersection-observer"

import Modal from "./components/Modal"
import photo01 from "./images/photos/01.jpg"
import photo02 from "./images/photos/02.png"
import photo03 from "./images/photos/03.png"
import photo04 from "./images/photos/04.png"
import photo05 from "./images/photos/05.png"
import photo06 from "./images/photos/06.png"
import photo07 from "./images/photos/07.png"
import photo08 from "./images/photos/08.png"
import photo09 from "./images/photos/09.png"
import photo10 from "./images/photos/10.png"
import photo11 from "./images/photos/11.png"
import photo12 from "./images/photos/12.png"
import photo13 from "./images/photos/13.png"
import photo14 from "./images/photos/14.png"
import photo15 from "./images/photos/15.png"
import photo16 from "./images/photos/16.jpg"
import photo17 from "./images/photos/17.jpg"
import photo18 from "./images/photos/18.jpg"
import photo19 from "./images/photos/19.jpg"
import photo20 from "./images/photos/20.png"

const gridVariants = {
  initial: {},
  inView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const gridItemVariants = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // ease: "backOut",
    },
  },
}

const ReadMore = ({ onClick }) => (
  <Styled.ReadMore onClick={onClick} style={{ cursor: "pointer" }}>
    Read More
    <Styled.ArrowIcon />
  </Styled.ReadMore>
)

const data = [
  {
    title: "陳錫煌掌中劇團 台北",
    social: {
      official: "",
      fb: "https://www.facebook.com/chenhsihuangpuppet",
      ig: "",
      yt: "https://www.youtube.com/channel/UCA11Ve0-6y2qTy45hlWzWnQ",
    },
    content: (
      <>
        <Image loading="eager" src={photo20} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          創團者陳錫煌為李天祿的長子，自小在李天祿的「亦宛然」學戲。1953年組「新宛然」布袋戲團，1970年解散，回亦宛然當二手演師。1984年與其弟李傳燦、林金鍊開始到板橋莒光國小傳授布袋戲。2007年獲中華民國資深青商總會第十四屆「全球中華文化藝術薪傳獎」。2009年成立「陳錫煌傳統掌中劇團」；同年獲國家指定頒給「重要傳統藝術保存者」證書。2010年獲臺北市傳統藝術藝師獎；2011年再獲國家指定「重要文化資產保存技術及其保存者」殊榮。
          2018年因為《紅盒子》紀錄片受到各界關注，師傅將一身技藝傳授予來自各地的藝生，其中《飛劍奇俠》為非常有代表性的經典劇目，而本次演出也將以劇情中的白光劍為主軸，透過弟子們的演出，刻畫出精彩出奇的武俠世界。
        </Text>
        <Image loading="eager" src={photo01} alt="" width="846" height="517" layout="responsive" />
      </>
    ),
  },
  {
    title: "新西園掌中劇團 新北",
    social: {
      official: "https://cs899161.weebly.com/",
      fb: "",
      ig: "",
      yt: "https://www.youtube.com/channel/UCFtJv9QnY-ICjytTOgCLRyw",
    },
    content: (
      <>
        <Image loading="eager" src={photo04} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          「新西園掌中劇團」出自於百年名團「小西園掌中劇團」，現任團主為許正宗老師，認識許老師的時候，是在台北大稻埕戲苑演出新西園的經典劇目《大俠鷹爪王》，而戲中讓人印象最為深刻之處，莫過於許老師走出彩樓戲台前，流利地將戲偶拋進彩樓小窗內，精準無比，這個技法稱為「跳窗」。
          <br />
          「西園班」是台灣布袋戲界著名的老招牌，而許正宗老師俐落的身手師承父親許欽以及叔父許王，都是鼎鼎大名的演師，阿宗老師集結大師技藝於一身，表演時如賦予戲偶生命，尤其在武戲上招式新奇，更有戲迷給了老師一個響亮的外號，轟動武林的「魔術手」。
          <br />
          別看老師輩分雖長，實際跟許老師相處，會發現老師除了談吐逗趣可愛，還是一個相當樂於接受新思維團主，老師的加入將讓新舊之間產生碰撞，讓我們一起期待傳統戲偶在光雕舞台上的呈現。
        </Text>
        <Image loading="eager" src={photo05} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "聲五洲掌中劇團 台中",
    social: {
      official: "",
      fb: "https://www.facebook.com/oscar0923353481",
      ig: "",
      yt: "https://www.youtube.com/user/swzpuppet",
    },
    content: (
      <>
        <Image loading="eager" src={photo18} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          台中聲五洲掌中劇團1965年創立於台中市，由現任團長王英峻的父親王金匙所創立，曾經巡演各國足跡遍布亞洲、歐洲、美洲、澳洲，演出經驗豐富，甚至電視劇、兒童劇、現場金光戲都有所作品，發展相當多元。
          王董因為從小喜愛電視布袋戲，便自創文武生「六羽逍遙」，憑藉機智掌握先機，將對手唬的團團轉，又能在危急之時發揮畢生絕學，能文能武，如此角色，是王英峻自己心目中的偶像，在這次表演當中，王老師將擔任口白主演，讓我們一起期待在老師領銜下的精采表演!
        </Text>
        <Image loading="eager" src={photo19} alt="" width="854" height="408" layout="responsive" />
      </>
    ),
  },
  {
    title: "五洲真吉祥掌中劇團 新竹",
    social: {
      official: "",
      fb: "https://www.facebook.com/hashtag/%E4%BA%94%E6%B4%B2%E7%9C%9F%E5%90%89%E7%A5%A5%E6%8E%8C%E4%B8%AD%E5%8A%87%E5%9C%98?source=feed_text&epa=HASHTAG",
      ig: "",
      yt: "",
    },
    content: (
      <>
        <Image loading="eager" src={photo06} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          五洲真吉祥掌中劇團來自新竹，目前團主為楊志豪老師，他最拿手的正是電視木偶，精緻的操作技術加上賣力的神情，當我們站在後台看著他的表演，讓人體驗到什麼叫做人偶合一。我們拜訪志豪時，他正在位於高美濕地朝天宮演出扮仙戲，恭敬地舉起戲偶，每一個動作與身段，毫不馬虎。相處以來，我們漸漸理解志豪是一個耿直的漢子，通常他為人低調，不喜出風頭，但是遇到不義之事肯定會挺身而出，就像是他掌上講求道義的武生一般，本次表演他將擔任電視木偶劇的操偶導演，讓我們一起期待他的表現!
        </Text>
        <Image loading="eager" src={photo07} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "蕭孟然掌中劇團 台中",
    social: {
      official: "",
      fb: "https://www.facebook.com/A0931983379/",
      ig: "",
      yt: "https://www.youtube.com/channel/UCEczmfU1FJVfH9tbe60cL-Q",
    },
    content: (
      <>
        <Image loading="eager" src={photo08} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          蕭孟然掌中木偶劇團創立於2011年，團長蕭孟然是臺中市在地布袋戲家族之第四代弟子，他從小站在戲台上，看著父親蕭寶堂演戲，耳濡目染下產生了興趣，於是他自編劇碼，開始了屬於自己的演藝生涯，這次蕭團長將帶著當家男主角”白袍少爺”參與本次的伏魔英雄表演，讓我們一起期待英雄與英雄之間擦出的火花。
        </Text>
        <Image loading="eager" src={photo09} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "彰藝園掌中劇團 彰化",
    social: {
      official: "",
      fb: "https://www.facebook.com/%E5%BD%B0%E8%97%9D%E5%9C%92%E6%8E%8C%E4%B8%AD%E5%8A%87%E5%9C%98-103427554564379/",
      ig: "https://www.instagram.com/cyyjjjt_1958/",
      yt: "",
    },
    content: (
      <>
        <Image loading="eager" src={photo02} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          成立於日據初期的「彰藝園掌中劇團」，原名祥盛天，光復後因是彰化市內唯一掌中劇團。得彰化縣政府社會科賜名「彰藝園掌中劇團」沿用至今，至今已歷經四代，目前的團主為陳韋佑先生，另外還有韋廷、韋勳兩位弟弟，三人共挑大樑，是非常有潛力的年輕輩劇團。
        </Text>
        <Image loading="eager" src={photo03} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "新勝景掌中劇團",
    social: {
      official: "",
      fb: "https://www.facebook.com/shinergypuppetshow/",
      ig: "https://www.instagram.com/shinergypuppet/",
      yt: "https://www.youtube.com/channel/UC978fGHTdoAm4kOcSwDaiiA",
    },
    content: (
      <>
        <Image loading="eager" src={photo10} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          新勝景掌中劇團1996年創團成立於臺中豐原， 前身為朱清貴掌中劇團， 第一代團主為朱清貴先生，目前劇團由第二代團主朱勝珏接任。
        </Text>
        <Image loading="eager" src={photo11} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "傳統戲偶頭製作體驗 河洛坊布袋戲",
    social: {
      official: "http://www.holofang.com/Default.asp",
      fb: "https://www.facebook.com/holofang/",
      ig: "",
      yt: "",
    },
    content: (
      <>
        <Image loading="eager" src={photo13} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="16px" lineHeight="1.6em" my="22px" fontWeight="400">
          課程時間 12/31(五)上午9:30-12:00 或 12/31(五)下午15:30-18:00 (相同教學內容，敬請兩場擇一)
        </Text>
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          「遵循古法工藝，再現傳統細膩之美」 河洛坊的林銘文老師於2000年注入新理念，憑藉著對傳統戲曲與工藝的一股熱忱，致力於台灣傳統布袋戲藝術的傳承與創新。
          <br />
          戲偶作為操偶師肉體與意志的延伸，可以說是整個布袋戲的菁華，一尊尊精緻的戲偶代表著每一個角色在戲台上的生命，製作戲偶對於衣裝、髮型、帽飾無不講究，因應時代的推移，河洛坊也以兼具古典與創意的包裝設計吸引收藏者的目光，賦予偶新的意義。
          <br />
          近年河洛坊更開創了一系列DIY課程，透過簡短時間的教學，讓學生體驗製藕的樂趣以及布袋戲的文化魅力。
        </Text>
        <Image loading="eager" src={photo12} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "小佈景繪製體驗 陳明山布袋戲佈景工作室",
    social: {
      official: "",
      fb: "https://www.facebook.com/%E9%99%B3%E6%98%8E%E5%B1%B1%E5%B8%83%E8%A2%8B%E6%88%B2%E4%BD%88%E6%99%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4-181176831941898/",
      ig: "",
      yt: "",
    },
    content: (
      <>
        <Image loading="eager" src={photo14} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="16px" lineHeight="1.6em" my="22px" fontWeight="400">
          課程時間 1/1(六)上午9:30-12:00 或 1/1(六)下午15:30-18:00 (相同教學內容，敬請兩場擇一)
        </Text>
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          「傳承於佈景彩繪的一代宗師，畫出掌中劇的新紀元。」
          <br />
          位於溪口鄉疊溪村下員林的佈景彩繪大師-陳明山；原係嘉義縣新港鄉望族，只因家族的沒落，在14歲時拜入朝陽派第三代傳人-張錦濤(耀元)門下為徒，開啟了與筆為伍的彩繪人生。
          <br />
          在師父張錦濤門下7年，不僅學習到戲劇佈景彩繪，同時也學習到電影廣告的繪製，機關變景的製作等；在民國58年更以電影廣告手法繪製了人生第一棚戲劇佈景，聞名而至的劇團更是不勝枚舉，其中包含了有五洲園-黃海岱、隆興閣-廖來興、新世界-陳俊然、光興閣-鄭武雄、進興閣-廖英啟、五洲小桃源-孫正明等等大師級客戶。
          <br />
          陳明山師傅目前在工作室中不僅有能讓大眾了解佈景彩繪繪製過程，與其涵蓋領域的寬廣，復育了難得一見5~60年代當時的機關變景，更設立了戲劇舞臺，利用戲劇加深大眾對佈景彩繪的印象，也有讓大眾同樂的彩繪DIY活動，進而推廣台灣特有的戲劇佈景彩繪藝術。
        </Text>
        <Image loading="eager" src={photo15} alt="" width="854" height="359" layout="responsive" />
      </>
    ),
  },
  {
    title: "布袋戲道具製作體驗 三昧堂",
    social: {
      official: "",
      fb: "https://www.facebook.com/SamadhiTang/",
      ig: "https://www.instagram.com/samadhitang/",
      yt: "https://www.youtube.com/channel/UCWdBvpj0qMJYrHZGL-Fg_4w",
    },
    content: (
      <>
        <Image loading="eager" src={photo16} alt="" width="854" height="359" layout="responsive" />
        <Text fontSize="16px" lineHeight="1.6em" my="22px" fontWeight="400">
          課程時間 1/2(日)上午9:30-12:00 或 1/2(日)下午15:30-18:00 (相同教學內容，敬請兩場擇一)
        </Text>
        <Text fontSize="20px" lineHeight="1.6em" my="22px" fontWeight="300">
          「這個世界上就是有一種夥伴，你跟他們聊布袋戲可以聊到忘記去小便。」-小金老師如是說
          「三昧堂」是由一群來自不同領域的好朋友，因為對布袋戲共同的熱愛組成，成員們大多都居住在嘉義。截至2021年，已經完成了220餘件自行設計製作的精工戲偶作品。2020
          年「敦睦遠航訓練支隊台灣工藝之美展覽」，外交部與國防部挑選了三個袋戲團做為台灣布袋戲文化代表，前往帛琉展覽，分別是「新興閣掌中劇團」（傳統布袋戲）、「霹靂國際多媒體」（電視布袋戲）及「三昧堂創意木偶團隊」（精工布袋戲）。從一個業餘玩家組成的團隊，變成文化外交大使，這一路走來，有辛苦，有歡樂，更多的是對布袋戲始終不變的那股熱情。
        </Text>
        <Image loading="eager" src={photo17} alt="" width="854" height="408" layout="responsive" />
      </>
    ),
  },
]

export default function Master() {
  const { ref, entry } = useInView({ threshold: 0.1, triggerOnce: true })
  const [modalVisible, setModalVisible] = useState(false)
  const [modalData, setModalData] = useState(data[0])

  return (
    <Styled.Container ref={ref}>
      <Styled.Slogan>七團英雄好漢 X 共同聯手</Styled.Slogan>
      <Styled.Grid variants={gridVariants} initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"}>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img01}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[0])
              }}
            />
            <Styled.ImageText>陳錫煌掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[0])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img02}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[1])
              }}
            />
            <Styled.ImageText>新西園掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[1])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img03}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[2])
              }}
            />
            <Styled.ImageText>聲五洲掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[2])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img04}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[3])
              }}
            />
            <Styled.ImageText>真吉祥掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[3])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img05}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[4])
              }}
            />
            <Styled.ImageText>蕭孟然掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[4])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img06}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[5])
              }}
            />
            <Styled.ImageText>彰藝園掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[5])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.ImageWrapper>
            <Image
              loading="eager"
              src={img07}
              alt=""
              width="400"
              height="260"
              layout="responsive"
              onClick={() => {
                setModalVisible(true)
                setModalData(data[6])
              }}
            />
            <Styled.ImageText>新勝景掌中劇團</Styled.ImageText>
            <Box position="absolute" bottom="0" right="0">
              <ReadMore
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[6])
                }}
              />
            </Box>
          </Styled.ImageWrapper>
        </Styled.GridItem>
        <Styled.GridItem variants={gridItemVariants}>
          <Styled.SpecialTeamText>SPECIAL TEAM</Styled.SpecialTeamText>
          <Styled.SpecialTeamNameText>太日樂集</Styled.SpecialTeamNameText>
          <Image loading="eager" src={img08} alt="" width="533" height="300" layout="responsive" />
        </Styled.GridItem>
      </Styled.Grid>
      <Styled.BehindScene>
        <Styled.BgWrapper>
          <Image loading="eager" src={bg} alt="" width="400" height="260" layout="responsive" />
        </Styled.BgWrapper>
        <Text color="#FFFFFF" fontSize={[0, "18px", "32px", "48px"]} textAlign="center" as="p" mb={[0, "12px", "16px", "36px"]}>
          各路頂尖好漢一起打造全新世界
        </Text>
        <Text color="#FFFFFF" fontSize={[0, "16px", "24px"]} textAlign="center" as="p" mb="24px">
          有關我們的幕後製作
        </Text>
        <Flex maxWidth="1000px" margin="0 auto 36px auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 3]}>
            <Image loading="eager" src={img09} alt="" width="400" height="260" layout="responsive" />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Image loading="eager" src={img10} alt="" width="400" height="260" layout="responsive" />
          </Box>
          <Box width={[1, 1, 1 / 3]}>
            <Image loading="eager" src={img11} alt="" width="400" height="260" layout="responsive" />
          </Box>
        </Flex>
        <ReadMore />
      </Styled.BehindScene>
      <Box bg="#FFFFFF" py="64px">
        <Text color="#000000" fontSize="48px" textAlign="center" as="p" mb="64px">
          獨家課程．全新設計
        </Text>
        <Flex maxWidth="1200px" margin="0 auto 36px auto" flexWrap="wrap">
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image
                loading="eager"
                src={img12}
                alt=""
                width="400"
                height="260"
                layout="responsive"
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[7])
                }}
              />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                傳統戲偶頭製作體驗
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore
                  onClick={() => {
                    setModalVisible(true)
                    setModalData(data[7])
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image
                loading="eager"
                src={img13}
                alt=""
                width="400"
                height="260"
                layout="responsive"
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[8])
                }}
              />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                小佈景繪製體驗
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore
                  onClick={() => {
                    setModalVisible(true)
                    setModalData(data[8])
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box width={[1, 1, 1 / 3]} p={[0, "12px", "12px", "24px"]}>
            <Box position="relative">
              <Image
                loading="eager"
                src={img14}
                alt=""
                width="400"
                height="260"
                layout="responsive"
                onClick={() => {
                  setModalVisible(true)
                  setModalData(data[9])
                }}
              />
              <Text
                color="#FFFFFF"
                fontSize={[0, "32px", "24px", "32px"]}
                position="absolute"
                top="8px"
                left="8px"
                fontWeight="700"
                textShadow="0px 3px 6px #000000"
              >
                布袋戲道具製作體驗
              </Text>
              <Box position="absolute" bottom="0" right="0">
                <ReadMore
                  onClick={() => {
                    setModalVisible(true)
                    setModalData(data[9])
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Modal
        visible={modalVisible}
        title={modalData.title}
        social={modalData.social}
        onClose={() => {
          setModalVisible(false)
        }}
      >
        {modalData.content}
      </Modal>
    </Styled.Container>
  )
}
