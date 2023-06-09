import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

import { BeersList } from './components/BeersList'

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jump - Beer catalog</title>
        <meta name="description" content="A beer catalog example for the Jump technical interview." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>🍻 Jump - Beer catalog</h1>
        <BeersList />
      </Container>
    </div>
  )
}

export default Home
