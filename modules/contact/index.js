import { useState } from "react"
import Header from "components/Header"
import Footer from "components/Footer"
import Box from "components/Box"
import Text from "components/Text"
import { useForm } from "react-hook-form"
import * as Styled from "./styled"
import Input from "components/Input"
import Select from "components/Select"
import TextArea from "components/TextArea"
import axios from "axios"
import Modal from "components/Modal"
import Button from "components/Button"

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)
  const onSubmit = (data) => {
    if (loading === false) {
      setLoading(true)
      axios({
        method: "post",
        url: "https://shinergy.herokuapp.com/contacts",
        data,
      }).then((res) => {
        setLoading(false)
        setSuccessModalVisible(true)
        reset()
      })
    }
  }
  const [successModalVisible, setSuccessModalVisible] = useState(false)

  return (
    <>
      <Header />
      <Box mt="150px" mb="64px" px="16px">
        <Text fontSize={[0, "24px", "46px"]} color="#FFFFFF" textAlign="center" mb="24px">
          聯絡我們
        </Text>
        <Text fontSize={[0, "16px", "24px"]} color="#FFFFFF" textAlign="center" mb="64px" lineHeight="1.4em">
          聯絡我們 若有合作商演或相關諮詢，都非常歡迎與我們聯繫!
        </Text>
        <Styled.Form maxWidth="400px" margin="0 auto" pb="24px" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="您的姓名*"
            color="#FFFFFF"
            error={errors.name}
            id="name"
            {...register("name", { required: { value: true, message: "請填寫欄位" }, maxLength: { value: 20, message: "限20字以內" } })}
          />
          <Input
            label="聯絡電話*"
            color="#FFFFFF"
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
            color="#FFFFFF"
            error={errors.email}
            id="email"
            {...register("email", {
              required: { value: true, message: "請填寫欄位" },
              pattern: { value: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/, message: "格式錯誤" },
            })}
          />
          <Select
            label="您希望與我們合作的項目？*"
            color="#FFFFFF"
            error={errors.num}
            id="teamwork"
            {...register("teamwork", { required: { value: true, message: "請選擇" } })}
          >
            <Styled.Option value="媒體採訪">媒體採訪</Styled.Option>
            <Styled.Option value="商業合作">商業合作</Styled.Option>
            <Styled.Option value="活動詢價">活動詢價</Styled.Option>
            <Styled.Option value="其他">其他</Styled.Option>
          </Select>
          <TextArea
            label="其他您想與我們說的話"
            color="#FFFFFF"
            error={errors.message}
            id="message"
            {...register("message", { maxLength: { value: 50, message: "限50字以內" } })}
          />
          <Styled.Button value="送出" />
        </Styled.Form>
      </Box>
      <Footer simplify />
      <Modal
        visible={successModalVisible}
        onClose={() => {
          setSuccessModalVisible(false)
        }}
        fullHeight={false}
        width={600}
      >
        <Text fontSize="46px" fontWeight="700" textAlign="center" mb="24px">
          已收到您的訊息
        </Text>
        <Text fontSize="22px" textAlign="center" lineHeight="1.6em" mb="24px">
          我們將儘快回覆您的詢問，
          <br />
          敬請於近期內確認貴司的Email信箱，
          <br />
          謝謝！
        </Text>
        <Button
          onClick={() => {
            setSuccessModalVisible(false)
          }}
        >
          返回
        </Button>
      </Modal>
    </>
  )
}
