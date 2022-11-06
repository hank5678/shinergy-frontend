import page from "modules/news"
import axios from "axios"
export default page

export async function getServerSideProps(context) {
  const res = await axios({ method: "get", url: "https://shinergy.herokuapp.com/homepage" })
  const newsRes = await axios({ method: "get", url: "https://shinergy.herokuapp.com/homepage-news" })

  const { data } = res
  const { data: news } = newsRes

  if (!data || !news) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, news },
  }
}
