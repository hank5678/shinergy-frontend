import page from "modules/contact"
import axios from "axios"
export default page

export async function getServerSideProps(context) {
  const res = await axios({ method: "get", url: "https://shinergy.herokuapp.com/home" })
  const { data } = res
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}
