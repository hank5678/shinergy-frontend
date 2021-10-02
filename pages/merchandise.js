import page from "modules/merchandise"
import axios from "axios"
export default page

export async function getServerSideProps(context) {
  // const res = await axios({ method: "get", url: "https://shinergy.herokuapp.com/merchandises" })
  const res = await axios({ method: "get", url: "https://shinergy.herokuapp.com/merchandises?_sort=id" })
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
