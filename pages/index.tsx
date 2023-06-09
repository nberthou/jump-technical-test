import type { NextPage } from 'next'
import Head from 'next/head'

import { BeersList } from './components/BeersList'
import { RandomBeersList } from './components/RandomBeersList'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jump - Beer catalog</title>
        <meta name="description" content="A beer catalog example for the Jump technical interview." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <RandomBeersList />
        <BeersList />
    </>
  )
}

export default Home
