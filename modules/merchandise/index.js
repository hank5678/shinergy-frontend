import Header from "components/Header"
import Footer from "components/Footer"
import Box from "components/Box"
import Text from "components/Text"
import Flex from "components/Flex"
import * as Styled from "./styled"
import Image from "next/image"

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
      <Footer />
    </>
  )
}
