import React from "react"
import Text from "components/Text"
import * as Styled from "./styled"
import { Flex, Box } from "@rebass/grid"
import Image from "next/image"
import logoImg from "./logo.png"

export default function Footer({ simplify }) {
  return (
    <Styled.Container>
      {!simplify && (
        <Flex maxWidth="1200px" margin="0 auto" pt="64px" mb="32px" flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} px="16px" mb="64px">
            <Text fontSize="20px" fontWeight="700" mb="12px">
              團體優惠
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="64px" lineHeight="1.5em">
              30張以上團體購票另有優惠方案，歡迎電洽 0963214199 林小姐。
            </Text>
            <Text fontSize="20px" fontWeight="700" mb="12px">
              身心障礙人士優惠
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="64px" lineHeight="1.5em">
              身障人士及陪同者(1位)購票享8折優惠，入場時須出示證件，身障人士與陪同者須同時入場。輪椅席為提供輪椅之觀眾購買，請Email至本劇團購買。
            </Text>
            <Text fontSize="17px" fontWeight="700" mb="24px">
              演出單位／策畫者：新勝景掌中劇團
            </Text>
            <Text fontSize="17px" fontWeight="700" mb="24px">
              主辦單位：國立傳統藝術中心、新勝景掌中劇團
            </Text>
            <Text fontSize="17px" fontWeight="700" mb="24px">
              承辦單位：新勝景掌中劇團
            </Text>
            <Text fontSize="17px" fontWeight="700" mb="24px">
              指導單位：文化部、文化內容策進院
            </Text>
            <Flex alignItems="center" flexWrap="wrap">
              <Box mr="24px" mb="16px" width={1}>
                <Text fontSize="17px" fontWeight="700">
                  本計畫獲文化內容策進院支持
                </Text>
              </Box>
              <Box width={1}>
                <Image loading="eager" src={logoImg} alt="" width="300" height="32" />
              </Box>
            </Flex>
          </Box>
          <Box width={[1, 1, 1 / 2]} px="16px">
            <Text fontSize="20px" fontWeight="700" mb="12px">
              注意事項
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="7px" lineHeight="1.5em">
              01. ibon購票無法享有信用卡優惠。
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="7px" lineHeight="1.5em">
              02. 本演出非親子節目，建議12歲以上觀眾入場觀賞。一人一票需購票入場。退、換票最遲請於演出日7天前辦理，酌收票價10%手續費，逾期恕不受理。
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="7px" lineHeight="1.5em">
              03. 為維護演出品質及其他觀眾權益，遲到及演出中途離席之觀眾，請配合主辦單位安排進場，若有不便敬請見諒。
            </Text>
            <Text fontSize="14px" fontWeight="400" mb="7px" lineHeight="1.5em">
              04. 各項專案優惠不得併享，演出現場購票恕無優惠，最低票價恕無優惠。
            </Text>
            <Text fontSize="14px" fontWeight="400" lineHeight="1.5em">
              05. 主辦單位保留活動調整及活動最終決定權之權利。
            </Text>
          </Box>
        </Flex>
      )}

      <Box as="footer" py="12px" bg="#222222">
        <Box as="p" color="#FFFFFF" textAlign="center" fontSize={[0, "12px", "16px"]}>
          Copyright © 2021新勝景掌中劇團 SHINERGY PUPPETS SHOW
        </Box>
      </Box>
    </Styled.Container>
  )
}
