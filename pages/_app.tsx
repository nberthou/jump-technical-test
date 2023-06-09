import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import styled, { createGlobalStyle } from 'styled-components'

import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`


const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Container>
        <h1>🍻 Jump - Beer catalog</h1>
      <Component {...pageProps} />
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
