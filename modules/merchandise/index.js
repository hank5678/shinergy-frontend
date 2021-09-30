import Header from "components/Header"
import Footer from "components/Footer"
import Box from "components/Box"
import Text from "components/Text"
import Flex from "components/Flex"
import * as Styled from "./styled"
import Image from "next/image"
import Modal from "components/Modal"
import Input from "components/Input"

const Button = ({ children, url }) => (
  <Styled.Button href={url} target="_blank" rel="noreferrer">
    {children}
    <Styled.ArrowIcon />
  </Styled.Button>
)

const Commodity = ({ name, oldPrize, newPrize, url, image }) => (
  <Box width={[1, 1, 1 / 2, 1 / 4]} padding="25px">
    <Styled.ImageWrapper>
      <Styled.ImageShadow />
      <Image loading="eager" src={`https://shinergy.herokuapp.com${image.url}`} alt="" width={image.width} height={image.height} layout="responsive" />
    </Styled.ImageWrapper>
    <Text fontSize="24px" color="#FFFFFF" textAlign="center" mt="32px" mb="24px">
      {name}
    </Text>
    <Box textAlign="center" mb="24px">
      <Text
        as="span"
        fontSize="16px"
        fontWeight="100"
        color="#FFFFFF"
        textAlign="center"
        verticalAlign="middle"
        style={{ textDecoration: "line-through", marginRight: 16 }}
      >
        ${oldPrize}
      </Text>
      <Text as="span" fontSize="32px" fontWeight="700" color="#FFFFFF" textAlign="center" verticalAlign="middle">
        ${newPrize}
      </Text>
    </Box>
    <Box textAlign="center">
      <Button url={url}>我要訂購</Button>
    </Box>
  </Box>
)

export default function Merchandise({ data }) {
  console.log(data)
  return (
    <>
      <Header />
      <Box pt="64px" mb="32px">
        <Text fontSize="46px" color="#FFFFFF" textAlign="center" mb="32px">
          限量周邊商品
        </Text>
        <Text fontSize="24px" color="#FFFFFF" textAlign="center" mb="64px">
          只在2021年伏魔英雄帖．再現白光劍
        </Text>
        <Flex flexWrap="wrap" maxWidth={[0, "400px", "600px", "1200px"]} margin="0 auto">
          {data.map((el) => (
            <Commodity key={el.id} name={el.name} oldPrize={el.originalPrice} newPrize={el.specialPrice} url={el.url} image={el.image} />
          ))}
        </Flex>
      </Box>
      {/* <Modal visible={true}>
        <Flex>
          <Box width={1 / 2}>11</Box>
          <Box width={1 / 2}>
            <Text fontSize="46px">伏魔百寶帆布袋</Text>
            <Text fontSize="22px">
              尺寸：8cm
              <br />
              顏色：紅色／彩色印刷
              <br />
              材質：陶瓷吸水杯墊．台灣製
              <br />
              使用注意：請勿使用酒精、強酸強鹼之清潔劑與易刮傷表面的器具刷洗，以免將油墨刷除掉。發現髒污越早清洗越好。
            </Text>
            <Text fontSize="46px">訂購資訊</Text>
            <Input label="您的姓名*" />
            <Input label="聯絡電話*" />
            <Input label="您的E-mail*" />
            <Input label="寄送地址*" />
            <Input label="訂購數量*" />
          </Box>
        </Flex>
      </Modal> */}
      <Footer />
    </>
  )
}
