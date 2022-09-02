import type { NextPage } from 'next'
import Head from 'next/head'
import TokenTest from '../components/TokenTest'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Style Token Tailwind Example</title>
        <meta name="description" content="A style token implementation for Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <TokenTest />
    </div>
  )
}

export default Home
