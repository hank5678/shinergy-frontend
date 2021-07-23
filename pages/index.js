import Head from 'next/head'
import Markdown from 'react-markdown'
import axios from "axios"

export default function Home({data}) {
  console.log(data)
  return (
    <div>
      <Head>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{data.title}</p>
      
      <Markdown>{data.bio}</Markdown>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await axios({method: "get", url: "https://shinergy.herokuapp.com/home"})
  const {data} = res
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }
  }
}