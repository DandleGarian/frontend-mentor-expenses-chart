import Head from 'next/head'
import Chart from '../components/Chart'
import Balance from '../components/Balance'

export default function Home({ data }) {

  return (
    <div className='bg-cream flex flex-col gap-2 items-center justify-center h-screen w-screen font-dm-sans'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Balance />
      <Chart data={data} />
    </div>
  )
}

import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json')
  const jsonData = await fsPromises.readFile(filePath)
  const data = JSON.parse(jsonData)
  return {
    props: {
      data
    }
  }
}
