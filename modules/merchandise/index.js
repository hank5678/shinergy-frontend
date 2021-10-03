import { useEffect, useState, useRef } from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import Box from "components/Box"
import Text from "components/Text"
import Flex from "components/Flex"
import * as Styled from "./styled"
import Image from "next/image"
import Modal from "components/Modal"
import Input from "components/Input"
import Button from "components/Button"
import Select from "components/Select"
import { useForm } from "react-hook-form"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import axios from "axios"

const ListButton = ({ children, onClick }) => (
  <Styled.Button onClick={onClick}>
    {children}
    <Styled.ArrowIcon />
  </Styled.Button>
)

const Commodity = ({ name, oldPrize, newPrize, url, images, onClick }) => (
  <Box width={[1, 1, 1 / 2, 1 / 4]} padding="25px">
    <Styled.ImageWrapper>
      <Styled.ImageShadow />
      {/* src={`https://shinergy.herokuapp.com${images[0].url}`} */}
      <Image loading="eager" src={`${images[0].url}`} alt="" width={images[0].width} height={images[0].height} layout="responsive" />
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
      <ListButton onClick={onClick}>我要訂購</ListButton>
    </Box>
  </Box>
)

export default function Merchandise({ data }) {
  const [visible, setVisible] = useState(false)
  const [successModalVisible, setSuccessModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [currentSliderId, setCurrentSliderId] = useState(0)
  const [modalData, setModalData] = useState({ name: "", description: "", images: [] })
  const sliderRef = useRef()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (current, next) => {
      console.log(next)
      setCurrentSliderId(next)
    },
  }

  const onSubmit = (submitData) => {
    if (loading === false) {
      setLoading(true)
      axios({
        method: "post",
        url: "https://shinergy.herokuapp.com/merchandise-orders",
        data: {
          ...submitData,
          merchandise: modalData.name,
        },
      }).then((res) => {
        setLoading(false)
        setVisible(false)
        setSuccessModalVisible(true)
        reset()
      })
    }
  }

  useEffect(() => {
    if (visible) {
      reset()
      setCurrentSliderId(0)
    }
  }, [visible, reset])

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
            <Commodity
              key={el.id}
              name={el.name}
              oldPrize={el.originalPrice}
              newPrize={el.specialPrice}
              url={el.url}
              images={el.images}
              onClick={() => {
                setVisible(true)
                setModalData({ name: el.name, description: el.description, images: el.images })
              }}
            />
          ))}
        </Flex>
      </Box>

      <Modal
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        fullHeight={true}
        width={1000}
      >
        <Flex flexWrap="wrap">
          <Box width={[0, 1, 1, 1 / 2]} padding={[0, "0 16px", "0 48px"]} mb={[0, "32px", 0]}>
            <Slider {...settings} ref={sliderRef}>
              {modalData.images.map((el, id) => (
                <div key={id}>
                  <Image loading="eager" src={`${el.url}`} alt="" width={el.width} height={el.height} layout="responsive" />
                </div>
              ))}
            </Slider>
            {modalData.images.length >= 2 && (
              <Flex>
                {modalData.images.map((el, id) => (
                  <Box
                    key={id}
                    width={1 / modalData.images.length}
                    cursor="pointer"
                    outline={currentSliderId === id ? "4px solid #000000" : "none"}
                    zIndex={currentSliderId === id ? "1" : "none"}
                    onClick={() => {
                      sliderRef.current.slickGoTo(id)
                    }}
                  >
                    <Image loading="eager" src={`${el.url}`} alt="" width={el.width} height={el.height} layout="responsive" />
                  </Box>
                ))}
              </Flex>
            )}
          </Box>
          <Box width={[0, 1, 1, 1 / 2]}>
            <Text fontSize={[0, "24px", "24px", "36px"]} fontWeight="700" mb="24px">
              {modalData.name}
            </Text>
            <Text fontSize={[0, "14px", "14px", "18px"]} mb="48px" lineHeight="1.6em" whiteSpace="pre-line">
              {modalData.description}
            </Text>
            <Text fontSize={[0, "24px", "24px", "36px"]} fontWeight="700" mb="28px">
              訂購資訊
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="您的姓名*"
                error={errors.name}
                id="name"
                {...register("name", { required: { value: true, message: "請填寫欄位" }, maxLength: { value: 20, message: "限20字以內" } })}
              />
              <Input
                label="聯絡電話*"
                type="tel"
                error={errors.tel}
                id="tel"
                {...register("tel", {
                  required: { value: true, message: "請填寫欄位" },
                  pattern: { value: /^09[\d]{8}$/, message: "格式錯誤" },
                })}
              />
              <Input
                label="您的E-mail*"
                error={errors.email}
                id="email"
                {...register("email", {
                  required: { value: true, message: "請填寫欄位" },
                  pattern: { value: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/, message: "格式錯誤" },
                })}
              />
              <Input
                label="寄送地址*"
                error={errors.address}
                id="address"
                {...register("address", { required: { value: true, message: "請填寫欄位" }, maxLength: { value: 40, message: "限40字以內" } })}
              />
              <Select label="訂購數量*" error={errors.num} id="num" {...register("num", { required: { value: true, message: "請選擇" } })}>
                <option value={1}>1個</option>
                <option value={2}>2個</option>
                <option value={3}>3個</option>
                <option value={4}>4個</option>
                <option value={5}>5個</option>
              </Select>
              <Input label="備註" error={errors.remark} id="remark" {...register("remark", { maxLength: { value: 50, message: "限50字以內" } })} />
              <Button as="input" type="submit" value="送出" />
              {Object.keys(errors).length > 0 && (
                <Text color="#B70000" fontSize="22px" mt="16px" textAlign="center">
                  尚有資訊未完成，請檢查您所填寫的資料
                </Text>
              )}
            </form>
          </Box>
        </Flex>
      </Modal>
      <Modal
        visible={successModalVisible}
        onClose={() => {
          setSuccessModalVisible(false)
        }}
        fullHeight={false}
        width={600}
      >
        <Text fontSize="46px" fontWeight="700" textAlign="center" mb="24px">
          已收到您的訂購資料
        </Text>
        <Text fontSize="22px" textAlign="center" lineHeight="1.6em" mb="24px">
          請您留意您的E-mail電子信箱及手機簡訊，
          <br />
          我們將儘快寄出您所訂購的商品！ <br />
          謝謝！
        </Text>
        <Button
          onClick={() => {
            setSuccessModalVisible(false)
          }}
        >
          返回商品頁
        </Button>
      </Modal>
      <Footer />
    </>
  )
}
